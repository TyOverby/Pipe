package com.prealpha.pipe.generators.latex

import com.prealpha.pipe.{InlineParser, BlocksParser}
import com.prealpha.pipe.generators.CompileContext
import scala.io.Source

object LatexDocument {
  def topLevel =
    new ListBlock :: new SectionBlock :: new SubsectionBlock ::
      new RawTextBlock :: new BoldBlock :: new ItalicBlock ::
      new PreBlock :: new EquationBlock :: Nil

  def compile(markup: String): String = {
    val parsed = InlineParser(BlocksParser.parse(markup)).get

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

  def main(args: Array[String]): Unit = {
    val markup = Source.fromInputStream(System.in).getLines().mkString("\n")
    val latex = compile(markup)
    System.out.println(latex)
  }
}
