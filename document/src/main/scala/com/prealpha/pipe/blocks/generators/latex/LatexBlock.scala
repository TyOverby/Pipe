package com.prealpha.pipe.blocks.generators.latex

import com.prealpha.pipe.blocks.Block
import com.prealpha.pipe.blocks.generators._

object LatexBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val sb = new StringBuilder

    val lines = block.childLines

    val trimmed = lines.map(l =>
      if (l.length() <= block.level) ""
      else l.drop(block.level + 1)
    )
    sb.append(trimmed.mkString("\n"))

    (sb.toString(), EmptyResultContext)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "latex"
}

object LatexEnvBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val sb = new StringBuilder
    val lines = block.childLines
    val args = block.argLine.split("\\s")

    if (args.isEmpty) {
      throw new BlockException(block, "latex-env must provide an environment argument")
    }
    if (args(0).exists(!_.isLetter)) {
      throw new BlockException(block, "the environment argument must only contain alphabetic characters")
    }

    val trimmed = lines.map(l =>
      if (l.length() <= block.level) ""
      else l.drop(block.level + 1)
    )

    sb ++= "\\begin{" ++= args(0) ++= "}\n"
    sb ++= trimmed.mkString("\n")
    sb ++= "\n\\end{" ++= args(0) ++= "}"

    (sb.toString(), EmptyResultContext)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "latex-env"
}
