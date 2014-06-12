package com.prealpha.pipe.document

import com.prealpha.pipe.math.{MathCompiler, ParseException}
import scala.util.Try
import scala.util.parsing.combinator.RegexParsers

private[document] object InlineParser extends RegexParsers {
  def parse(input: String): Try[String] = {
    if (input == "")
      scala.util.Success("")
    else
      parse(content, input) match {
        case Success(result, next) => scala.util.Success(result)
        case NoSuccess(msg, next) => scala.util.Failure(new ParseException(msg, input, next))
      }
  }

  def parse(block: Block): Try[Block] = {
    try {
      val parsedArgLine = parse(block.argLine).get
      val parsedChildLines =
        if (block.instance == "_text")
          block.childLines.map(parse).map(_.get)
        else
          block.childLines
      val parsedChildBlocks = block.childBlocks.map(parse).map(_.get)
      val parsedBlock = Block(block.instance, parsedArgLine, block.level, block.lineNum, parsedChildLines, parsedChildBlocks)
      scala.util.Success(parsedBlock)
    } catch {
      case px: ParseException[_] => scala.util.Failure(px)
    }
  }

  override def skipWhitespace = false

  def content: Parser[String] = phrase(elem.+) ^^ (_.mkString)

  def elem: Parser[String] = mathElem | inlineElem | normalElem

  def mathElem: Parser[String] = new Parser[String] {
    override def apply(in: Input): ParseResult[String] = ("$" ~> ((not("$") ~> ".".r).+ ^^ (_.mkString.trim)) <~ "$").apply(in) match {
      case Error(msg, next) => Error(msg, next)
      case Failure(msg, next) => Failure(msg, next)
      // TODO: the type annotation is only for IntelliJ
      case Success(result: String, next) => MathCompiler.compile(result) match {
        case Right(latex) => Success("$" + latex + "$", next)
        case Left(errors) => Failure(errors.head.msg, next)
        // TODO find a way to report more than one error
      }
    }
  }

  def inlineElem: Parser[String] = new Parser[String] {
    override def apply(in: Input): ParseResult[String] = ("(|" ~> "[a-zA-Z0-9$]+".r).apply(in) match {
      case Error(msg, next) => Error(msg, next)
      case Failure(msg, next) => Failure(msg, next)
      case Success(result, next) => result match {
        case "latex" =>
          (((not("(|") ~> not("|)") ~> ".".r).+ ^^ (_.mkString)) <~ "|)" ^^ (_.trim)).apply(next)
        case _ =>
          Failure(s"unrecognized inline $result", in.drop(2))
      }
    }
  }

  def normalElem: Parser[String] = (not("(|") ~> not("|)") ~> not("$") ~> ".".r).+ ^^ (_.mkString)
}
