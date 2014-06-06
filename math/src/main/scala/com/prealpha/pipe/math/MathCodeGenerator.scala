package com.prealpha.pipe.math

private[math] object MathCodeGenerator {
  def genEntire(exprs: Seq[MathExpr]): String = {
    val sb = new StringBuilder
    genMulti(exprs)(sb)
    sb.toString()
  }

  private def genMulti(exprs: Seq[MathExpr])(implicit builder: StringBuilder) {
    if (exprs.isEmpty) {
      return
    }
    exprs.init.foreach {
      case Newline =>
        genSingle(Newline)
      case e =>
        genSingle(e)
        builder.append(" ")
    }

    genSingle(exprs.last)
  }

  private def genSingle(expr: MathExpr)(implicit sb: StringBuilder) {
    expr match {
      case Chunk(s) => sb ++= s
      case Symbol(s) => sb ++= "\\" ++= s
      case Comment(s) => sb ++= "&& " ++= "\\text{" ++= s ++= "}"
      case Align(o) => sb ++= "&"; genSingle(o)
      case Paren(xs) =>
        sb ++= "\\left( "
        genMulti(xs)
        sb ++= " \\right)"
      case m: Macro => sb ++= genMacro(m)
      case m: SuperMacro => sb ++= genSuperMacro(m)
      case SuperScript(normal, Paren(overs)) =>
        sb ++= "{"
        genSingle(normal)
        sb ++= "}^{"
        genMulti(overs)
        sb ++= "}"
      case SuperScript(normal, over) =>
        sb ++= "{"
        genSingle(normal)
        sb ++= "}^{"
        genSingle(over)
        sb ++= "}"
      case SubScript(normal, Paren(unders)) =>
        sb ++= "{"
        genSingle(normal)
        sb ++= "}_{"
        genMulti(unders)
        sb ++= "}"
      case SubScript(normal, under) =>
        sb ++= "{"
        genSingle(normal)
        sb ++= "}_{"
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
      case Newline =>
        sb ++= "\\\\\n"
    }
  }

  private def genMacro(m: Macro): String = {
    val easyMap = Map("sum" -> "sum", "prod" -> "prod",
      "product" -> "prod",
      "integral" -> "int", "int" -> "int")

    def isActuallySuper(name: String): Boolean = {
        val superNames = Set("cases", "matrix")
        superNames.contains(name) || name.endsWith("matrix")
    }

    (m.name, m.c.map(genEntire)) match {
      case ("sqrt", List(contents)) => s"\\sqrt{$contents}"
      case ("sqrt", _) => throw new ParseException("!sqrt(...) takes one argument", "", "")

      case (s, List()) if easyMap.contains(s) => s"\\${easyMap(s)}"
      case (s, List(lower)) if easyMap.contains(s) => s"\\${easyMap(s)}_{$lower}"
      case (s, List(lower, upper)) if easyMap.contains(s) => s"\\${easyMap(s)}_{$lower}{$upper}"
      case (s, _) if easyMap.contains(s) => throw new ParseException(s"!$s(...) takes either 0, 1, or 2 arguments.", "", "")

      case ("limit", List())  => "\\lim"
      case ("limit", List(under)) => s"\\lim_{$under}"
      case ("limit", List(varx, bound)) => s"\\lim_{$varx \\to $bound}"
      case ("limit", _) => throw new ParseException("!limit(...) takes either 0, 1, or 2 arguments.", "", "")

      case ("vector", List(contents)) => s"\\vec{$contents}"
      case ("vec", List(contents)) => s"\\vec{$contents}"

      case ("hat", List(contents)) => s"\\hat{$contents}"

      case ("floor", List(contents)) => s"\\left \\lfloor{$contents}\\right \\rfloor"
      case ("ceil", List(contents)) => s"\\left \\lceil{$contents}\\right \\rceil"

      case (name, _) if isActuallySuper(name) => genSuperMacro(SuperMacro(name, Seq(m.c)))

      case _ => throw new ParseException(s"No pattern found for macro ${m.name}", "", "")
    }
  }

  private def genSuperMacro(m: SuperMacro): String = {
    def matrixGen(ident: String, rows: Seq[Seq[String]]): String = {
      val flatRows = rows.map(_.mkString(" & "))
      val rowsStr = flatRows.mkString(" \\\\\n")
      s"\\begin{${ident}matrix}\n$rowsStr\n\\end{${ident}matrix}"
    }

    (m.name, m.c.map(_.map(genEntire))) match {
      case ("cases", cases) =>
        if (cases.exists(_.length != 2))
          throw new ParseException("Incorrect usage of cases macro. " +
            "Contains an argument list that is not 2 arguments long","","")

        cases.map(_.mkString(" & "))
             .mkString("\\begin{cases}\n", " \\\n", "\n\\end{cases}")
      case ("matrix", rows) => matrixGen("b", rows)
      case ("pmatrix", rows) => matrixGen("p", rows)
      case ("bmatrix", rows) => matrixGen("b", rows)
      case ("Bmatrix", rows) => matrixGen("B", rows)
      case ("vmatrix", rows) => matrixGen("v", rows)
      case ("Vmatrix", rows) => matrixGen("V", rows)
    }
  }
}
