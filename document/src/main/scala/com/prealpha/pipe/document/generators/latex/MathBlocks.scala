package com.prealpha.pipe.document.generators.latex

import com.prealpha.pipe.document.{ParseError, Block}
import com.prealpha.pipe.document.generators._
import com.prealpha.pipe.math._

object EquationBlock extends BlockGenerator {
  def processAlign(maths: Seq[MathExpr], alignTo: MathExpr): Seq[MathExpr] =
    maths.map(a => processAlignOne(a, alignTo))


  def processAlignOne(math: MathExpr, alignTo: MathExpr): MathExpr = math match {
    case x if x == alignTo => Align(x)
    case Paren(xs) => Paren(processAlign(xs, alignTo))
    case Macro(n, o: Seq[_]) => Macro(n, o.map(a => processAlign(a, alignTo)))
    case SuperMacro(n, o: Seq[_]) => SuperMacro(n, o.map(_.map(a => processAlign(a, alignTo))))
    case a => a
  }

  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "equation"

  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    val args = block.argLine.split("\\s+").toList.filter(!_.isEmpty)
    val sb = new StringBuilder

    val numbered = args.contains("numbered")

    sb ++= (if (numbered) "\\begin{align}" else "\\begin{align*}") ++= "\n"

    // Parse the alignment out of the block argument
    val alignOn: MathExpr = if (args.isEmpty) Never else MathParser.tryParse(args(0)).getOrElse(Seq(Never))(0)

    // group lines that are grouped together
    val groupedLines =
      block.childLines
        .map(_.trim)
        .filter(!_.isEmpty)
        .zipWithIndex
        .foldLeft(List[(String, Int)]()) {
        case (first :: rest, line) if first._1.endsWith("\\") => (first._1.init + line._1, first._2) :: rest
        case (list, line) => line :: list
      }.reverse

    // Parse and insert alignment into the equation
    val alignedLines = for ((lineStr, lineNum) <- groupedLines) yield {
      MathParser.tryParse(lineStr) match {
        case scala.util.Success(value) => (processAlign(value, alignOn), lineNum)
        case scala.util.Failure(e) => throw new Exception(e.getMessage + "\n on line: \n" + lineStr)
      }
    }

    val compiledLines =
      for ((line, mathLineNum) <- alignedLines)
      yield {
        try {
          CodeGen.genEntire(line)
        } catch {
          case ex: ParseException[_] => throw ex.copy(msg = ex.msg + s"on line ${block.lineNum + mathLineNum}")
        }
      }

    sb.append(compiledLines.mkString(" \\\\\n"))

    sb ++= "\n"
    sb ++= (if (numbered) "\\end{align}" else "\\end{align*}")

    (sb.toString(), ResultContext(Set("\\usepackage{amsmath}")))
  }
}

object MathBlock extends BlockGenerator {
  override def captures(block: Block)(implicit ctx: CompileContext): Boolean =
    block.instance == "math"

  override def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext) = {
    def parseInline(s: String): (String, ResultContext) = {
      val isb = new StringBuilder
      isb.append("$")
        .append(CodeGen.genEntire(MathParser.tryParse(s).get))
        .append("$")
      (isb.toString(), ResultContext(Set("amsmath")))
    }

    val argline = if (block.argLine.trim.length != 0)
      List(parseInline(block.argLine))
    else Nil

    val children = block.childBlocks.map({
      case b@Block("_text", _, _, _, _, _) => {
        merge(b.childLines.map(parseInline))
      }
      case b@Block("equation", _, _, _, _, _) => compile(b)
      case x => throw new BlockException(x, "The |equation is allowd inside of |math")
    })

    merge(argline ++ children)
  }
}
