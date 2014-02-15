package com.prealpha.pipe.pipemode.generators.latex

import com.prealpha.pipe.pipemode._
import com.prealpha.pipe.pipemode.Block
import com.prealpha.pipe.pipemode.CompileContext
import com.prealpha.pipe.pipemode.ResultContext

class RootBlock extends BlockGenerator{
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    merge(block.childBlocks.map(compile))
  }


  def force(block: Block): String = {
    produce(block)(CompileContext(LatexDocument.topLevel))._1
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = false
}
