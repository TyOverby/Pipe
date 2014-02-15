
package com.prealpha.pipe

import org.scalatest._
import com.prealpha.pipe.pipemode.{Block, BlocksParser}
import com.prealpha.pipe.pipemode.generators.latex.RootBlock

class MathModeTest extends FlatSpec with Matchers {
  def compile(b: Block): String = {
    val rb = new RootBlock
    rb.force(b)
  }

  def parse(s: String): Block = {
    BlocksParser.parse(s)
  }

  "a single equation inside of math mode" should "compile" in {
    val input = "|equation\n  (a+b) / c"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be ("\\begin{align*}\n\\dfrac{a+b}{c}\n\\end{align*}")
  }

  "two equations with a line break" should "produce the valid line break" in {
    val input = "|equation\n  (a + b) / c\n  (a) / c + (b) / c"
    val parsed = parse(input)
    val output = compile(parsed)

    println(output)
  }
}
