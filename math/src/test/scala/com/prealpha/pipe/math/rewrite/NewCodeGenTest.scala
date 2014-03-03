package com.prealpha.pipe.math.rewrite

import org.scalatest.matchers.ShouldMatchers
import org.scalatest._

class NewCodeGenTest extends FlatSpec with ShouldMatchers{
  def compile(expr: MathExpr*): String = CodeGen.genEntire(expr)

  "symbols" should "be translated literally to their LaTeX forms" in {
    // :foo
    compile(Symbol("foo")) should be ("\\foo")
  }

  it should "not interfere with nearby forms" in {
    // :foo :bar
    compile(Symbol("foo"), Symbol("bar")) should be("\\foo \\bar")
    // :foo bar
    compile(Symbol("foo"), Chunk("bar")) should be("\\foo bar")
    // :foo + bar
    compile(Symbol("foo"), Chunk("+"), Symbol("bar")) should be("\\foo + \\bar")
  }

  "parenthesis" should "open and close correctly" in {
    // (akbar)
    compile(Paren(Seq(Chunk("akbar")))) should be ("\\left( akbar \\right)")
  }

  it should "not interfere with nearby forms" in {
    // foo (aba jss) baz
    compile(Symbol("foo"), Paren(Seq(Chunk("aba"), Chunk("jss"))), Chunk("baz")) should be {
      "\\foo \\left( aba jss \\right) baz"
    }
  }

  it should "nest properly" in {
    // ((:Delta) :delta)
    compile(Paren(Seq(Paren(Seq(Symbol("Delta"))), Symbol("delta")))) should be {
      "\\left( \\left( \\Delta \\right) \\delta \\right)"
    }
    // ((:Delta) (:delta))
    compile(Paren(Seq(Paren(Seq(Symbol("Delta"))), Paren(Seq(Symbol("delta")))))) should be {
      "\\left( \\left( \\Delta \\right) \\left( \\delta \\right) \\right)"
    }
  }

  "Over division" should "translate cleanly to latex" in {
    // a / b
    compile(OverDiv(Symbol("a"), Chunk("b"))) should be ("\\dfrac{\\a}{b}")
  }

  it should  "remove unnecissary parenthesis" in {
    // (:alpha :beta) / (foo bar)
    compile(OverDiv(Paren(Seq(Symbol("alpha"), Symbol("beta"))), Paren(Seq(Chunk("foo"), Chunk("bar"))))) should be {
      "\\dfrac{\\alpha \\beta}{foo bar}"
    }

    // (:alpha :beta) / foo
    compile(OverDiv(Paren(Seq(Symbol("alpha"), Symbol("beta"))), Chunk("foo"))) should be {
      "\\dfrac{\\alpha \\beta}{foo}"
    }

    // :alpha / (foo bar)
    compile(OverDiv(Symbol("alpha"), Paren(Seq(Chunk("foo"), Chunk("bar"))))) should be {
      "\\dfrac{\\alpha}{foo bar}"
    }
  }

  it should "not remove extra parenthesis" in {
    // ((:alpha :beta)) / (foo bar)
    compile(OverDiv(Paren(Seq(Paren(Seq(Symbol("alpha"), Symbol("beta"))))), Paren(Seq(Chunk("foo"), Chunk("bar"))))) should be {
      "\\dfrac{\\left( \\alpha \\beta \\right)}{foo bar}"
    }
  }

  it should "nest properly" in {
    // :alpha / :beta / :gamma
    compile(OverDiv(OverDiv(Symbol("alpha"), Symbol("beta")), Symbol("gamma"))) should be {
      "\\dfrac{\\dfrac{\\alpha}{\\beta}}{\\gamma}"
    }
    // (:alpha / :beta) / :gamma
    compile(OverDiv(Paren(Seq(OverDiv(Symbol("alpha"), Symbol("beta")))), Symbol("gamma"))) should be {
      "\\dfrac{\\dfrac{\\alpha}{\\beta}}{\\gamma}"
    }
  }

  "superscript" should "work as expected in simple cases" in {
    // :alpha^2
    compile(SuperScript(Symbol("alpha"), Chunk("2"))) should be ("\\alpha^{2}")
    // alpha^2
    compile(SuperScript(Chunk("alpha"), Chunk("2"))) should be ("alpha^{2}")
    // 5^x
    compile(SuperScript(Chunk("5"), Chunk("x"))) should be ("5^{x}")
  }

  it should "capture parenthated expressions" in {
    // x^(a + b)
    compile(SuperScript(Chunk("x"), Paren(List(Chunk("a"), Chunk("+"), Chunk("b"))))) should be {
      "x^{a + b}"
    }
  }

  "subscript" should "do the same as superscript" in {
    // :alpha_2
    compile(SubScript(Symbol("alpha"), Chunk("2"))) should be ("\\alpha_{2}")
    // alpha_2
    compile(SubScript(Chunk("alpha"), Chunk("2"))) should be ("alpha_{2}")
    // 5_x
    compile(SubScript(Chunk("5"), Chunk("x"))) should be ("5_{x}")
    // x_(a + b)
    compile(SubScript(Chunk("x"), Paren(List(Chunk("a"), Chunk("+"), Chunk("b"))))) should be {
      "x_{a + b}"
    }
  }

  "macros" should "" in {

  }
}
