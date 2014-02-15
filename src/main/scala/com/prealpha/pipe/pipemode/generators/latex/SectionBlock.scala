package com.prealpha.pipe.pipemode.generators.latex

import com.prealpha.pipe.pipemode.{ResultContext, CompileContext, Block, BlockGenerator}

class SectionBlock extends BlockGenerator {
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
