package com.prealpha.pipe.math

import scala.util.{Failure, Success, Try}

object MathCompiler {
  def compile(source: String, alignToken: Option[String] = None): Try[String] = alignToken match {
    case Some(token) =>
      parseToken(token).flatMap(tokenExpr =>
        MathParser.parse(source, Some(tokenExpr)).map(MathCodeGenerator.genEntire)
      )
    case None =>
      MathParser.parse(source).map(MathCodeGenerator.genEntire)
  }

  private def parseToken(token: String): Try[MathExpr] = MathParser.parse(token) match {
    case Success(result) =>
      if (result.length == 1)
        Success(result(0))
      else
        Failure(new ParseException("not a single token", token, ""))
    case Failure(exception) =>
      Failure(exception)
  }
}
