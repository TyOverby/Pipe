package com.prealpha.pipe

import scala.util.parsing.combinator.RegexParsers

object MathParser extends RegexParsers {
  def apply(input: String): ParseResult[String] = parse(expr, input)

  override def skipWhitespace = false

  def expr: Parser[String] = normalExpr | parenExpr | divideExpr | symbol | macro_

  def spacedExpr: Parser[String] = whiteSpace.? ~> expr <~ whiteSpace.?
  
  def normalExpr: Parser[String] = "[^\\s/():!]*".r
  
  def parenExpr: Parser[String] = "(" ~> whiteSpace.? ~> expr <~ whiteSpace.? <~ ")"

  def divideExpr: Parser[String] = verticalDivide | horizontalDivide

  def slash: Parser[String] = whiteSpace.? ~> "/" <~ whiteSpace.?

  def verticalDivide: Parser[String] = whiteSpace.? ~> normalExpr ~ slash ~ normalExpr <~ whiteSpace.? ^^ {
    case leftExpr ~ slash ~ rightExpr => leftExpr + slash + rightExpr
  }

  def horizontalDivide: Parser[String] =
    ((whiteSpace.? ~> parenExpr ~ slash ~ expr <~ whiteSpace.?) |
     (whiteSpace.? ~> expr ~ slash ~ parenExpr <~ whiteSpace.?)) ^^ {
    case leftExpr ~ slash ~ rightExpr => "\\dfrac{" + leftExpr + "}{" + rightExpr + "}"
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

  def matrixMacro: Parser[String] = "!matrix(" ~> whiteSpace.? ~> mrow.* <~ whiteSpace.? <~ ")" ^^ {
    case rows =>
      val unzipped = rows.unzip
      val rowsStr = ("" /: unzipped._1)(_ + _)
      val colCount: Int = unzipped._2.max
      val colStr = "c" * colCount
      s"\\left( \\begin{array}{$colStr} \\\\ $rowsStr \\end{array} \\right)"
  }

  def mrow: Parser[(String, Integer)] = whiteSpace.? ~> "!mrow(" ~> exprList <~ ")" <~ whiteSpace.? ^^ {
    case Nil => ("\\\\", 0)
    case head :: tail =>
      val rowStr = head + ("" /: tail)(_ + " & " + _) + "\\\\"
      (rowStr, tail.length + 1)
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
