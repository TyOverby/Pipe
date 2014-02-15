package com.prealpha.pipe.pipemode

import java.util
import scala.util.control.Breaks._

object BlocksParser {
  def parse(chunk: String): Block = {
    val root = new BlockBuilder("_root", "", -1)

    val stack = new util.Stack[BlockBuilder]
    var last = List[BlockBuilder]()
    stack.push(root)
    last = root :: last


    var parsingText = false
    val textBuilder = new StringBuilder

    def insertNode(block: BlockBuilder) {
      while (stack.peek().level >= block.level) {
        stack.pop()
      }
      stack.peek().addChild(block)

      stack.push(block)
      last = block :: last
    }

    def addLine(line: String, level: Int) {
      for (b: BlockBuilder <-
           scala.collection.JavaConversions.collectionAsScalaIterable(stack)){
        if (b.level < level) {
          b.addLine(line)
        }
      }
    }

    chunk.split("\n").foreach(line => {
      breakable {
        lazy val whitespaces = line.takeWhile(_.isWhitespace).length
        lazy val isEmpty = line.forall(_.isWhitespace)
        lazy val startingBlock = !isEmpty && line.dropWhile(_.isWhitespace).head == '|'


        if (parsingText && (isEmpty || startingBlock)) {
          val h = last.head
          assert(h.instance == "_text")
          parsingText = false
        }

        if (!isEmpty && !startingBlock) {
          if (parsingText) {
            val textNode = last.head
            assert(textNode.instance == "_text")
          } else {
            parsingText = true
            val node = new BlockBuilder("_text", "", whitespaces)
            insertNode(node)
          }
        }


        if (startingBlock) {
          val rest = line.dropWhile(_.isWhitespace).tail
          val ident = rest.takeWhile(!_.isWhitespace)
          assert(ident.length > 0)
          val params = rest.dropWhile(!_.isWhitespace).dropWhile(_.isWhitespace)

          val node = new BlockBuilder(ident, params, whitespaces)
          insertNode(node)
        }


        if (parsingText)
          addLine(line, whitespaces + 1)
        else
          addLine(line, whitespaces)

      }
    })

    root.asBlock
  }
}
