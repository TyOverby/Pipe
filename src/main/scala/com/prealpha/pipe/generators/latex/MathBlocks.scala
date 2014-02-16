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

class MathBlock extends BlockGenerator {
  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "math"

  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    def parseInline(s: String): (String, ResultContext) = {
      val isb = new StringBuilder
      isb.append("\n")
        .append("$")
        .append(MathParser(s).get)
        .append("$")
      (isb.toString(), ResultContext(Set("amsmath")))
    }

    val argline = if (block.argLine.trim.length != 0)
      List(parseInline(block.argLine))
    else Nil

    val children = block.childBlocks.map({
      case b@Block("_text", _, _, _, _) => {
        merge(b.childLines.map(parseInline))
      }
      case b@Block("equation", _, _, _, _) => compile(b)
    })

    merge(argline ++ children)
  }
}
