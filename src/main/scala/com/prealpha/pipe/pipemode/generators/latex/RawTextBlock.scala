package com.prealpha.pipe.pipemode.generators.latex

import com.prealpha.pipe.pipemode._
import com.prealpha.pipe.pipemode.Block
import com.prealpha.pipe.pipemode.CompileContext
import com.prealpha.pipe.pipemode.ResultContext

class RawTextBlock extends BlockGenerator{
  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val strippedLines = block.childLines.split("\n")
                                        .map(_.dropWhile(_.isWhitespace))
                                        .filter(_.length > 0)
                                        .mkString("\n")
    ("\n" + strippedLines, EmptyResultContext)
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "_text"
}
