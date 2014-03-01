package com.prealpha.pipe.blocks.generators.latex

import com.prealpha.pipe.blocks.Block
import com.prealpha.pipe.blocks.generators._

object DocumentBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val lines = block.childLines

    val (valid, invalid) = lines.partition(_.contains("="))

    invalid.foreach(s =>
      System.err.println("Warning! " + s + " is not a valid setting"))

    val settings = valid.map(_.split("=").toList.map(_.trim)).map({
      case "author" :: name :: Nil => Some("\\author{" + name + "}")
      case "title" :: title :: Nil => Some("\\title{" + title + "}")
      case "date" :: date :: Nil => Some("\\date{" + date + "}")
      case "margin" :: size :: Nil => Some(s"\\usepackage[$size]{geometry}")
      case _ => None
    }).filter(_.isDefined).map(_.get)

    val postBody = if (settings.isEmpty) List()
    else List("\\maketitle")


    ("", ResultContext(Set(), settings.toSet, postBody.toSet))
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "document"
}
