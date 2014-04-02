package com.prealpha.pipe.math

import org.scalatest.{Matchers, FlatSpec}


class RegressionTest extends FlatSpec with Matchers {
  def parse(s: String): Seq[MathExpr] = MathParser.tryParse(s).get

  def parse1(s: String): MathExpr = {
    val parsed = MathParser.tryParse(s).get
    if (parsed.length != 1) {
      println(parsed)
      assert(parsed.length == 1)
    }
    parsed.head
  }

  "commas inside of improperly formatted blocks" should "throw errors" in {
    val input = "!sqrt((a + b)/(123,456))"
    val parsed = parse1(input)
  }
}
