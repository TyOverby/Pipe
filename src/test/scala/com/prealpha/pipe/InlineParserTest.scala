package com.prealpha.pipe

import org.scalatest._
import scala.util.Success
import com.prealpha.pipe.generators.latex.RootBlock

class InlineParserTest extends FlatSpec with Matchers {
  def compile(b: Block): String = {
    val rb = new RootBlock
    rb.force(b)
  }

  "InlineParser" should "recognize inlines in text" in {
    InlineParser("The fraction (|$ (a+b)/c |) is somehow useful.") should
      be (Success("The fraction $\\dfrac{a+b}{c}$ is somehow useful."))
  }

  it should "parse inlines within arg lines" in {
    val str = "|section Induction on (|$ n |)"
    val block = BlocksParser.parse(str)
    compile(InlineParser(block).get) should be ("\\section*{Induction on $n$}")
  }
}
