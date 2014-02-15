package com.prealpha.pipe.pipemode.generators.latex

import com.prealpha.pipe.pipemode.{ResultContext, CompileContext, Block, BlockGenerator}

class SectionBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = ???

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "section"


}
