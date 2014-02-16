package com.prealpha.pipe.generators.latex

import org.scalatest._

class LatexDocumentTest extends FlatSpec with Matchers {
  def compile(s: String): String = {
    LatexDocument.compile(s)
  }

  "an empty document" should "provide only the very minimal" in {
    val input = ""
    compile(input) should be ("\\documentclass[a4paper]{article}\n\\begin{document}\n\n\\end{document}")
  }

  "a document with math" should "require amsmath" in {
    val input = "|equation\n  a + b + c"
    compile(input) should startWith ("\\documentclass[a4paper]{article}\n\\usepackage{amsmath}")
  }

  "funsies" should "be fun" in {
    println(compile(
      """
        ||equation
        |  (a + b) / c = (a)/(c) + (b)/(c)
        |  x = :sin(:theta)
     |""".stripMargin))
  }
}
