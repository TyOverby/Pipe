package com.prealpha.pipe.document

import com.prealpha.pipe.document.generators.latex.LatexDocument

object EntryPoint extends App {
  var hasLines = true
  val sb = new StringBuilder

  while (hasLines) {
    val line = Console.readLine()
    if (line == null) hasLines = false
    else sb.append(line)
  }

  println(LatexDocument.compile(sb.toString()))
}
