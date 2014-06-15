package com.prealpha.pipe.math

import scala.util.parsing.combinator.{PackratParsers, RegexParsers}
import scala.util.Try
import scala.util.parsing.input.PagedSeqReader
import scala.collection.immutable.PagedSeq

private[math] object MathParser extends RegexParsers with PackratParsers {
  def middle[L, R, Res](f: (L, R) => Res)(expr: ~[~[L, _], R]): Res = {
    f(expr._1._1, expr._2)
  }

  def cons[A](expr: ~[A, List[A]]): List[A] = expr._1 :: expr._2

  lazy val expr: PackratParser[MathExpr] =
    comment | overDiv | sideDiv | superScript | subScript | atNotation |
      wrapper | symbol | marco | superMarco |
      (numericChunk | symbolicChunk | characterChunk)

  // Used for the arguments to super and sub scripts.
  lazy val scriptExpr: PackratParser[MathExpr] =
    wrapper | symbol | marco | superMarco |
      (numericChunk | symbolicChunk | characterChunk)

  lazy val noCommaExpr: PackratParser[MathExpr] = expr.flatMap{
    case Chunk(s) if s.contains(",") => failure("no commas allowed")
    case a => success(a)
  }

  lazy val symbolicChunk: PackratParser[Chunk] = "[^(){}\\[\\]@!:#;/_\\ ^a-zA-Z0-9]+".r ^^ Chunk
  lazy val characterChunk: PackratParser[Chunk] = "[a-zA-Z]+".r ^^ Chunk
  lazy val numericChunk: PackratParser[Chunk] = "-?[0-9.]+".r ^^ Chunk

  lazy val symbol: PackratParser[Symbol] = ":" ~> "[a-zA-Z]+".r ^^ Symbol

  lazy val comment: PackratParser[Comment] = "#" ~> "[^\\n]*".r <~ "$".r ^^ Comment

  lazy val paren: PackratParser[Paren] = "(" ~> expr.* <~ ")" ^^ Paren

  lazy val brace: PackratParser[Brace] = "{" ~> expr.* <~ "}" ^^ Brace

  lazy val bracket: PackratParser[Bracket] = "[" ~> expr.* <~ "]" ^^ Bracket

  lazy val wrapper: PackratParser[MathExpr] = paren | brace | bracket

  lazy val commaSep: PackratParser[Seq[Seq[MathExpr]]] = noCommaExpr.* ~ ("," ~> noCommaExpr.*).* ^^ cons

  lazy val marco: PackratParser[Macro] = "!" ~> "[a-zA-Z]+".r ~ "(" ~ commaSep <~ ")" ^^ middle(Macro)

  lazy val semiSep: PackratParser[Seq[Seq[Seq[MathExpr]]]] = commaSep ~ (";" ~> commaSep).* ^^ cons

  lazy val superMarco: PackratParser[SuperMacro] = "!" ~> "[a-zA-Z]+".r ~ "(" ~ semiSep <~ ")" ^^ middle(SuperMacro)

  lazy val superScript: PackratParser[SuperScript] = expr ~ "^" ~ scriptExpr ^^ middle(SuperScript)

  lazy val subScript: PackratParser[SubScript] = expr ~ "_" ~ scriptExpr ^^ middle(SubScript)

  lazy val atNotation: PackratParser[Macro] = expr ~ "@" ~ characterChunk ^^ middle((a, b) => Macro(b.contents, Seq(Seq(a))))

  lazy val overDiv: PackratParser[OverDiv] = expr ~ "/" ~ expr ^^ middle(OverDiv)

  lazy val sideDiv: PackratParser[SideDiv] = expr ~ "//" ~ expr ^^ middle(SideDiv)

  def parse(input: String, alignOn: Option[MathExpr] = None): Try[Seq[MathExpr]] = {
    val rawLines = input.trim.split("\n")
    joinLines(rawLines).flatMap { joinedLines =>
      val lineTries = joinedLines.map(parseLine(_, alignOn))
      if (lineTries.forall(_.isSuccess)) {
        val lineResults = lineTries.map(_.get)
        val resultsWithNewlines = lineResults.map(Newline +: _)
        val joinedResult = (List[MathExpr]() /: resultsWithNewlines)(_ ++ _)
        scala.util.Success(joinedResult.drop(1))
      } else {
        lineTries.dropWhile(_.isSuccess).head
      }
    }
  }

  private def joinLines(lines: Seq[String]): Try[Seq[String]] = lines match {
    case Seq(first, second, tail @ _ *) =>
      if (first.endsWith("\\"))
        joinLines((first.dropRight(1) + second) +: tail)
      else
        joinLines(second +: tail).map(first +: _)
    case Seq(head) =>
      if (head.endsWith("\\"))
        scala.util.Failure(new ParseException("no succeeding line to join to", head, ""))
      else
        scala.util.Success(head :: Nil)
    case Seq() =>
      scala.util.Success(Nil)
  }

  private def parseLine(line: String, alignOn: Option[MathExpr]): Try[Seq[MathExpr]] = {
    val psr = new PagedSeqReader(PagedSeq.fromStrings(List(line)))
    val pr = new PackratReader(psr)
    if (line.forall(_.isWhitespace)) {
      scala.util.Failure(new ParseException("empty line", line, ""))
    } else {
      parse(phrase(expr.+), pr) match {
        case Success(result, next) => validateAlignment(result, alignOn)
        case NoSuccess(msg, next) => scala.util.Failure(new ParseException(msg, line, next))
      }
    }
  }

  /* TODO: this should probably be a stage that manipulates the AST */
  private def validateAlignment(line: Seq[MathExpr], alignOn: Option[MathExpr]): Try[Seq[MathExpr]] = alignOn match {
    case Some(alignExpr) =>
      val aligners = line.zipWithIndex.filter {
        case (`alignExpr`, _) => true
        case _ => false
      }
      if (aligners.length == 1) {
        val index = aligners.head._2
        val replaced = line.slice(0, index) ++ (Align(alignExpr) +: line.slice(index + 1, line.length))
        scala.util.Success(replaced)
      } else {
        scala.util.Failure(new ParseException("invalid aligner count", line, ""))
      }
    case None =>
      scala.util.Success(line)
  }
}
