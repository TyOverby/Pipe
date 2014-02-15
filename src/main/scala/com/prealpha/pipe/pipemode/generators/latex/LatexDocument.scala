package com.prealpha.pipe.pipemode.generators.latex

import com.prealpha.pipe.pipemode.{CompileContext, BlocksParser}

object LatexDocument {

  def topLevel =
    new ListBlock :: new SectionBlock :: new RawTextBlock ::
      new BoldBlock :: new ItalicBlock :: new PreBlock ::
      new EquationBlock :: Nil

  def compile(markup: String): String = {
    val parsed = BlocksParser.parse(markup)

    val totalSb = new StringBuilder

    val importsSb = new StringBuilder
    val configSb = new StringBuilder

    val rb = new RootBlock
    val (output, result) = rb.produce(parsed)(CompileContext(topLevel))

    totalSb.toString()
  }
}
