package com.prealpha.pipe.blocks

import java.util
import scala.collection.JavaConversions.collectionAsScalaIterable
import scala.util.control.Breaks._

object BlocksParser {

  def parse(chunk: String): Block = {
    val root = new BlockBuilder("_root", "", -1)

    val stack = new util.Stack[BlockBuilder]
    var last = List[BlockBuilder]()

    stack.push(root)
    last = root :: last

    def insertNode(block: BlockBuilder, line: String) {
      while (stack.peek().level >= block.level) {
        stack.pop()
      }

      stack.peek().addChild(block)

      for (b <- collectionAsScalaIterable(stack)) {
        b.addLine(line)
      }

      stack.push(block)
      last = block :: last
    }

    for (line <- chunk.split("\n")) {
      val trimmed = line.trim

      val bb =
        if (trimmed.length == 0) {
          // Blank line
          new BlockBuilder("_blank", "", if (last.head.level != -1) last.head.level else 0)
        } else if (trimmed.head == '|' && !trimmed.tail.head.isWhitespace) {
          // Pipe decl
          new BlockBuilder(trimmed.tail.takeWhile(!_.isWhitespace),
            trimmed.dropWhile(!_.isWhitespace).trim,
            line.takeWhile(_.isWhitespace).length)
        } else {
          // Text line
          new BlockBuilder("_textline", line, line.takeWhile(_.isWhitespace).length)
        }

      insertNode(bb, line)
    }

    coalesce(root).asBlock
  }

  private def coalesce(root: BlockBuilder): BlockBuilder = {
    var insideText = false
    var bb: BlockBuilder = null

    val lst = new util.ArrayList[BlockBuilder]()

    var merged = for (child: BlockBuilder <- root.lst) {
      if (child.instance == "_textline") {
        if (insideText) {
          bb.addLine(child.argLine)
          child.lst.foreach(bb.addChild)
        } else {
          insideText = true
          bb = new BlockBuilder("_text", "", child.level)
          bb.addLine(child.argLine)
          child.lst.foreach(bb.addChild)
        }
      } else {
        if (insideText) {
          insideText = false
          lst.add(bb)
        }
        if (child.instance != "_blank") {
          lst.add(coalesce(child))
        }
      }

    }

    if (insideText) {
      lst.add(bb)
    }

    root.lst = lst
    root
  }
}
