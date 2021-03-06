package com.prealpha.pipe.document

import org.scalatest._

class BlockParserTest extends FlatSpec with Matchers {
  def genTextBlockList(text: List[String], args: String = "",
                       level: Int = 0, lineNum: Int, children: List[Block] = List()) =
    genPipeBlock("_text", args, level, lineNum, text, children)

  def genTextBlock(text: String, args: String = "",
                   level: Int = 0, lineNum: Int, children: List[Block] = List()) =
    genPipeBlock("_text", args, level, lineNum, List(text), children)

  def genPipeBlock(instance: String, args: String = "",
                   level: Int = 0, lineNum: Int, childLines: List[String] = List(), children: List[Block] = List()) =
    Block(instance, args, level, lineNum, childLines, children)

  def parse(s: String): List[Block] = {
    BlockParser.parse(s).childBlocks
  }

  def assertEqual(should: Block, actual: Block) {
    actual.instance should be(should.instance)
    actual.argLine should be(should.argLine)
    actual.level should be(should.level)
  }


  "empty" should "produce no document" in {
    val file = ""
    val blocks = parse(file)

    blocks should be(List())
  }

  "nothing but whitespace" should "produce no document" in {
    val file = "     \t\t \n   \n    "
    val blocks = parse(file)

    blocks should be(List())
  }

  "a single word" should "produce a text block" in {
    val file = "hello"
    val blocks = parse(file)

    blocks should be(List(genTextBlock("hello", lineNum = 1)))
  }

  "multiple words on the same line" should "produce a text block" in {
    val file = "hello world"
    val blocks = parse(file)

    blocks should be(List(genTextBlock("hello world", lineNum = 1)))
  }

  "multiple words on different lines" should "produce a single text block" in {
    val file = "hello\nworld"
    val blocks = parse(file)

    blocks should be(List(genTextBlockList(List("hello", "world"), lineNum = 1)))
  }

  "multiple words on different lines separated by a gap" should
    "produce multiple text document" in {

    val file = "hello\n\nworld"
    val blocks = parse(file)

    blocks should be(List(genTextBlock("hello", lineNum = 1), genTextBlock("world", lineNum = 3)))
  }

  "a single pipe" should "produce a single pipe block" in {
    val file = "|hello"
    val blocks = parse(file)

    blocks should be(List(genPipeBlock("hello", lineNum = 1)))
  }

  "a single pipe with an argument" should "produce a single pipe block" in {
    val file = "|hello world"
    val blocks = parse(file)

    blocks should be(List(genPipeBlock("hello", "world", lineNum = 1)))
  }

  "two pipes next to each other" should "produce two pipes at the same level" in {
    val file = "|hello\n|world"
    val blocks = parse(file)

    blocks should be(List(genPipeBlock("hello", lineNum = 1), genPipeBlock("world", lineNum = 2)))
  }

  "two pipes, one nested in the other" should "produce the correct structure" in {
    val file = "|hello\n  |world"
    val blocks = parse(file)

    blocks should be(List(
      genPipeBlock("hello", lineNum = 1, childLines = List("  |world"), children = List(
        genPipeBlock("world", level = 2, lineNum = 2)
      ))))
  }

  "three pipes, two of them nested under the first" should
    "produce the correct structure" in {
    val file = "|hello\n  |there\n  |world"
    val blocks = parse(file)

    blocks should be(List(
      genPipeBlock("hello", lineNum = 1, childLines = List("  |there", "  |world"), children = List(
        genPipeBlock("there", level = 2, lineNum = 2),
        genPipeBlock("world", level = 2, lineNum = 3)
      ))))
  }

  "a pipe and one text block, nested under one " should
    "produce the correct structure" in {
    val file = "|hello\n  There\n  |cmd"
    val blocks = parse(file)

    blocks should be(List(
      genPipeBlock("hello", lineNum = 1, childLines = List("  There", "  |cmd"), children = List(
        genTextBlock("  There", level = 2, lineNum = 2),
        genPipeBlock("cmd", level = 2, lineNum = 3)
      ))))
  }

  "text that is out of indentation" should "work normally" in {
    val file = "hello\n  world"
    val blocks = parse(file)
  }

  "a multi-leveled block" should "parse correctly" in {
    val file = "|a/b/c foo"
    val blocks = parse(file)

    blocks should be(List(genPipeBlock("a", lineNum = 1, children = List(
      genPipeBlock("b", lineNum = 1, children = List(
        genPipeBlock("c", "foo", lineNum = 1)
      ))
    ))))
  }
}
