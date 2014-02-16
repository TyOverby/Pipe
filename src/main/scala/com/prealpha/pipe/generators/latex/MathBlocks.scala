package com.prealpha.pipe.generators.latex

import com.prealpha.pipe.Block
import com.prealpha.pipe.MathParser
import com.prealpha.pipe.generators._

class EquationBlock extends BlockGenerator {
  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "equation"

  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val args = block.argLine.split("\\s+").toList.filter(!_.isEmpty)
    val sb = new StringBuilder

    val numbered = args.contains("numbered")

    if (numbered)
      sb.append("\\begin{align}")
    else
      sb.append("\\begin{align*}")

    sb.append("\n")

    // TODO this is really such a hack, it works though
    val alignedLines =
      for (line <- block.childLines)
        yield (line /: args)((line, aligner) => line.replace(aligner, "&" + aligner))
    val compiledLines =
      for (line <- alignedLines)
        yield MathParser(line).get

    sb.append(compiledLines.mkString(" \\\\\n"))

    sb.append("\n")
    if (numbered)
      sb.append("\\end{align}")
    else
      sb.append("\\end{align*}")

    (sb.toString(), ResultContext(Set("amsmath")))
  }
}

