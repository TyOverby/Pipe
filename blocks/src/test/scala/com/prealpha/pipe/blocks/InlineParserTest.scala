package com.prealpha.pipe.blocks

import org.scalatest._
import scala.util.Success
import com.prealpha.pipe.blocks.generators.latex.RootBlock

class InlineParserTest extends FlatSpec with Matchers {
  def compile(b: Block): String = {
    val rb = RootBlock
    rb.force(b)
  }

  "InlineParser" should "recognize inlines in text" in {
    InlineParser("The fraction $(a+b)/c$ is somehow useful.") should
      be(Success("The fraction $\\dfrac{a + b}{c}$ is somehow useful."))
    InlineParser("Here's some arbitrary (|latex \\LaTeX{} $(ma)th$ |).") should
      be(Success("Here's some arbitrary \\LaTeX{} $(ma)th$."))
  }

  it should "parse inlines within arg lines" in {
    val str = "|section Induction on $n$"
    val block = BlocksParser.parse(str)
    compile(InlineParser(block).get) should be("\\section*{Induction on $n$}")
  }
}
