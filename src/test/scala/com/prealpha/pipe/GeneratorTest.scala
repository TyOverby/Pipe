package com.prealpha.pipe

import org.scalatest._
import com.prealpha.pipe.pipemode.{Block, BlocksParser}
import com.prealpha.pipe.pipemode.generators.latex.RootBlock

class GeneratorTest extends FlatSpec with Matchers {
  def compile(b: Block): String = {
    val rb = new RootBlock
    rb.force(b)
  }

  def parse(s: String): Block = {
    BlocksParser.parse(s)
  }

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
    val input = "|list numeric\n |item Foo"
    val parsed = parse(input)
    val output = compile(parsed)

    output should be("\\begin{enumerate}\n\\item Foo\n\\end{enumerate}")
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

  // TODO: See if you can throw other blocks into a list block
  // TODO: See if you can use a list element without
}
