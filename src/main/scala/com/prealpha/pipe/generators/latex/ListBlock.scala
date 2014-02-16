package com.prealpha.pipe.generators.latex

import com.prealpha.pipe.Block
import com.prealpha.pipe.generators._

class ListItemBlock(oldContext: CompileContext) extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val (strRet, rctx) = if (block.instance == "item" || block.instance == "*") {
      val header = block.argLine match {
        case "" => "\\item\n"
        case x => "\\item " + x
      }
      val (body, rctx2) = block.childBlocks match {
        case Nil => ("", EmptyResultContext)
        case xs => merge(xs.map(b => this.compile(b)(oldContext)))
      }
      (header + body, rctx2)
    } else {
      val wouldHave = block.copy(instance = block.instance.substring(1))
      val compiled = compile(wouldHave)(oldContext)
      ("\\item\n" + compiled._1, compiled._2)
    }

    (strRet, rctx)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = {
    //matches |item, |*, and |*anything
    block.instance == "item" || block.instance == "*" || block.instance.startsWith("*")
  }
}

class ListBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val sb = new StringBuilder

    val numberType = block.argLine.trim
    val env =
      if (numberType == "") "itemize" else "enumerate"

    sb.append(s"\\begin{$env}")
    if (numberType != "")
      sb.append(s"[$numberType]\n")
    else
      sb.append("\n")

    val lib = new ListItemBlock(ctx)

    val results = block.childBlocks.map(b=>lib.compile(b)(ctx.copy(generators = lib :: Nil)))
    val merged = merge(results)
    sb.append(merged._1)
    sb.append("\n")

    sb.append(s"\\end{$env}")

    (sb.toString(), merged._2 ++ ResultContext(Set("enumerate")))
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = {
    block.instance == "list"
  }
}
