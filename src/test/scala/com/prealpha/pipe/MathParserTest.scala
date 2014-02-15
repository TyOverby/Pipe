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

  it should "parse symbols" in {
    MathParser(":phi") should be (Some("\\phi"))
    MathParser(":alpha") should be (Some("\\alpha"))
    MathParser(":sin(:theta)") should be (Some("\\sin\\left(\\theta\\right)"))
  }

  it should "handle vertical division" in {
    MathParser("a + b / c") should be (Some("a+b/c"))
  }

  it should "handle horizontal division" in {
    MathParser("(a + b) / c") should be (Some("\\dfrac{a+b}{c}"))
    MathParser("a + b / (c)") should be (Some("a+\\dfrac{b}{c}"))
    MathParser("a + b / ((c))") should be (Some("a+\\dfrac{b}{(c)}"))
  }

  it should "handle superscripts" in {
    MathParser("2 ^ n") should be (Some("2^{n}"))
    MathParser("2 ^ (n + 1)") should be (Some("2^{n+1}"))
    MathParser("(n + 1) ^ 2") should be (Some("(n+1)^{2}"))
  }

  it should "handle subscripts" in {
    MathParser("n_2") should be (Some("n_{2}"))
    MathParser("k_(n+1)") should be (Some("k_{n+1}"))
    MathParser("(n+1)_i") should be (Some("(n+1)_{i}")) // ok, this one is a bit contrived
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
