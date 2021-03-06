package com.prealpha.pipe.document.generators.latex

import com.prealpha.pipe.document.Block
import com.prealpha.pipe.document.generators._

private[latex] object DocumentBlock extends BlockGenerator {
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val lines = block.childLines

    val (valid, invalid) = lines
      .filter(_.exists(!_.isWhitespace))
      .partition(_.contains("="))

    invalid.foreach(s => Console.err.println(s"Warning! $s is not a valid setting"))
    val individual = valid.map(_.split("=").toList.map(_.trim))
    val settings = individual.map({
      case "author" :: name :: Nil => Some("\\author{" + name + "}")
      case "title" :: title :: Nil => Some("\\title{" + title + "}")
      case "date" :: date :: Nil => Some("\\date{" + date + "}")
      case "indent" :: size :: Nil => Some(s"\\setlength\\parindent{$size}")
      case _ => None
    }).filter(_.isDefined).map(_.get)
    val imports = individual.map({
      case "margin" :: size :: Nil => Some(s"\\usepackage[margin=$size]{geometry}")
      case _ => None
    }).filter(!_.isEmpty).map(_.get)

    val postBody = if (settings.isEmpty) List()
    else List("\\maketitle")


    ("", ResultContext(imports.toSet, settings.toSet, postBody.toSet))
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "document"
}
