package com.prealpha.pipe.generators.latex

import com.prealpha.pipe.Block
import com.prealpha.pipe.generators._

class RawTextBlock extends BlockGenerator{
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val strippedLines = block.childLines.map(_.dropWhile(_.isWhitespace))
                                        .filter(_.length > 0)
                                        .mkString("\n")
    ("\n" + strippedLines, EmptyResultContext)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "_text"
}
