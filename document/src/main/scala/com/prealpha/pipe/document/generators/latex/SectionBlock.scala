package com.prealpha.pipe.document.generators.latex

import com.prealpha.pipe.document.Block
import com.prealpha.pipe.document.generators._

object SectionBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val sb = new StringBuilder
    sb.append(s"\\${block.instance}*{${block.argLine}}")
    val (str, res) = merge(block.childBlocks.map(compile))
    sb.append(str)
    (sb.toString(), res)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance.endsWith("section")
}
