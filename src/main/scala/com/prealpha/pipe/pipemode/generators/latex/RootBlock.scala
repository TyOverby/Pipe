package com.prealpha.pipe.pipemode.generators.latex

import com.prealpha.pipe.pipemode._
import com.prealpha.pipe.pipemode.Block
import com.prealpha.pipe.pipemode.CompileContext
import com.prealpha.pipe.pipemode.ResultContext

class RootBlock extends BlockGenerator{
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val total = block.childBlocks.map(this.compile(_)(ctx)._1).mkString("\n")

    (total, EmptyResultContext)
  }

  private def topLevel =
    new ListBlock :: new SectionBlock :: new RawTextBlock ::
    new BoldBlock :: new ItalicBlock :: Nil

  def force(block: Block): String = {
    produce(block)(CompileContext(topLevel))._1
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = false
}
