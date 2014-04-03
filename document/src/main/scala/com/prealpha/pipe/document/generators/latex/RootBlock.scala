package com.prealpha.pipe.document.generators.latex

import com.prealpha.pipe.document.Block
import com.prealpha.pipe.document.generators._

object RootBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    merge(block.childBlocks.map(compile))
  }


  def force(block: Block): String = {
    produce(block)(CompileContext(LatexDocument.topLevel))._1
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = false
}
