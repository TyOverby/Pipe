package com.prealpha.pipe.document

class ParseError(lineNumber: Int, line: String, msg: String)
  extends Exception(s"Parse error on line $lineNumber ($line):\n$msg")
