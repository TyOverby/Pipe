package com.prealpha.pipe.math.api

import com.prealpha.pipe.math.{MathParser, CodeGen}
import scala.util.Try

object Math {
  def compile(source: String): Try[String] =
    MathParser.parse(source).map(CodeGen.genEntire)

  def forceCompile(source: String): String =
    compile(source).get
}
