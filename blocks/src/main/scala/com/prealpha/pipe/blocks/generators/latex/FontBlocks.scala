package com.prealpha.pipe.blocks.generators.latex

import com.prealpha.pipe.blocks.Block
import com.prealpha.pipe.blocks.generators._

abstract class FontBlock extends BlockGenerator {

  def fullName: String

  def envName: String

  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val sb = new StringBuilder
    sb.append(s"\\$envName\n")
    val (str, ret) = merge(block.childBlocks.map(compile))
    sb.append(block.argLine)
    sb.append(str)

    // TODO: this doesn't work
    sb.append(s"\n\\normalshape")

    (sb.toString(), ret)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == fullName

}

// TODO: Test
class ItalicBlock extends FontBlock {
  def fullName = "italic"

  def envName = "itshape"
}

// TODO: Test
class BoldBlock extends FontBlock {
  def fullName = "bold"

  def envName = "bfshape"
}

