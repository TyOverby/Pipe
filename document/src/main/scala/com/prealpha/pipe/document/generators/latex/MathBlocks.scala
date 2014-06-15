package com.prealpha.pipe.document.generators.latex

import com.prealpha.pipe.document.{ParseError, Block}
import com.prealpha.pipe.document.generators._
import com.prealpha.pipe.math._
import scala.util.{Failure, Success}

private[latex] object EquationBlock extends BlockGenerator {
  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "equation"

  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    // Empty equation blocks break latex.  In this case, we will just return nothing.
    if (!block.childLines.exists(_.trim.length > 0)) {
      return ("", ResultContext())
    }

    val args = block.argLine.split("\\s+").toList.filter(!_.isEmpty)
    val sb = new StringBuilder

    val numbered = args.contains("numbered")

    sb ++= (if (numbered) "\\begin{align}" else "\\begin{align*}") ++= "\n"

    // parse the alignment out of the block argument
    val alignToken: Option[String] = if (args.isEmpty) None else Some(args(0))

    val content = block.childLines.mkString("\n")
    sb.append(MathCompiler.compile(content, alignToken).get)

    sb ++= "\n"
    sb ++= (if (numbered) "\\end{align}" else "\\end{align*}")

    (sb.toString(), ResultContext(Set("\\usepackage{amsmath}")))
  }
}

private[latex] object MathBlock extends BlockGenerator {
  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "math"

  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    def parseInline(s: String): (String, ResultContext) = {
      val isb = new StringBuilder
      isb.append("$")
        .append(MathCompiler.compile(s).get)
        .append("$")
      (isb.toString(), ResultContext(Set("\\usepackage{amsmath}")))
    }

    val argline = if (block.argLine.trim.length != 0)
      List(parseInline(block.argLine))
    else Nil

    val children = block.childBlocks.map({
      case b@Block("_text", _, _, _, _, _) => merge(Seq(parseInline(b.childLines.mkString("\n"))))
      case b@Block("equation", _, _, _, _, _) => compile(b)
      case x => throw new BlockException(x, "The |equation is allowed inside of |math")
    })

    merge(argline ++ children)
  }
}
