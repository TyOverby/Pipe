package com.prealpha.pipe.pipemode.generators.latex

import com.prealpha.pipe.pipemode._
import com.prealpha.pipe.pipemode.Block
import com.prealpha.pipe.pipemode.CompileContext
import com.prealpha.pipe.pipemode.ResultContext

class PreBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val sb = new StringBuilder
    sb.append("\\begin{verbatim}\n")

    val lines = block.childLines

    val trimmed = lines.map (l =>
      if (l.length() <= block.level) ""
      else l.drop(block.level + 1)
    )
    sb.append(trimmed.mkString("\n"))
    sb.append("\n\\end{verbatim}")

    (sb.toString(), EmptyResultContext)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "raw"

}
