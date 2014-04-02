package com.prealpha.pipe.blocks.generators.latex

import com.prealpha.pipe.blocks.Block
import com.prealpha.pipe.blocks.generators._

object SectionBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val sb = new StringBuilder
    sb.append(s"\\section*{${block.argLine}}")
    val (str, res) = merge(block.childBlocks.map(compile))
    sb.append(str)
    (sb.toString(), res)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "section"
}
