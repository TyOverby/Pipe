package com.prealpha.pipe

import java.util
import scala.collection.JavaConversions.collectionAsScalaIterable

case class Block(instance: String, argLine: String, level: Int,
                 childLines: List[String], childBlocks: List[Block])

class BlockBuilder(val instance: String, val argLine: String, val level: Int) {
  val lines = new java.util.ArrayList[String]
  var lst = new util.ArrayList[BlockBuilder]()

  def addLine(line: String) {
    lines.add(line)
  }

  def addChild(bb: BlockBuilder) {
    lst.add(bb)
  }

  def asBlock: Block =
    Block(instance, argLine, level,
      collectionAsScalaIterable(lines).toList,
      collectionAsScalaIterable(lst).map(_.asBlock).toList)
}