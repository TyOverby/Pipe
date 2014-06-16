package com.prealpha.pipe.math

import MathCompiler.Result
import scala.util.parsing.combinator.{PackratParsers, RegexParsers}
import scala.util.parsing.input.{Positional, PagedSeqReader}
import scala.collection.immutable.PagedSeq

private[math] object MathParser extends RegexParsers with PackratParsers {
  def middle[L, R, Res](f: (L, R) => Res)(expr: ~[~[L, _], R]): Res = {
    f(expr._1._1, expr._2)
  }

  def cons[A](expr: ~[A, List[A]]): List[A] = expr._1 :: expr._2

  lazy val expr: PackratParser[MathExpr] =
    comment | overDiv | sideDiv | superScript | subScript | atNotation |
      paren | symbol | marco | superMarco |
      (numericChunk | symbolicChunk | characterChunk)

  // Used for the arguments to super and sub scripts.
  lazy val scriptExpr: PackratParser[MathExpr] =
    paren | symbol | marco | superMarco |
      (numericChunk | symbolicChunk | characterChunk)

  lazy val noCommaExpr: PackratParser[MathExpr] = expr flatMap {
    case Chunk(s) if s.contains(",") => failure("no commas allowed")
    case a => success(a)
  }

  lazy val symbolicChunk: PackratParser[Chunk] = positioned(
    "[^()@!:#;/_\\ ^a-zA-Z0-9]+".r ^^ Chunk
  )
  lazy val characterChunk: PackratParser[Chunk] = positioned(
    "[a-zA-Z]+".r ^^ Chunk
  )
  lazy val numericChunk: PackratParser[Chunk] = positioned(
    "-?[0-9.]+".r ^^ Chunk
  )

  lazy val symbol: PackratParser[Symbol] = positioned(
    ":" ~> "[a-zA-Z]+".r ^^ Symbol
  )

  lazy val comment: PackratParser[Comment] = positioned(
    "#" ~> "[^\\n]*".r <~ "$".r ^^ Comment
  )

  lazy val paren: PackratParser[Paren] = positioned(
    "(" ~> expr.* <~ ")" ^^ Paren
  )

  lazy val commaSep: PackratParser[Seq[Seq[MathExpr]]] =
    noCommaExpr.* ~ ("," ~> noCommaExpr.*).* ^^ cons

  lazy val marco: PackratParser[Macro] = positioned(
    "!" ~> "[a-zA-Z]+".r ~ "(" ~ commaSep <~ ")" ^^ middle(Macro)
  )

  lazy val semiSep: PackratParser[Seq[Seq[Seq[MathExpr]]]] =
    commaSep ~ (";" ~> commaSep).* ^^ cons

  lazy val superMarco: PackratParser[SuperMacro] = positioned(
    "!" ~> "[a-zA-Z]+".r ~ "(" ~ semiSep <~ ")" ^^ middle(SuperMacro)
  )

  lazy val superScript: PackratParser[SuperScript] = positioned(
    expr ~ "^" ~ scriptExpr ^^ middle(SuperScript)
  )

  lazy val subScript: PackratParser[SubScript] = positioned(
    expr ~ "_" ~ scriptExpr ^^ middle(SubScript)
  )

  lazy val atNotation: PackratParser[Macro] = positioned(
    expr ~ "@" ~ characterChunk ^^ middle((a, b) => Macro(b.contents, Seq(Seq(a))))
  )

  lazy val overDiv: PackratParser[OverDiv] = positioned(
    expr ~ "/" ~ expr ^^ middle(OverDiv)
  )

  lazy val sideDiv: PackratParser[SideDiv] = positioned(
    expr ~ "//" ~ expr ^^ middle(SideDiv)
  )

  def parseLine(line: LogicalLine): Result[Seq[MathExpr]] = {
    val psr = new PagedSeqReader(PagedSeq.fromStrings(List(line.toString())))
    val pr = new PackratReader(psr)
    if (line.toString.forall(_.isWhitespace)) {
      Left(MathCompiler.Failure("empty line", None, line.offset(0)))
    } else {
      parse(phrase(expr.+), pr) match {
        case Success(result, next) =>
          Right(result)
        case failure: NoSuccess =>
          Left(MathCompiler.Failure("parse failed: " + failure.msg, Some(failure), line.offset(failure.next.offset)))
      }
    }
  }

  /*
   * Adaptation of RegexParsers.positioned to accommodate left recursive rules with PackratParsers.
   * TODO: is there a cleaner way to accomplish this?
   */
  override def positioned[T <: Positional](p: => Parser[T]): Parser[T] = {
    val pp = parser2packrat(super[PackratParsers].positioned(p))
    new Parser[T] {
      def apply(in: Input): ParseResult[T] = {
        val offset = in.offset
        val start = handleWhiteSpace(in.source, offset)
        pp(in.drop (start - offset))
      }
    }
  }
}
