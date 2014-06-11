package com.prealpha.pipe.math

import org.scalatest._
import com.prealpha.pipe.math

class MathParserTest extends FlatSpec with Matchers {
  def parse(s: String): Seq[MathExpr] =  MathParser.parseLine(new JoinedLine(s), None).right.get
  def parse1(s: String): MathExpr = {
    val parsed = MathParser.parseLine(new JoinedLine(s), None).right.get
    if(parsed.length != 1) {
      println(parsed)
      assert(parsed.length == 1)
    }
    parsed.head
  }

  "NewMathParser" should "parse symbols correctly" in {
    val input = ":delta ^ :delta"
    parse1(input) should be (SuperScript(math.Symbol("delta"), math.Symbol("delta")))
  }

  it should "parse symbols" in {
    parse1(":phi") should be (math.Symbol("phi"))
    parse1(":alpha") should be (math.Symbol("alpha"))
  }

  it should "handle vertical division" in {
    parse("a + b / c") should be (List(Chunk("a"), Chunk("+"), OverDiv(Chunk("b"), Chunk("c"))))
    parse1("(a + b / c)") should be (Paren(Seq(Chunk("a"), Chunk("+"), OverDiv(Chunk("b"), Chunk("c")))))
    parse1("(a + b) / c") should be (OverDiv(Paren(Seq(Chunk("a"), Chunk("+"), Chunk("b"))), Chunk("c")))
    parse("a + b // c") should be (List(Chunk("a"), Chunk("+"), SideDiv(Chunk("b"), Chunk("c"))))
  }

  it should "handle superscripts" in {
    parse1("2 ^ n") should be (SuperScript(Chunk("2"), Chunk("n")))
    // Fuck yeah
    parse1("x^-1") should be (SuperScript(Chunk("x"), Chunk("-1")))
    parse1("2 ^ (n + 1)") should be (SuperScript(Chunk("2"), Paren(Seq(Chunk("n"), Chunk("+"), Chunk("1")))))
    parse1("(n + 1) ^ 2") should be (SuperScript(Paren(Seq(Chunk("n"), Chunk("+"), Chunk("1"))), Chunk("2")))
  }

  it should "handle subscripts" in {
    parse1("n_2") should be (SubScript(Chunk("n"), Chunk("2")))
    parse1("k_(n + 1)") should be (SubScript(Chunk("k"), Paren(Seq(Chunk("n"), Chunk("+"), Chunk("1")))))
    parse1("(n + 1)_i") should be (SubScript(Paren(Seq(Chunk("n"), Chunk("+"), Chunk("1"))), Chunk("i")))
  }

  it should "parse macros" in {
    parse1("!bar(a)") should be (Macro("bar", Seq(Seq(Chunk("a")))))
    parse1("!foo(a,b,c)") should be (Macro("foo", Seq(Seq(Chunk("a")), Seq(Chunk("b")), Seq(Chunk("c")))))
    parse1("!foo(,,c)") should be (Macro("foo", Seq(Seq(), Seq(), Seq(Chunk("c")))))
  }

  it should "parse super macros" in {
    parse1("!matrix(a,b,c; d,e,f; g,h,i)") should be (SuperMacro("matrix", Seq(
      Seq(Seq(Chunk("a")), Seq(Chunk("b")), Seq(Chunk("c"))),
      Seq(Seq(Chunk("d")), Seq(Chunk("e")), Seq(Chunk("f"))),
      Seq(Seq(Chunk("g")), Seq(Chunk("h")), Seq(Chunk("i")))
    )))
  }

  it should "parse @notation as macros" in {
    parse1("foo@hat") should be (Macro("hat", Seq(Seq(Chunk("foo")))))
    parse1(":Delta@vector") should be (Macro("vector", Seq(Seq(Symbol("Delta")))))
    parse1("(a + b)@hat") should be (Macro("hat", Seq(Seq(Paren(Seq(Chunk("a"), Chunk("+"), Chunk("b")))))))
  }

  "chunks of different types" should "be broken up" in {
    parse("a+b") should be (Seq(Chunk("a"), Chunk("+"), Chunk("b")))
    // This reason right here is why we break up chunks by type...
    parse("a+b/c") should be (Seq(Chunk("a"), Chunk("+"), OverDiv(Chunk("b"), Chunk("c"))))
    parse("a+1/-2") should be (Seq(Chunk("a"), Chunk("+"), OverDiv(Chunk("1"), Chunk("-2"))))
  }

  "numeric chunks" should "not get broken apart" in {
    parse1("-1.34") should be (Chunk("-1.34"))
  }

  "operator precedence" should "hold" in {
    parse1("(a+b)/c") should be (OverDiv(Paren(Seq(Chunk("a"), Chunk("+"), Chunk("b"))), Chunk("c")))
    parse1("a_1 / 5")  should be (OverDiv(SubScript(Chunk("a"), Chunk("1")), Chunk("5")))
    parse1("a^(1+x) / 5")  should be (OverDiv(SuperScript(Chunk("a"), Paren(Seq(Chunk("1"), Chunk("+"), Chunk("x")))),
      Chunk("5")))
  }

  "division" should "be nestable" in {
    parse1("(a / b) / c") should be (OverDiv(Paren(Seq(OverDiv(Chunk("a"), Chunk("b")))), Chunk("c")))
    parse1("(a / b) / (c / d)") should be (
      OverDiv(Paren(Seq(OverDiv(Chunk("a"), Chunk("b")))), Paren(Seq(OverDiv(Chunk("c"), Chunk("d")))))
    )
  }

  "comments" should "be parsed" in {
    parse("a + b # Add A and B") should be (Seq(Chunk("a"), Chunk("+"), Chunk("b"), Comment("Add A and B")))
    parse1("# a + # b") should be (Comment("a + # b"))
  }

}
