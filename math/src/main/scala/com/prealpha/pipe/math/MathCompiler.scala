package com.prealpha.pipe.math

object MathCompiler {

  final case class Failure(msg: String, cause: Option[Any], offset: (Int, Int))

  type Result[+T] = Either[Failure, T]

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
  def compile(source: String, alignToken: Option[String] = None): Result[String] = {
    val preprocessed = MathPreprocessor.preprocess(source)
    preprocessed.right flatMap { lines =>
      val alignExpr = alignToken map parseToken flatMap {
        case Right(expr) => Some(expr)
        case _ => None
      }
      val parsed = lines map (MathParser.parseLine(_, alignExpr))
      val generated = parsed map (_.right map MathCodeGenerator.genEntire)
      if (generated forall (_.isRight))
        Right((generated map (_.right.get)).mkString(" \\\\\n"))
      else
        (generated filter (_.isLeft)).head
    }
  }

  private def parseToken(token: String): Result[MathExpr] = {
    MathPreprocessor.preprocess(token).right flatMap { lines =>
      if (lines.length == 1)
        MathParser.parseLine(lines.head, None).right flatMap { result =>
          if (result.length == 1)
            Right(result.head)
          else
            Left(Failure("alignToken is not a single token", None, lines.head.offset(0)))
        }
      else
        Left(Failure("alignToken is not a single line", None, lines.head.offset(0)))
    }
  }
}
