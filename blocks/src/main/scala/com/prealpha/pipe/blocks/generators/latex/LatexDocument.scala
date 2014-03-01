package com.prealpha.pipe.blocks.generators.latex

import com.prealpha.pipe.blocks.generators.CompileContext
import com.prealpha.pipe.blocks.{BlocksParser, InlineParser}
import scala.io.Source

object LatexDocument {
  def topLevel =
    ListBlock :: SectionBlock :: SubsectionBlock ::
      RawTextBlock :: new BoldBlock :: new ItalicBlock ::
      PreBlock :: LatexBlock :: EquationBlock ::
      DocumentBlock :: MathBlock :: TableBlock ::
      Nil

  def compile(markup: String): String = {
    val parsed = InlineParser(BlocksParser.parse(markup)).get

    val totalSb = new StringBuilder

    val importsSb = new StringBuilder
    val configSb = new StringBuilder
    val insideBodySb = new StringBuilder

    val rb = RootBlock
    val (output, result) = rb.produce(parsed)(CompileContext(topLevel))

    for (s <- result.imports) {
      importsSb.append("\\usepackage{")
        .append(s)
        .append("}\n")
    }

    for (s <- result.settings) {
      configSb.append(s)
        .append("\n")
    }

    for (s <- result.insideDoc) {
      insideBodySb.append(s)
    }

    totalSb.append("\\documentclass[a4paper]{article}\n")
    totalSb.append(importsSb)
    totalSb.append(configSb)

    totalSb.append("\\begin{document}\n")

    totalSb.append(insideBodySb)

    totalSb.append(output)

    totalSb.append("\n\\end{document}")

    totalSb.toString()
  }

  def main(args: Array[String]): Unit = {
    val markup = Source.fromInputStream(System.in).getLines().mkString("\n")
    val latex = compile(markup)
    System.out.println(latex)
  }
}
