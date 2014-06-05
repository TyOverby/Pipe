package com.prealpha.pipe.document.generators.latex

import org.scalatest._
import java.io.ByteArrayOutputStream

class LatexDocumentTest extends FlatSpec with Matchers {
  def compile(s: String): String = {
    LatexDocument.compile(s)
  }

  "an empty document" should "provide only the very minimal" in {
    val input = ""
    compile(input) should be("\\documentclass[a4paper, 12pt]{article}\n\\begin{document}\n\n\\end{document}")
  }

  "a document with math" should "require amsmath" in {
    val input = "|equation\n  a + b + c"
    compile(input) should startWith("\\documentclass[a4paper, 12pt]{article}\n\\usepackage{amsmath}")
  }

  "a document with latex-import" should "import the packages correctly"  in {
    val input = "|latex-import foo"
    compile(input) should startWith("\\documentclass[a4paper, 12pt]{article}\n\\usepackage{foo}")
  }

  it should "import multiple" in  {
    val input = "|latex-import\n  foo\n  bar"
    compile(input) should startWith("\\documentclass[a4paper, 12pt]{article}\n\\usepackage{foo}\n\\usepackage{bar}")
  }


  "this long document" should "compile" in {
    compile(
      """
        ||section Meyer Kizner
        ||section CIS 121 Homework 3
        ||subsection February 6, 2014
        |
        ||list 1.
        |  |item
        |    Comparing functions $f(n)$ and $g(n)$:
        |    |list (a)
        |      |item
        |        $f(n) = 2^n, g(n) = 2^(n/2)$
        |        $f(n) = :omega(g(n))$:
        |        |equation =
        |          !limit(n, :infty) (f(n))/(g(n)) = !limit(n, :infty) (2^n)/(2^(n/2))
        |                                          = !limit(n, :infty) 2^(n/2)
        |                                          = :infty.
        |      |item
        |        $f(n) = e^n, g(n) = n2^n$
        |        $f(n) = :omega(g(n))$:
        |        |equation =
        |          !limit(n, :infty) (f(n))/(g(n)) = !limit(n, :infty) (e^n)/(n2^n)
        |                                          = !limit(n, :infty) (1)/(n) ((e)/(2))^n
        |                                          = (1 - :ln(2)) !limit(n, :infty) ((e)/(2))^n
        |                                          = :infty.
        |      |item
        |        $f(n) = n^(!sqrt(n)), g(n) = 2^(an)$
        |        $f(n) = o(g(n))$: consider the following inequality:
        |        |equation :leq
        |          n^(!sqrt(n)) :leq 2^(an)
        |          :log(n^(!sqrt(n))) :leq :log(2^(an))
        |          !sqrt(n) :log(n) :leq a n :log(2)
        |          n^(-1/2) :log(n) :leq a :log(2)
        |        Taking the limit of the left-hand side as $n :to :infty$, we find
        |        |equation =
        |          !limit(n, :infty) n^(-1/2) :log(n) = !limit(n, :infty) (:log(n))/(n^(1/2))
        |                                             = !limit(n, :infty) (1/n)/((1/2)n^(-1/2))
        |                                             = !limit(n, :infty) 2n^(-1/2)
        |                                             = 0.
        |        As $n$ grows large, the left-hand side tends to zero while the right-hand side remains a positive constant. So we have shown that $n^(!sqrt(n)) = O(2^(an))$. Conversely, if the inequality were reversed it would not hold for large $n$, even with the addition of a positive constant. It follows that $n^(!sqrt(n)) :not= :Omega(2^(an))$, so we must have $n^(!sqrt(n)) = o(2^(an))$.
        |
      """.stripMargin
    )
  }


  "Document mode" should "parse and use the settings" in {
    val input = "|document\n  title = My Title\n  author = Ty Overby"
    compile(input) should be("\\documentclass[a4paper, 12pt]{article}\n\\title{My Title}\n\\author{Ty Overby}\n\\begin{document}\n\\maketitle\n\n\\end{document}")
  }

  "document" should "not warn on empty lines" in {
    val prev = System.err
    val baos = new ByteArrayOutputStream
    Console.withErr(baos) {
      val input = "|document\n  title = Foo\n\n|section Foo"
      compile(input)
      baos.toString should be ("")
    }
  }

  "matrices" should "work" in {
    val markup =
      """
        ||document
        |    title = Some equations
        |    author = Ty Overby, Meyer Kizner
        |
        ||equation
        |  a = b
        |  x = :sin(:theta)
        ||equation =
        |  x = :sin(:theta)
        |  y = :sin^(-1)(:theta)
        |
        ||equation
        |  !matrix(
        |    3, -4, 0;
        |    4, -2, 0;
        |    -1, 0, 3
        |  ) !matrix(x_1; x_2; x_3) = !matrix(0; 0; 0)
        |
        |""".stripMargin.trim
    compile(markup)
  }
}
