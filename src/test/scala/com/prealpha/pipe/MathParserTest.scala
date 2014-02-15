package com.prealpha.pipe

import org.scalatest._

class MathParserTest extends FlatSpec with Matchers {
  "MathParser" should "parse expression lists" in {
    val exprList = "a, b, c"
    (MathParser.parse(MathParser.exprList, exprList) match {
      case MathParser.Success(result, next) => Some(result)
      case _ => None
    }) should be (Some(List("a", "b", "c")))
  }

  it should "parse matrix macros" in {
    val matrix =
      """!matrix(
        |  a, b, c;
        |  d, e, f;
        |  g, h, i
        |)
      """.stripMargin
    MathParser(matrix) should
      be (Some("""\left( \begin{array}{ccc} a & b & c \\ d & e & f \\ g & h & i \\  \end{array} \right)"""))
  }
}
