package com.prealpha.pipe.document.api

import scala.util.Try
import com.prealpha.pipe.document.generators.latex.LatexDocument

class Document {
  def compile(source: String): Try[String] =
    Try(LatexDocument.compile(source))

  def forceCompile(source: String): String =
    compile(source).get
}
