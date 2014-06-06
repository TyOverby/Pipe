package com.prealpha.pipe.document

import org.scalatest._
import scala.util.Success
import com.prealpha.pipe.document.generators.latex.{LatexCompiler, RootBlock}

class InlineParserTest extends FlatSpec with Matchers {
  "InlineParser" should "recognize inlines in text" in {
    InlineParser("The fraction $(a+b)/c$ is somehow useful.") should
      be(Success("The fraction $\\dfrac{a + b}{c}$ is somehow useful."))
    InlineParser("Here's some arbitrary (|latex \\LaTeX{} $(ma)th$ |).") should
      be(Success("Here's some arbitrary \\LaTeX{} $(ma)th$."))
  }
}
