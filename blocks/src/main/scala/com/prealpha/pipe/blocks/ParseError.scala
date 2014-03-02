package com.prealpha.pipe.blocks

class ParseError(lineNumber: Int, line: String, msg: String)
  extends Exception(s"Parse error on line $lineNumber ($line):\n$msg")
