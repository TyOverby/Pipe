package com.prealpha.pipe.math

import scala.util.parsing.combinator.{PackratParsers, RegexParsers}
import scala.util.parsing.combinator.token.Tokens
import scala.util.Try
import java.io.{BufferedReader, StringReader}
import scala.util.parsing.input.PagedSeqReader
import scala.collection.immutable.PagedSeq

object MathParser extends RegexParsers with PackratParsers {
  override def skipWhitespace = true

  def middle[L,R, Res](f: (L, R) => Res)(expr: ~[~[L,_],R]): Res = {
    f(expr._1._1, expr._2)
  }
  def cons[A](expr: ~[A, List[A]]): List[A] = expr._1 :: expr._2

  lazy val expr: PackratParser[MathExpr] =
     comment | overDiv | sideDiv | superScript | subScript |
    paren   | symbol  | marco       | superMarco |
    (numericChunk    | symbolicChunk | characterChunk)

  // Used for the arguments to super and sub scripts.
  lazy val scriptExpr: PackratParser[MathExpr] =
    paren   | symbol  | marco       | superMarco |
    (numericChunk    | symbolicChunk | characterChunk)



  lazy val symbolicChunk: PackratParser[MathExpr] = "[^()!:#;,/_\\ ^a-zA-Z0-9]+".r ^^ Chunk
  lazy val characterChunk: PackratParser[MathExpr] = "[a-zA-Z]+".r ^^ Chunk
  lazy val numericChunk: PackratParser[MathExpr] = "-?[0-9.]+".r ^^ Chunk

  lazy val symbol: PackratParser[MathExpr] = ":" ~> "[a-zA-Z]+".r ^^ Symbol

  lazy val comment: PackratParser[MathExpr] = "#" ~> "[^\\n]*".r <~ "$".r  ^^ Comment

  lazy val paren: PackratParser[MathExpr] = "(" ~> expr.* <~ ")" ^^ Paren

  lazy val commaSep: PackratParser[Seq[Seq[MathExpr]]] = expr.* ~ ("," ~> expr.*).* ^^ cons

  lazy val marco: PackratParser[MathExpr] = "!" ~> "[a-zA-Z]+".r ~ "("  ~ commaSep <~ ")" ^^ middle(Macro)

  lazy val semiSep: PackratParser[Seq[Seq[Seq[MathExpr]]]] =  commaSep ~ (";" ~> commaSep).* ^^ cons

  lazy val superMarco: PackratParser[MathExpr] = "!" ~> "[a-zA-Z]+".r ~ "(" ~ semiSep <~ ")" ^^ middle(SuperMacro)

  lazy val superScript: PackratParser[MathExpr] = expr ~ "^" ~ scriptExpr ^^ middle(SuperScript)

  lazy val subScript: PackratParser[MathExpr] = expr ~ "_" ~ scriptExpr ^^ middle(SubScript)

  lazy val overDiv: PackratParser[MathExpr] = expr ~ "/" ~ expr ^^ middle(OverDiv)

  lazy val sideDiv: PackratParser[MathExpr] = expr ~ "//" ~ expr ^^ middle(SideDiv)

  def tryParse(input: String): Try[Seq[MathExpr]] = {
    val psr = new PagedSeqReader(PagedSeq.fromStrings(List(input)))
    val pr = new PackratReader(psr)
    if (input.forall(_.isWhitespace)) {
      scala.util.Failure(new ParseException("", input, ""))
    } else  {
      parse(expr.+, pr) match {
        case Success(result, next) => scala.util.Success(result)
        case NoSuccess(msg, next) => scala.util.Failure(new ParseException(msg, input, next))
      }
    }
  }
}
