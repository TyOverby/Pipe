package com.prealpha.pipe.math

import org.scalatest.{Matchers, FlatSpec}

class RegressionTest extends FlatSpec with Matchers {
  def parse(s: String): Seq[MathExpr] = MathParser.parseLine(new LogicalLine(s, 1), None).right.get
  def compile(s: String): String = MathCompiler.compile(s).right.get

  def parse1(s: String): MathExpr = {
    val parsed = MathParser.parseLine(new LogicalLine(s, 1), None).right.get
    if (parsed.length != 1) {
      println(parsed)
      assert(parsed.length == 1)
    }
    parsed.head
  }

  "commas inside of document that are outside of the possibility of an argument" should "not throw errors" in {
    parse1("!sqrt((a + b)/(123,456))")
    parse1("!f((a + b)/123)")
    parse("!sqrt((a + b)/123)")
  }

  "commas by themselves" should "be fine" in {
    parse("!sqrt(a, b) ,,,")
    parse("!foo() / 5")
    parse("!sqrt(a, b) / 5")
  }
  "commas outside of a well formatted section" should "throw errors" in {
    val input = "!sqrt((a + b)) / (123, 456)"
    val parsed = parse1(input)
  }
  "matrix variants" should "not break" in {
    compile("!bmatrix(1,2)")
    compile("!Bmatrix(1,2)")
    compile("!pmatrix(1,2)")
  }
}
