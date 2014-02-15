package com.prealpha.pipe.pipemode.generators.latex

import com.prealpha.pipe.pipemode._

class ListItemBlock(oldContext: CompileContext) extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val strRet = if (block.instance == "item" || block.instance == "*") {
      val header = block.argLine match {
        case "" => "\\item"
        case x => "\\item " + x
      }
      val body = block.childBlocks match {
        case Nil => ""
        case xs => "\n" + merge(xs.map(b => this.compile(b)(oldContext)))._1
      }
      header + body
    } else {
      val wouldHave = block.copy(instance = block.instance.substring(1))
      "\\item\n" + compile(wouldHave)(oldContext)._1
    }

    (strRet, EmptyResultContext)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = {
    //matches |item, |*, and |*anything
    block.instance == "item" || block.instance == "*" || block.instance.startsWith("*")
  }
}

class ListBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val sb = new StringBuilder

    // TODO: Go back and add more to this
    val value = block.argLine.trim match {
      case "" => "itemize"
      case "bullet" => "itemize"
      case "numerical" => "enumerate"
      case "numeric" => "enumerate"
      case _ => throw new Exception("Bad argument for list display type.  Correct options are [bullet, numerical]")
    }

    sb.append(s"\\begin{$value}\n")

    val lib = new ListItemBlock(ctx)

    val results = block.childBlocks.map(b=>compile(b)(ctx.copy(generators = lib :: ctx.generators)))
    sb.append(merge(results)._1)
    sb.append("\n")

    sb.append(s"\\end{$value}")

    (sb.toString(), EmptyResultContext)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = {
    block.instance == "list"
  }
}
