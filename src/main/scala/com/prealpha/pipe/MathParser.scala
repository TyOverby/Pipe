package com.prealpha.pipe

import scala.util.parsing.combinator.RegexParsers

/*
 * The precedence of the various expression types is kind of unclear from the code.
 * basicExpr has the highest precedence, followed by divideExpr and then expr.
 */
object MathParser extends RegexParsers {
  def apply(input: String): Option[String] = parse(math, input) match {
    case Success(result, next) => Some(result)
    case _ => None
  }

  override def skipWhitespace = false

  def math: Parser[String] = phrase(spacedExpr.+) ^^ {
    case list => ("" /: list)(_ + _)
  }

  def expr: Parser[String] = symbol | macro_ | divideExpr

  def basicExpr: Parser[String] = (parenExpr ^^ { "(" + _ + ")" }) | normalExpr

  def spacedExpr: Parser[String] = whiteSpace.? ~> expr <~ whiteSpace.?

  def exprList: Parser[List[String]] = spacedExpr ~ ("," ~> spacedExpr).* ^^ {
    case head ~ tail => head :: tail
  }

  def twoExprList: Parser[String ~ String] = (spacedExpr <~ ",") ~ spacedExpr
  
  def normalExpr: Parser[String] = "[^\\s/():!,;]+".r
  
  def parenExpr: Parser[String] = "(" ~> spacedExpr.+ <~ ")" ^^ {
    case list => ("" /: list)(_ + _)
  }

  def divideExpr: Parser[String] = horizontalDivide | verticalDivide | basicExpr

  def slash: Parser[String] = whiteSpace.? ~> "/" <~ whiteSpace.?

  def horizontalDivide: Parser[String] =
    ((whiteSpace.? ~> parenExpr ~ slash ~ basicExpr <~ whiteSpace.?) |
      (whiteSpace.? ~> basicExpr ~ slash ~ parenExpr <~ whiteSpace.?)) ^^ {
      case leftExpr ~ slash ~ rightExpr => "\\dfrac{" + leftExpr + "}{" + rightExpr + "}"
    }

  def verticalDivide: Parser[String] = whiteSpace.? ~> basicExpr ~ slash ~ basicExpr <~ whiteSpace.? ^^ {
    case leftExpr ~ slash ~ rightExpr => leftExpr + slash + rightExpr
  }

  def symbol: Parser[String] = ":" ~> (not(whiteSpace) ~> ".".r).* ^^ {
    case chars => "\\" + ("" /: chars)(_ + _)
  }

  def macro_ : Parser[String] = sumMacro | prodMacro | integralMacro | limitMacro | sqrtMacro | matrixMacro | casesMacro

  def sumMacro: Parser[String] = "!sum(" ~> twoExprList <~ ")" ^^ {
    case start ~ end => s"\\sum_{$start}{$end}"
  }

  def prodMacro: Parser[String] = "!prod(" ~> twoExprList <~ ")" ^^ {
    case start ~ end => s"\\prod_{$start}{$end}"
  }

  def integralMacro: Parser[String] = "!integral(" ~> twoExprList <~ ")" ^^ {
    case start ~ end => s"\\int_{$start}{$end}"
  }

  def limitMacro: Parser[String] = "!limit(" ~> twoExprList <~ ")" ^^ {
    case variable ~ bound => s"\\lim_{$variable \\to $bound}"
  }

  def sqrtMacro: Parser[String] = "!sqrt(" ~> spacedExpr <~ ")" ^^ {
    case root => s"\\sqrt{$root}"
  }

  def matrixMacro: Parser[String] =
    "!matrix(" ~> (whiteSpace.? ~> exprList <~ whiteSpace.?) ~ (";" ~> whiteSpace.? ~> exprList <~ whiteSpace.?).* <~ ")" ^^ {
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

  def casesMacro: Parser[String] =
    "!cases(" ~>
      (whiteSpace.? ~> twoExprList <~ whiteSpace.?) ~ ("," ~> whiteSpace.? ~> twoExprList <~ whiteSpace.?).* <~ ")" ^^ {
      case head ~ tail =>
        val list = head :: tail
        val casesLines = ("" /: list)(_ + _ + "\\\\")
        "\\left{" + casesLines
    }
}
