package com.prealpha.pipe.math

import scala.util.{Failure, Success, Try}
//import scala.scalajs.js.annotation.JSExport

//@JSExport
object MathCompiler {
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
//  @JSExport
  def compile(source: String, alignToken: Option[String] = None): Try[String] = alignToken match {
    case Some(token) =>
      parseToken(token).flatMap { tokenExpr =>
        MathParser.parse(source, Some(tokenExpr)).map(MathCodeGenerator.genEntire)
      }
    case None =>
      MathParser.parse(source).map(MathCodeGenerator.genEntire)
  }

  private def parseToken(token: String): Try[MathExpr] = {
    MathParser.parse(token).flatMap { result =>
      if (result.length == 1)
        Success(result(0))
      else
        Failure(new ParseException("not a single token", token, ""))
    }
  }
}
