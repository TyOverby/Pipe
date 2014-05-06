package com.prealpha.pipe.document.generators.latex

import com.prealpha.pipe.document.Block
import com.prealpha.pipe.document.generators._

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

object LatexImportBlock extends BlockGenerator {
  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "latex-import"

  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    def wrapPackage(a: String): String = {
        if (a startsWith "[") {
          "\\usepackage" + a.trim
        } else {
          "\\usepackage{" + a.trim + "}"
        }
    }
    val childLinesImports = block.childLines.map(wrapPackage).toSet;
    val arglineImport = if (block.argLine.trim().length > 0) { Set(wrapPackage(block.argLine)) } else { Set() }
    ("", ResultContext(childLinesImports ++ arglineImport))
  }
}
