package com.prealpha.pipe.blocks

import java.util
import scala.collection.JavaConversions.collectionAsScalaIterable

object BlocksParser {

  def parse(chunk: String): Block = {
    val root = new BlockBuilder("_root", "", -1, 0)

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

    for ((line, lineNum_) <- chunk.split("\n").zipWithIndex) {
      // Lines in a text file are 1 based
      val lineNum = lineNum_ + 1;
      val trimmed = line.trim

      val bb =
        if (trimmed.length == 0) {
          // Blank line
          new BlockBuilder("_blank", "", if (last.head.level != -1) last.head.level else 0, lineNum)
        } else if (trimmed.head == '|' && !trimmed.tail.head.isWhitespace) {
          // Pipe decl
          val afterPipe = trimmed.tail.takeWhile(!_.isWhitespace)
          val argList = trimmed.dropWhile(!_.isWhitespace).trim
          val indentLevel = line.takeWhile(_.isWhitespace).length

          if(afterPipe.contains("/")) {
            val parts = afterPipe.split("/")
            if(parts.length < 2) {
              throw new ParseError(lineNum, line, "incorrectly formatted split block.")
            }

            // inbetween first and last
            val initial = parts.init.map((p) => {
              val bb = new BlockBuilder(p, "", indentLevel, lineNum)
              bb
            })

            initial.reduceLeft((prev: BlockBuilder, cur:BlockBuilder) => {
              prev.addChild(cur)
              cur
            })

            // last
            val lastBlock = new BlockBuilder(parts.last, argList, indentLevel, lineNum)
            initial.last.addChild(lastBlock)

            initial.head
          } else {
            new BlockBuilder(afterPipe, argList, indentLevel, lineNum)
          }
        } else {
          // Text line
          new BlockBuilder("_textline", line, line.takeWhile(_.isWhitespace).length, lineNum)
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
          bb = new BlockBuilder("_text", "", child.level, child.lineNum)
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
