package com.prealpha.pipe.generators.latex

import com.prealpha.pipe.{InlineParser, Block}
import com.prealpha.pipe.generators._

class TableBlock extends BlockGenerator {
  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = {
    block.instance == "table"
  }

  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val sb = new StringBuilder
    val alignLine = block.childLines.head
    val contentLines = block.childLines.tail.filter(!_.trim.isEmpty)

    val separators = getColumnSeparators(alignLine)
    contentLines.foreach {
      case line =>
        val lineSeparators = getColumnSeparators(line)
        if (!(Set(separators:_*) subsetOf Set(lineSeparators:_*)))
          throw new ColumnAlignmentException(line)
    }

    val alignments = getColumnAlignment(alignLine, separators.unzip._1)
    val alignStr = separators.unzip._2.zip(alignments.map(_.char)).map({
      case (s, c) => s + c
    }).mkString + separators.last._2
    sb.append(s"\\begin{tabularx}{\\linewidth}{$alignStr}\n")
    if (alignLine.contains("-"))
      sb.append("\\hline\n")

    for (line <- contentLines) {
      if (line.trim.matches("[- :|]+") && line.contains("-")) {
        sb.append("\\hline\n")
      } else {
        val lb = new StringBuilder
        line.zipWithIndex.foreach {
          case (c, i) =>
            if (i == separators.head._1)
              lb.append(" ")
            else if (separators.tail.unzip._1.contains(i))
              lb.append("&")
            else
              lb.append(c)
        }
        val rawStr = lb.toString().trim.dropRight(1)
        val parsedStr = rawStr.split("&").map(str => InlineParser(str).get).mkString("&")
        sb.append(parsedStr + " \\\\\n")
      }
    }

    sb.append("\\end{tabularx}")
    (sb.toString(), ResultContext(Set("tabularx")))
  }

  abstract sealed class ColumnAlignment(val char: Char)
  case object LeftAlign extends ColumnAlignment('l')
  case object CenterAlign extends ColumnAlignment('c')
  case object RightAlign extends ColumnAlignment('r')
  case object FillAlign extends ColumnAlignment('X')

  private def getColumnAlignment(alignLine: String, separators: List[Int]): List[ColumnAlignment] = separators match {
    case start :: end :: tail =>
      val alignStr = alignLine.substring(start + 2, end - 1)
      val ourAlign =
        if (alignStr.length > 2 && alignStr.matches("\\++"))
          FillAlign
        else if (alignStr.startsWith("+") && alignStr.endsWith("+"))
          CenterAlign
        else if (alignStr.endsWith("+"))
          RightAlign
        else
          LeftAlign // starts with a +, or if there is no +
      ourAlign :: getColumnAlignment(alignLine, end :: tail)
    case _ =>
      // last column, nothing to do
      Nil
  }

  private def getColumnSeparators(line: String): List[(Int, String)] = {
    line.zipWithIndex.map({
      case ('|', i) => (i, Some("|"))
      case (':', i) => (i, Some(""))
      case (_, i) => (i, None)
    }).filter(_._2.isDefined).map({
      case (i, opt) => (i, opt.get)
    }).toList
  }
}

case class ColumnAlignmentException(line: String)
  extends Exception(s"columns mis-aligned on the following line:\n$line")
