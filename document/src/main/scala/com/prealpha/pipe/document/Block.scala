package com.prealpha.pipe.document

import scala.collection.mutable

private[document] case class Block(instance: String, argLine: String, level: Int, lineNum: Int,
                                   childLines: List[String], childBlocks: List[Block])

private[document] class BlockBuilder(val instance: String, val argLine: String, val level: Int, val lineNum: Int) {
  val lines = new mutable.ArrayBuffer[String]
  var lst = new mutable.ArrayBuffer[BlockBuilder]()

  def addLine(line: String) {
    lines += line
  }

  def addChild(bb: BlockBuilder) {
    lst += bb
  }

  def asBlock: Block =
    Block(instance, argLine, level, lineNum, lines.toList, lst.map(_.asBlock).toList)
}
