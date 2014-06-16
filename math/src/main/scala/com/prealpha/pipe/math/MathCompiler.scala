package com.prealpha.pipe.math

object MathCompiler {
  final case class Failure(msg: String, cause: Option[Any], offset: (Int, Int))

  private[math] type Result[+T] = Either[Failure, T]

  /** Attempts to compile `source` from math markup into TeX, producing either a `String` of generated TeX or a `Seq`
    * of one or more compilation [[com.prealpha.pipe.math.MathCompiler.Failure Failure]]s.
    *
    * `source` may consist of multiple lines; in this case, before any further compilation occurs, the markup will be
    * translated into a sequence of logical lines, each of which corresponds to one or more physical lines. If a
    * physical line ends in a backslash character, that line will be joined to the next one to produce a single logical
    * line. Logical lines are separated in the output by TeX line breaks (double backslashes).
    *
    * `alignToken` is supported for the benefit of the document compiler's `|equation` blocks. If some token is
    * provided, the compiler will first attempt to compile that token by itself, which must produce a single "atomic"
    * value; it must be a single expression, not several. Then, after `source` is compiled, the compiler will run an
    * additional stage to verify that each logical line contains exactly one instance of the alignment expression (at
    * the top level) and to insert a TeX aligner (`&`) where the expressions occur. This behavior allows clients to use
    * the output within a TeX equation environment or similar environment requiring aligners.
    *
    * The compiler will attempt to identify and report as many compilation errors as it can at once. Generally, an
    * error occurring during the preprocessor or parser stages will terminate processing of that logical line, while
    * an error during an AST stage will terminate processing of the offending AST node and its ancestors. However,
    * these behaviors are not guaranteed. In `Failure`s, line numbers are reported using the first physical line of
    * `source` as line 1.
    *
    * @param source the math markup to compile
    * @param alignToken optionally, a token which must be present once on every line
    * @return either a compiled Tex string corresponding to `source`, or a `Seq` of one or more compilation `Failure`s
    */
  def compile(source: String, alignToken: Option[String] = None): Either[Seq[Failure], String] = {
    val alignExpr = alignToken map parseToken flatMap {
      case Right(expr) => Some(expr)
      case _ => None
    }

    val preprocessed = MathPreprocessor.preprocess(source)
    val parsed = preprocessed map (_.right flatMap MathParser.parseLine)
    val aligned = parsed map (_.right flatMap AlignmentValidator.validateAlignment(alignExpr))
    val generated = aligned map (_.right map (_ map MathCodeGenerator.generate))
    if (generated forall (_.isRight)) {
      val gathered = generated map (_.right.get) map { line =>
        if (line forall (_.isRight))
          Right(line map (_.right.get) mkString " ")
        else
          Left(line filter (_.isLeft) map (_.left.get))
      }
      if (gathered forall (_.isRight))
        Right(gathered map (_.right.get) mkString " \\\\\n")
      else
        Left(gathered filter (_.isLeft) map (_.left.get) flatten)
    } else {
      val failures = generated map {
        case Right(exprResults) =>
          exprResults filter (_.isLeft) map (_.left.get)
        case Left(failure) =>
          Seq(failure)
      }
      Left(failures.flatten)
    }
  }

  private def parseToken(token: String): Result[MathExpr] = {
    val preprocessed = MathPreprocessor.preprocess(token)
    if (preprocessed.length == 1)
      preprocessed.head.right flatMap { line =>
        MathParser.parseLine(line).right flatMap { result =>
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
