package com.prealpha.pipe

import org.scalatest._

class MathParserTest extends FlatSpec with Matchers {
  "MathParser" should "parse matrix macros" in {
    val matrix =
      """!matrix(
        |  a, b, c;
        |  d, e, f;
        |  g, h, i
        |)
      """.stripMargin
    MathParser(matrix) should
      be (Some("""\left( \begin{array}{ccc} \\ a & b & c \\ d & e & f \\ g & h & i \\ \end{array} \right)"""))
  }
}
