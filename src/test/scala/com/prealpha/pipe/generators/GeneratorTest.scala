package com.prealpha.pipe.generators

import org.scalatest._
import com.prealpha.pipe.generators.latex.RootBlock
import com.prealpha.pipe.{BlocksParser, Block}

class GeneratorTest extends FlatSpec with Matchers {
  def compile(b: Block): String = {
    val rb = new RootBlock
    rb.force(b)
  }

  def parse(s: String): Block = {
    BlocksParser.parse(s)
  }

  //
  // LISTS
  //

  "A list with a single element" should "produce valid latex" in {
    val input = "|list\n  |item Foo"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be("\\begin{itemize}\n\\item Foo\n\\end{itemize}")
  }

  "A list with multiple sublists" should "produce valid latex" in {
    val input = "|list\n  |item Foo\n  |item Bar\n  |item Baz"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be("\\begin{itemize}\n\\item Foo\n\\item Bar\n\\item Baz\n\\end{itemize}")
  }

  "A list with arguments" should "produce a different looking result" in {
    val input = "|list 1.\n |item Foo"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be("\\begin{enumerate}[1.]\n\\item Foo\n\\end{enumerate}")
  }

  "A list item without a parent list" should "not compile" in {
    val input = "|item Foo"
    val parsed = parse(input)
    intercept[Exception](compile(parsed))
  }

  "Two nested lists" should "compile" in {
    val input = "|list\n  |item\n    |list\n      |item Foo"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be(
      """
\begin{itemize}
\item
\begin{itemize}
\item Foo
\end{itemize}
\end{itemize}
      """.trim())
  }

  "The * shortcut for list items" should "work" in {
    val input = "|list\n  |*list\n    |item Foo"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be(
      """
\begin{itemize}
\item
\begin{itemize}
\item Foo
\end{itemize}
\end{itemize}
      """.trim())

  }

  "Nesting a list item under a list item" should "be impossible" in {
    val input = "|list\n  |item\n    |item Foo"
    val parsed = parse(input)
    intercept[Exception](compile(parsed))
  }

  "Nesting a list item under a list item via the shortcut" should "be impossible" in {
    val input = "|list\n  |*item"
    val parsed = parse(input)
    intercept[Exception](compile(parsed))
  }

  //
  // Paragraphs
  //



  "a single paragraphs" should "produce a single paragraph" in {
    val input = "this is\na paragraph"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be (s"\n$input")
  }

  "Several paraphraphs" should "be properly spaced" in {
    val input = "this is\na paragraph\n\nthis is\nanother paragraph"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be (s"\n$input")
  }

  "A list with a single paragraph" should "produce a correct item" in {
    val input = "|list\n  |item\n    This is a paragraph\n    More of the same"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be ("\\begin{itemize}\n\\item\n\nThis is a paragraph\nMore of the same\n\\end{itemize}")
  }

  //
  // Sections
  //

  "A single section without any children or title" should "produce an empty section" in {
    val input = "|section"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be ("\\section*{}")
  }

  "A single named section" should "work" in {
    val input = "|section Foo Bar"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be ("\\section*{Foo Bar}")
  }

  "A single section with a paragraph next to it" should "not botch anything" in {
    val input = "|section Foo\nThis is a\nParagraph woo!"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be ("\\section*{Foo}\n\nThis is a\nParagraph woo!")
  }

  "A list with a section directly as its parent" should "not compile" in {
    val input = "|list\n  |section Foo"
    val parsed = parse(input)

    intercept[Exception](compile(parsed))
  }

  "A list with some text and a list as it's children" should "be fine" in {
    val input = "|section Foo\n  Paragraph\n  |list\n    |* Item"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be ("\\section*{Foo}\nParagraph\n\\begin{itemize}\n\\item Item\n\\end{itemize}")
  }

  "Bold and Italics" should "work or something" in {
    val input = "|bold Hi"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be ("\\bfshape\nHi\n\\normalshape")
  }

  "The \"pre\" text block" should "wrap correctly" in {
    val input = "|raw\n hello\n world\n     Woo"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be ("\\begin{verbatim}\nhello\nworld\n    Woo\n\\end{verbatim}")
  }

  "Verbatim mode " should "capture nested blocks" in {
    val input = "|raw\n |foo Bar"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be ("\\begin{verbatim}\n|foo Bar\n\\end{verbatim}")
  }
}
