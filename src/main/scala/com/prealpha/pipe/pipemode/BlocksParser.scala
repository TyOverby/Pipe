package com.prealpha.pipe.pipemode

import java.util
import scala.util.control.Breaks._

object BlocksParser {
  def parse(chunk: String): Iterable[Block] = {
    val root = new BlockBuilder("_root", "", -1)

    val stack = new util.Stack[BlockBuilder]
    var last = List[BlockBuilder]()
    stack.push(root)
    last = root :: last


    var parsingText = false
    val textBuilder = new StringBuilder

    def insertNode(block: BlockBuilder, text: String) {
      while (stack.peek().level >= block.level) {
        stack.pop()
      }
      stack.peek().addChild(block)
      stack.peek().appendText(text)

      stack.push(block)
      last = block :: last
    }

    chunk.split("\n").foreach(line => {
      breakable {
        lazy val whitespaces = line.takeWhile(_.isWhitespace).length
        lazy val isEmpty = line.forall(_.isWhitespace)
        lazy val startingBlock = !isEmpty && line.dropWhile(_.isWhitespace).head == '|'

        if (parsingText && (isEmpty || startingBlock)) {
          parsingText = false;
        }

        if (!isEmpty && !startingBlock) {
          if (parsingText) {
            val textNode = last.head
            assert(textNode.instance == "_text")
            textNode.appendText(line + "\n")
          } else {
            parsingText = true
            val node = new BlockBuilder("_text", "", whitespaces)
            node.appendText(line + "\n")
            insertNode(node, line + "\n")
          }
          break()
        }

        if (isEmpty) {
          break()
        }

        if (startingBlock) {
          val rest = line.dropWhile(_.isWhitespace).tail
          val ident = rest.takeWhile(!_.isWhitespace)
          assert(ident.length > 0)
          val params = rest.dropWhile(!_.isWhitespace).dropWhile(_.isWhitespace)

          val node = new BlockBuilder(ident, params, whitespaces)
          insertNode(node, line + "\n")
          break()
        }

        assert(assertion = false, "could not parse\"" + line + "\"")

      }
    })

    root.asBlock.childBlocks
  }
}
