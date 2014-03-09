package com.prealpha.pipe.math.api

import com.prealpha.pipe.math.{MathParser, CodeGen}
import scala.util.Try
import scala.scalajs.js.annotation.JSExport

@JSExport
object Math {
  def compile(source: String): Try[String] =
    MathParser.tryParse(source).map(CodeGen.genEntire)

  @JSExport
  def forceCompile(source: String): String =
    compile(source).get
}
