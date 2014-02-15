package com.prealpha.pipe.pipemode

import java.util
import scala.collection.JavaConversions.collectionAsScalaIterable

case class Block(instance: String, argLine: String, level: Int,
                 childLines: String, childBlocks: List[Block])

class BlockBuilder(val instance: String, val argLine: String, val level: Int) {
  val sb = new StringBuilder
  val lst = new util.ArrayList[BlockBuilder]()

  def appendText(raw: String) {
    sb.append(raw)
  }
  def addChild(bb: BlockBuilder) {
    lst.add(bb)
  }

  def asBlock: Block =
    Block(instance, argLine, level, sb.toString(),
      collectionAsScalaIterable(lst).map(_.asBlock).toList)
}