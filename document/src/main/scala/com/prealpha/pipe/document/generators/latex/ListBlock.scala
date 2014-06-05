package com.prealpha.pipe.document.generators.latex

import com.prealpha.pipe.document.Block
import com.prealpha.pipe.document.generators._

class ListItemBlock(oldContext: CompileContext) extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val header = block.argLine match {
      case "" => "\\item\n"
      case x => "\\item " + x
    }
    val (body, rctx2) = block.childBlocks match {
      case Nil => ("", EmptyResultContext)
      case xs => merge(xs.map(b => this.compile(b)(oldContext)))
    }

    (header + body, rctx2)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = {
    block.instance == "item"
  }
}

object ListBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val sb = new StringBuilder

    val numberType = block.argLine.trim
    val env =
      if (numberType == "" || numberType == "*")
        "itemize"
      else
        "enumerate"

    sb.append(s"\\begin{$env}")
    if (env == "enumerate")
      sb.append(s"[$numberType]\n")
    else
      sb.append("\n")

    val lib = new ListItemBlock(ctx)

    val results = block.childBlocks.map(b => {
      // If we're compiling another list, pass the parent context in
      if (this.captures(b)) {
        this.compile(b)(ctx)
      } else {
        // Otherwise, we pass in a context with limited generators
        lib.compile(b)(ctx.copy(generators = lib :: this :: Nil))
      }
    })
    val merged = merge(results)
    sb.append(merged._1)
    sb.append("\n")

    sb.append(s"\\end{$env}")

    (sb.toString(), merged._2 ++ ResultContext(Set("\\usepackage{enumerate}")))
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = {
    block.instance == "list"
  }
}
