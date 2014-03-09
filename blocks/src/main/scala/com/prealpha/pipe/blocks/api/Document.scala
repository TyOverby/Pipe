package com.prealpha.pipe.blocks.api

import scala.util.Try
import com.prealpha.pipe.blocks.generators.latex.LatexDocument
import scala.scalajs.js.annotation.JSExport

@JSExport
class Document {
  def compile(source: String): Try[String] =
    Try(LatexDocument.compile(source))

  @JSExport
  def forceCompile(source: String): String =
    compile(source).get
}
