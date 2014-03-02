package com.prealpha.pipe.math.rewrite

import scala.util.parsing.combinator.{PackratParsers, RegexParsers}
import scala.util.Try
import com.prealpha.pipe.math.ParseException
import java.io.{BufferedReader, StringReader}
import scala.util.parsing.input.PagedSeqReader
import scala.collection.immutable.PagedSeq

object NewMathParser extends RegexParsers with PackratParsers {
  override def skipWhitespace = true

  def middle[L,R, Res](f: (L, R) => Res)(expr: ~[~[L,_],R]): Res = {
    f(expr._1._1, expr._2)
  }

  lazy val expr: PackratParser[MathExpr] =
    superScript | subScript | paren | overDiv | sideDiv | symbol | marco | superMarco | chunk



  lazy val chunk: PackratParser[MathExpr] = "[^()!:;,/_\\ ^]+".r ^^ Chunk

  lazy val symbol: PackratParser[MathExpr] = ":" ~> "[a-zA-Z]+".r ^^ Symbol

  lazy val paren: PackratParser[MathExpr] = "(" ~> expr.* <~ ")" ^^ Paren

  lazy val commaSep: PackratParser[Seq[Seq[MathExpr]]] = expr.* ~ ("," ~> expr.*).* ^^ { case a ~ b => a :: b}

  lazy val marco: PackratParser[MathExpr] = "!" ~> "[a-zA-Z]+".r ~ "("  ~ commaSep <~ ")" ^^ middle(Macro)

  lazy val semiSep: PackratParser[Seq[Seq[Seq[MathExpr]]]] =  commaSep ~ (";" ~> commaSep).* ^^ {case a ~ b => a :: b}

  lazy val superMarco: PackratParser[MathExpr] = "!" ~> "[a-zA-Z]+".r ~ "(" ~ semiSep <~ ")" ^^ middle(SuperMacro)

  lazy val superScript: PackratParser[MathExpr] = expr ~ "^" ~ expr ^^ middle(SuperScript)

  lazy val subScript: PackratParser[MathExpr] = expr ~ "_" ~ expr ^^ middle(SubScript)

  lazy val overDiv: PackratParser[MathExpr] = expr ~ "/" ~ expr ^^ middle(OverDiv)

  lazy val sideDiv: PackratParser[MathExpr] = expr ~ "//" ~ expr ^^ middle(SideDiv)

  def tryParse(input: String): Try[Seq[MathExpr]] = {
    val sr = new StringReader(input)
    val br = new BufferedReader(sr)
    val psr = new PagedSeqReader(PagedSeq.fromReader(br))
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
