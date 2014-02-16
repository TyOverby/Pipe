package com.prealpha.pipe.generators.latex

import com.prealpha.pipe.Block
import com.prealpha.pipe.generators._

class TableBlock extends BlockGenerator {
  override def captures(block: Block)(implicit ctx: CompileContext): Boolean = {
    block.instance == "table"
  }

  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = ???

  abstract sealed class ColumnAlignment(char: Char)
  case object LeftAlign extends ColumnAlignment('l')
  case object CenterAlign extends ColumnAlignment('c')
  case object RightAlign extends ColumnAlignment('r')
  case object FillAlign extends ColumnAlignment('X')

  private def getColumnAlignment(alignLine: String, separators: List[Int]): List[ColumnAlignment] = separators match {
    case start :: end :: tail =>
      val alignStr = alignLine.substring(start + 1, end).trim
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

  private def getColumnSeparators(line: String): Map[Int, Boolean] = {
    val builder = Map.newBuilder[Int, Boolean]
    line.zipWithIndex.foreach({
      case ('|', i) => builder += ((i, true))
      case (':', i) => builder += ((i, false))
      case _ => ()
    })
    builder.result()
  }
}
