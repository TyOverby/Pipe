package com.prealpha.pipe

import scala.util.parsing.combinator.RegexParsers

object MathParser extends RegexParsers {
  def apply(input: String): Option[String] = parse(math, input) match {
    case Success(result, next) => Some(result)
    case _ => None
  }

  override def skipWhitespace = false

  def math: Parser[String] = expr.+ ^^ {
    case list => ("" /: list)(_ + _)
  }

  def expr: Parser[String] = notDivideExpr | divideExpr

  def notDivideExpr: Parser[String] = parenExpr | symbol | macro_ | normalExpr

  def spacedExpr: Parser[String] = whiteSpace.? ~> expr <~ whiteSpace.?
  
  def normalExpr: Parser[String] = "[^\\s/():!,;]+".r
  
  def parenExpr: Parser[String] = "(" ~> whiteSpace.? ~> expr <~ whiteSpace.? <~ ")"

  def divideExpr: Parser[String] = horizontalDivide | verticalDivide

  def slash: Parser[String] = whiteSpace.? ~> "/" <~ whiteSpace.?

  def horizontalDivide: Parser[String] =
    ((whiteSpace.? ~> parenExpr ~ slash ~ expr <~ whiteSpace.?) |
      (whiteSpace.? ~> notDivideExpr ~ slash ~ parenExpr <~ whiteSpace.?)) ^^ {
      case leftExpr ~ slash ~ rightExpr => "\\dfrac{" + leftExpr + "}{" + rightExpr + "}"
    }

  def verticalDivide: Parser[String] = whiteSpace.? ~> notDivideExpr ~ slash ~ expr <~ whiteSpace.? ^^ {
    case leftExpr ~ slash ~ rightExpr => leftExpr + slash + rightExpr
  }

  def symbol: Parser[String] = ":" ~> not(whiteSpace).* ^^ {
    case chars => "\\" + ("" /: chars)(_ + _)
  }

  def macro_ : Parser[String] = sumMacro | prodMacro | integralMacro | limitMacro | sqrtMacro | matrixMacro | casesMacro

  def exprList: Parser[List[String]] = spacedExpr ~ ("," ~> spacedExpr).* ^^ {
    case head ~ tail => head :: tail
  }

  def twoExprList: Parser[String ~ String] = (spacedExpr <~ ",") ~ spacedExpr

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
        case Nil => " \\\\ "
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
