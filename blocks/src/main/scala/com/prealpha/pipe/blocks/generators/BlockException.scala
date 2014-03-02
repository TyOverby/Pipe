package com.prealpha.pipe.blocks.generators
import com.prealpha.pipe.blocks.Block

case class BlockException(block: Block, message: String)
  extends Exception(s"Error inside block ${block.instance}} at line ${block.lineNum}: \n $message")
