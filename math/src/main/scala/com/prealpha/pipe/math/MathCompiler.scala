package com.prealpha.pipe.math

object MathCompiler {
  final case class Failure(msg: String, cause: Option[Any], offset: (Int, Int))

  private[math] type Result[+T] = Either[Failure, T]

  /** Attempts to compile `source` from math markup into TeX, producing a [[scala.util.Try]] depending on whether
    * compilation was successful. `source` may contain multiple lines, but each line will be treated separately and the
    * emitted TeX will contain line breaks between them, unless the input lines are explicitly joined by ending them
    * with backslashes.
    *
    * `alignToken` is supported for the benefit of the document compiler's `|equation` blocks. If some token is
    * provided, the compiler will first attempt to compile that token by itself, which must produce a single "atomic"
    * value; it must be a single expression, not several. Then, after `source` is compiled, the compiler will
    * additionally verify that each (logical) line contains exactly one instance of the alignment expression.
    *
    * @param source the math markup to compile
    * @param alignToken optionally, a token which must be present once on every line
    * @return a compiled TeX string corresponding to `source`
    */
  def compile(source: String, alignToken: Option[String] = None): Either[Seq[Failure], String] = {
    val alignExpr = alignToken map parseToken flatMap {
      case Right(expr) => Some(expr)
      case _ => None
    }

    val preprocessed = MathPreprocessor.preprocess(source)
    val parsed = preprocessed map (_.right flatMap (MathParser.parseLine(_, alignExpr)))
    val generated = parsed map (_.right map MathCodeGenerator.genEntire)
    if (generated forall (_.isRight))
      Right((generated map (_.right.get)).mkString(" \\\\\n"))
    else
      Left(generated.zipWithIndex filter (_._1.isLeft) map (f => (f._1.left.get, f._2)) map {
        case (original, index) =>
          val (line, col) = original.offset
          Failure(original.msg, original.cause, (line + index, col))
      })
  }

  private def parseToken(token: String): Result[MathExpr] = {
    val preprocessed = MathPreprocessor.preprocess(token)
    if (preprocessed.length == 1)
      preprocessed.head.right flatMap { line =>
        MathParser.parseLine(line, None).right flatMap { result =>
          if (result.length == 1)
            Right(result.head)
          else
            Left(Failure("alignToken is not a single token", None, line.offset(0)))
        }
      }
    else
      preprocessed.head.right flatMap { line =>
        Left(Failure("alignToken is not a single logical line", None, line.offset(line.length - 1)))
      }
  }
}
