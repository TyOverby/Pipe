package com.prealpha.pipe.generators.latex

import com.prealpha.pipe.BlocksParser
import com.prealpha.pipe.generators.CompileContext

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

    for (s <- result.imports) {
      importsSb.append("\\usepackage{")
        .append(s)
        .append("}\n")
    }

    totalSb.append("\\documentclass[a4paper]{article}\n")
    totalSb.append(importsSb)
    totalSb.append("\\begin{document}\n")
    totalSb.append(output)
    totalSb.append("\n\\end{document}")

    totalSb.toString()
  }
}
