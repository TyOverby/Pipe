package com.prealpha.pipe.math.rewrite

import com.prealpha.pipe.math.ParseException

object CodeGen {
  def genEntire(exprs: Seq[MathExpr]): String = {
    val sb = new StringBuilder
    genMulti(exprs)(sb)
    sb.toString()
  }
  def genMulti(exprs: Seq[MathExpr])(implicit builder: StringBuilder) {
    if (exprs.isEmpty) {
      return
    }
    exprs.init.foreach(e => {
      genSingle(e)
      builder.append(" ")
    })

    genSingle(exprs.last)
  }

  def genSingle(expr: MathExpr)(implicit sb: StringBuilder) {
    expr match {
      case Chunk(s) => sb ++= s
      case Symbol(s) => sb ++= "\\" ++= s
      case Paren(xs) =>
        sb ++= "\\left( "
        genMulti(xs)
        sb ++= " \\right)"
      case m: Macro => sb ++= genMacro(m)
      case m: SuperMacro => sb ++= genSuperMacro(m)
      case SuperScript(normal, Paren(overs)) =>
        genSingle(normal)
        sb ++= "^{"
        genMulti(overs)
        sb ++= "}"
      case SuperScript(normal, over) =>
        genSingle(normal)
        sb ++= "^{"
        genSingle(over)
        sb ++= "}"
      case SubScript(normal, Paren(unders)) =>
        genSingle(normal)
        sb ++= "_{"
        genMulti(unders)
        sb ++= "}"
      case SubScript(normal, under) =>
        genSingle(normal)
        sb ++= "_{"
        genSingle(under)
        sb ++= "}"
      case OverDiv(Paren(xs), Paren(ys)) =>
        sb ++= "\\dfrac{"
        genMulti(xs)
        sb ++= "}{"
        genMulti(ys)
        sb ++= "}"
      case OverDiv(Paren(xs), denom) =>
        sb ++= "\\dfrac{"
        genMulti(xs)
        sb ++= "}{"
        genSingle(denom)
        sb ++= "}"
      case OverDiv(numer, Paren(ys)) =>
        sb ++= "\\dfrac{"
        genSingle(numer)
        sb ++= "}{"
        genMulti(ys)
        sb ++= "}"
      case OverDiv(numer, denom) =>
        sb ++= "\\dfrac{"
        genSingle(numer)
        sb ++= "}{"
        genSingle(denom)
        sb ++= "}"
      case SideDiv(numer, denom) =>
        genSingle(numer)
        sb ++= " / "
        genSingle(denom)
    }
  }

  def genMacro(m: Macro): String = {
    val easyMap = Map("sum" -> "sum", "prod" -> "prod", "integral" -> "int", "int" -> "int")
    val actuallySuper = Set("cases", "matrix")

    (m.name, m.c.map(genEntire)) match {
      case ("sqrt", List(contents)) => s"\\sqrt$contents"

      case (s, List()) if easyMap.contains(s) => s"\\${easyMap(s)}"
      case (s, List(lower)) if easyMap.contains(s) => s"\\${easyMap(s)}_{$lower}"
      case (s, List(lower, upper)) if easyMap.contains(s) => s"\\${easyMap(s)}_{$lower}{$upper}"

      case ("limit", List())  => "\\lim"
      case ("limit", List(under)) => s"\\lim_{$under}"
      case ("limit", List(varx, bound)) => s"\\lim_{$varx \\to $bound}"

      case (name, _) if actuallySuper.contains(name) => genSuperMacro(SuperMacro(name, Seq(m.c)))
    }
  }

  def genSuperMacro(m: SuperMacro): String = {
    (m.name, m.c.map(_.map(genEntire))) match {
      case ("cases", cases) =>
        if (cases.exists(_.length != 2))
          throw new ParseException("Incorrect usage of cases macro. " +
            "Contains an argument list that is not 2 arguments long","","")

        cases.map(_.mkString(" & "))
             .mkString("\\begin{cases}\n", " \\", "\\end{cases}")
      case ("matrix", rows) =>
        val flatRows = rows.map(" " + _.mkString(" & "))
        val rowsStr = flatRows.mkString(" \\\\\n")
        val colCount = rows.map(_.length).max
        val colStr = "c" * colCount
        s"\\left( \\begin{array}{$colStr}\n$rowsStr\n\\end{array} \\right)"
    }
  }
}
