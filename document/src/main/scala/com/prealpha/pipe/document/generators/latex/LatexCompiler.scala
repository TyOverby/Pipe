package com.prealpha.pipe.document.generators.latex

import com.prealpha.pipe.document.generators.{ResultContext, BlockGenerator, CompileContext}
import com.prealpha.pipe.document.{Block, BlockParser, InlineParser}
import scala.io.Source

object LatexCompiler {
  private def topLevel =
    ListBlock :: SectionBlock ::
      RawTextBlock :: BoldBlock :: ItalicBlock ::
      PreBlock :: LatexBlock :: EquationBlock ::
      DocumentBlock :: MathBlock :: TableBlock ::
      LatexEnvBlock :: LatexImportBlock :: Nil

  /** Attempts to compile `markup` into TeX. The markup is interpreted as comprising a complete TeX document, and the
    * TeX header and footer boilerplate will be added to the output to reflect this.
    *
    * Various exceptions may be thrown if compilation is unsuccessful.
    *
    * @param markup the markup to compile
    * @return a compiled TeX string corresponding to `markup`
    */
  /* TODO: figure out what exceptions this throws (and should throw) */
  def compile(markup: String): String = {
    val parsed = InlineParser(BlockParser.parse(markup)).get

    val totalSb = new StringBuilder

    val importsSb = new StringBuilder
    val configSb = new StringBuilder
    val insideBodySb = new StringBuilder

    val rb = RootBlock
    val (output, result) = rb.produce(parsed)(CompileContext(topLevel))

    for (s <- result.imports) {
      importsSb.append(s)
        .append("\n")
    }

    for (s <- result.settings) {
      configSb.append(s)
        .append("\n")
    }

    for (s <- result.insideDoc) {
      insideBodySb.append(s)
        .append("\n")
    }

    totalSb.append("\\documentclass[a4paper, 12pt]{article}\n")
    totalSb.append(importsSb)
    totalSb.append(configSb)

    totalSb.append("\\begin{document}\n")

    totalSb.append(insideBodySb)

    totalSb.append(output)

    totalSb.append("\n\\end{document}")

    totalSb.toString()
  }

  private[latex] def compileFragment(markup: String): String = {
    val parsed = InlineParser(BlockParser.parse(markup)).get
    RootBlock.produce(parsed)(CompileContext(topLevel))._1
  }
}

private object RootBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    merge(block.childBlocks.map(compile))
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = false
}
