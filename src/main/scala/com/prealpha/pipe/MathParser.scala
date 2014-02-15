package com.prealpha.pipe

import scala.util.parsing.combinator.RegexParsers
import scala.util.Try

/*
 * The precedence of the various expression types is kind of unclear from the code.
 * basicExpr has the highest precedence, followed by binaryExpr and then expr.
 */
object MathParser extends RegexParsers {
  // TODO: use a custom exception type?
  def apply(input: String): Try[String] = parse(math, input) match {
    case Success(result, next) => scala.util.Success(result)
    case NoSuccess(msg, next) => scala.util.Failure(new Exception(msg))
  }

  override def skipWhitespace = false

  def math: Parser[String] = phrase(spacedExpr.+) ^^ {
    case list => ("" /: list)(_ + _)
  }

  def expr: Parser[String] = text | symbol | macro_ | binaryExpr

  def binaryExpr: Parser[String] = horizontalDivide | verticalDivide | superscript | subscript | basicExpr

  def slash: Parser[String] = whiteSpace.? ~> "/" <~ whiteSpace.?

  def horizontalDivide: Parser[String] =
    ((whiteSpace.? ~> parenExpr ~ slash ~ parenExpr <~ whiteSpace.?) |
      (whiteSpace.? ~> parenExpr ~ slash ~ basicExpr <~ whiteSpace.?) |
      (whiteSpace.? ~> basicExpr ~ slash ~ parenExpr <~ whiteSpace.?)) ^^ {
      case leftExpr ~ slash ~ rightExpr => "\\dfrac{" + leftExpr + "}{" + rightExpr + "}"
    }

  def verticalDivide: Parser[String] = whiteSpace.? ~> basicExpr ~ slash ~ basicExpr <~ whiteSpace.? ^^ {
    case leftExpr ~ slash ~ rightExpr => leftExpr + slash + rightExpr
  }

  def caret: Parser[String] = whiteSpace.? ~> "^" <~ whiteSpace.?

  def superscript: Parser[String] =
    ((whiteSpace.? ~> basicExpr ~ caret ~ parenExpr <~ whiteSpace.?) |
      (whiteSpace.? ~> basicExpr ~ caret ~ basicExpr <~ whiteSpace.?)) ^^ {
      case leftExpr ~ caret ~ rightExpr => s"$leftExpr^{$rightExpr}"
    }

  def uscore: Parser[String] = whiteSpace.? ~> "_" <~ whiteSpace.?

  def subscript: Parser[String] =
    ((whiteSpace.? ~> basicExpr ~ uscore ~ parenExpr <~ whiteSpace.?) |
      (whiteSpace.? ~> basicExpr ~ uscore ~ basicExpr <~ whiteSpace.?)) ^^ {
      // naturally, leftExpr_ is a valid identifier, so I can't use it directly
      case leftExpr ~ uscore ~ rightExpr => s"$leftExpr$uscore{$rightExpr}"
    }

  def basicExpr: Parser[String] = (parenExpr ^^ { "(" + _ + ")" }) | normalExpr

  def parenExpr: Parser[String] = "(" ~> spacedExpr.+ <~ ")" ^^ {
    case list => ("" /: list)(_ + _)
  }

  def normalExpr: Parser[String] = "[^\\s/():!,;^_]+".r

  def spacedExpr: Parser[String] = whiteSpace.? ~> expr <~ whiteSpace.?

  def exprList: Parser[List[String]] = spacedExpr ~ ("," ~> spacedExpr).* ^^ {
    case head ~ tail => head :: tail
  }

  def twoExprList: Parser[String ~ String] = (spacedExpr <~ ",") ~ spacedExpr

  // TODO figure out how the hell quotation marks inside text will work
  def text: Parser[String] = "\"" ~> """[^"\n\r]*""".r <~ "\"" ^^ {
    case str => s"\\text{$str}"
  }

  def symbol: Parser[String] = ":" ~> (not(whiteSpace) ~> ".".r).* ^^ {
    case chars => "\\" + ("" /: chars)(_ + _)
  }

  def macro_ : Parser[String] = new Parser[String] {
    override def apply(in: Input): ParseResult[String] = ("!" ~> "[a-zA-Z0-9]+".r <~ "(").apply(in) match {
      case Failure(msg, next) => Failure(msg, next)
      case Error(msg, next) => Error(msg, next)
      case Success(result, next) =>
        val parser = result match {
          case "sum" =>
            twoExprList ^^ {
              case start ~ end => s"\\sum_{$start}{$end}"
            }
          case "prod" =>
            twoExprList ^^ {
              case start ~ end => s"\\prod_{$start}{$end}"
            }
          case "integral" =>
            twoExprList ^^ {
              case start ~ end => s"\\int_{$start}{$end}"
            }
          case "limit" =>
            twoExprList ^^ {
              case variable ~ bound => s"\\lim_{$variable \\to $bound}"
            }
          case "sqrt" =>
            spacedExpr ^^ {
              case root => s"\\sqrt{$root}"
            }
          case "matrix" =>
            (whiteSpace.? ~> exprList <~ whiteSpace.?) ~ (";" ~> whiteSpace.? ~> exprList <~ whiteSpace.?).* ^^ {
              case first ~ rest =>
                val list = first :: rest
                val flatRows = list.map {
                  case Nil => ""
                  case head :: tail => head + ("" /: tail)(_ + " & " + _)
                }
                val rowsStr = ("" /: flatRows)(_ + _ + " \\\\ ")
                val colCount = list.map(_.length).max
                val colStr = "c" * colCount
                s"\\left( \\begin{array}{$colStr} $rowsStr \\end{array} \\right)"
            }
          case "cases" =>
            (whiteSpace.? ~> twoExprList <~ whiteSpace.?) ~ ("," ~> whiteSpace.? ~> twoExprList <~ whiteSpace.?).* ^^ {
              case head ~ tail =>
                val list = head :: tail
                val casesLines = ("" /: list)(_ + _ + "\\\\")
                "\\left{" + casesLines
            }
          case _ => null
        }
        if (parser != null)
          (parser <~ ")").apply(next)
        else
          Failure(s"unrecognized macro $result", in.drop(1))
    }
  }
}
