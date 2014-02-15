package com.prealpha.pipe

import org.scalatest._
import com.prealpha.pipe.pipemode.{Block, BlocksParser}

class PipemodeParserTest extends FlatSpec with Matchers {
  def genTextBlock(text: String, args: String = "",
                   level: Int = 0, children: List[Block] = List()) =
    genPipeBlock("_text", args, level, List(text), children)


  def genPipeBlock(instance: String, args: String = "",
                   level: Int = 0, childLines: List[String] = List(), children: List[Block] = List()) =
    Block(instance, args, level, childLines, children)

  def parse(s: String): List[Block] = {
    BlocksParser.parse(s).childBlocks
  }


  "empty" should "produce no blocks" in {
    val file = ""
    val blocks = parse(file)

    blocks should be(List())
  }

  "nothing but whitespace" should "produce no blocks" in {
    val file = "     \t\t \n   \n    "
    val blocks = parse(file)

    blocks should be(List())
  }

  "a single word" should "produce a text block" in {
    val file = "hello"
    val blocks = parse(file)

    blocks should be(List(genTextBlock("hello\n")))
  }

  "multiple words on the same line" should "produce a text block" in {
    val file = "hello world"
    val blocks = parse(file)

    blocks should be(List(genTextBlock("hello world\n")))
  }

  "multiple words on different lines" should "produce a single text block" in {
    val file = "hello \nworld"
    val blocks = parse(file)

    blocks should be(List(genTextBlock("hello \nworld\n")))
  }

  "multiple words on different lines separated by a gap" should
    "produce multiple text blocks" in {

    val file = "hello\n\nworld"
    val blocks = parse(file)

    blocks should be(List(genTextBlock("hello\n"), genTextBlock("world\n")))
  }

  "a single pipe" should "produce a single pipe block" in {
    val file = "|hello"
    val blocks = parse(file)

    blocks should be(List(genPipeBlock("hello")))
  }

  "a single pipe with an argument" should "produce a single pipe block" in {
    val file = "|hello world"
    val blocks = parse(file)

    blocks should be(List(genPipeBlock("hello", "world")))
  }

  "two pipes next to each other" should "produce two pipes at the same level" in {
    val file = "|hello\n|world"
    val blocks = parse(file)

    blocks should be(List(genPipeBlock("hello"), genPipeBlock("world")))
  }
  "two pipes, one nested in the other" should "produce the correct structure" in {
    val file = "|hello\n  |world"
    val blocks = parse(file)

    blocks should be(List(
      genPipeBlock("hello", childLines = List("  |worldn"), children = List(
        genPipeBlock("world", level = 2)
      ))))
  }

  "three pipes, two of them nested under the first" should
    "produce the correct structure" in {
    val file = "|hello\n  |there\n  |world"
    val blocks = parse(file)

    blocks should be(List(
      genPipeBlock("hello", childLines = List("  |there","  |world"), children = List(
        genPipeBlock("there", level = 2),
        genPipeBlock("world", level = 2)
      ))))
  }

  "a pipe and one text block, nested under one " should
    "produce the correct structure" in {
    val file = "|hello\n  There\n  |cmd"
    val blocks = parse(file)

    blocks should be(List(
      genPipeBlock("hello", childLines = List("  There", "  |cmd\n"), children = List(
        genTextBlock("  There\n", level = 2),
        genPipeBlock("cmd", level = 2)
      ))))
  }
}
