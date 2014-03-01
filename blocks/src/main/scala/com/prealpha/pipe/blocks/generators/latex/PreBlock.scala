package com.prealpha.pipe.blocks.generators.latex

import com.prealpha.pipe.blocks.Block
import com.prealpha.pipe.blocks.generators._

object PreBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val sb = new StringBuilder
    sb.append("\\begin{verbatim}\n")

    val lines = block.childLines

    val trimmed = lines.map(l =>
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
