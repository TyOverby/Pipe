package com.prealpha.pipe.document.generators

import com.prealpha.pipe.document.Block

case class BlockException(block: Block, message: String)
  extends Exception(s"Error inside block ${block.instance}} at line ${block.lineNum}: \n $message")
