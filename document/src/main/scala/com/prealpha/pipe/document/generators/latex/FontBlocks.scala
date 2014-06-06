package com.prealpha.pipe.document.generators.latex

import com.prealpha.pipe.document.Block
import com.prealpha.pipe.document.generators._

private abstract class FontBlock extends BlockGenerator {
  def fullName: String

  def envName: String

  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val sb = new StringBuilder
    sb.append(s"\\$envName{")

    val (inner, ret) = merge(block.childBlocks.map(compile))
    sb.append(block.argLine)
    sb.append(inner)

    sb.append(s"}")

    (sb.toString(), ret)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == fullName
}

private[latex] object ItalicBlock extends FontBlock {
  override def fullName = "italic"
  override def envName = "textit"
}

private[latex] object BoldBlock extends FontBlock {
  override def fullName = "bold"
  override def envName = "textbf"
}
