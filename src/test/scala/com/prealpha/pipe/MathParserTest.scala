package com.prealpha.pipe

import org.scalatest._
import scala.util.{Failure, Success}

class MathParserTest extends FlatSpec with Matchers {
  "MathParser" should "parse expression lists" in {
    val parseResult = MathParser.parse(MathParser.exprList, "a, b, c") match {
      case MathParser.Success(result, next) => Success(result)
      case MathParser.NoSuccess(msg, next) => Failure(new Exception(msg))
    }
    parseResult should be (Success(List("a", "b", "c")))
  }

  it should "parse symbols" in {
    MathParser(":phi") should be (Success("\\phi"))
    MathParser(":alpha") should be (Success("\\alpha"))
  }

  it should "handle vertical division" in {
    MathParser("a + b / c") should be (Success("a+b/c"))
  }

  it should "handle horizontal division" in {
    MathParser("(a + b) / c") should be (Success("\\dfrac{a+b}{c}"))
    MathParser("a + b / (c)") should be (Success("a+\\dfrac{b}{c}"))
    MathParser("a + b / ((c))") should be (Success("a+\\dfrac{b}{(c)}"))
  }

  it should "handle superscripts" in {
    MathParser("2 ^ n") should be (Success("2^{n}"))
    MathParser("2 ^ (n + 1)") should be (Success("2^{n+1}"))
    MathParser("(n + 1) ^ 2") should be (Success("(n+1)^{2}"))
  }

  it should "handle subscripts" in {
    MathParser("n_2") should be (Success("n_{2}"))
    MathParser("k_(n+1)") should be (Success("k_{n+1}"))
    MathParser("(n+1)_i") should be (Success("(n+1)_{i}")) // ok, this one is a bit contrived
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
      be (Success("""\left( \begin{array}{ccc} a & b & c \\ d & e & f \\ g & h & i \\  \end{array} \right)"""))
  }
}
