package com.prealpha.pipe.blocks.generators.latex

import com.prealpha.pipe.blocks.Block
import com.prealpha.pipe.blocks.generators._

object RootBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    merge(block.childBlocks.map(compile))
  }


  def force(block: Block): String = {
    produce(block)(CompileContext(LatexDocument.topLevel))._1
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = false
}
