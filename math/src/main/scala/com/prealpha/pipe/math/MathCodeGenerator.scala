package com.prealpha.pipe.math

private[math] object MathCodeGenerator {
  def generate(expr: MathExpr): String = expr match {
    case Chunk(s) => s
    case Symbol(s) => "\\" + s
    case Comment(s) => s"&& \\text{$s}"
    case Align(o) => "&" + generate(o)
    case Paren(xs) =>
      val contents = xs map generate mkString " "
      s"\\left( $contents \\right)"
    case m: Macro => genMacro(m)
    case m: SuperMacro => genSuperMacro(m)
    case SuperScript(normal, over) =>
      val normalStr = generate(normal)
      val overStr = generateDroppingParens(over)
      s"{$normalStr}^{$overStr}"
    case SubScript(normal, under) =>
      val normalStr = generate(normal)
      val underStr = generateDroppingParens(under)
      s"{$normalStr}_{$underStr}"
    case OverDiv(numer, denom) =>
      val numerStr = generateDroppingParens(numer)
      val denomStr = generateDroppingParens(denom)
      s"\\dfrac{$numerStr}{$denomStr}"
    case SideDiv(numer, denom) =>
      val numerStr = generate(numer)
      val denomStr = generate(denom)
      s"$numerStr / $denomStr"
  }

  private def generateDroppingParens(expr: MathExpr): String = expr match {
    case Paren(xs) =>
      xs map generate mkString " "
    case _ =>
      generate(expr)
  }

  private def genMacro(m: Macro): String = {
    val easyMap = Map("sum" -> "sum", "prod" -> "prod",
      "product" -> "prod",
      "integral" -> "int", "int" -> "int")

    def isActuallySuper(name: String): Boolean = {
        val superNames = Set("cases", "matrix")
        superNames.contains(name) || name.endsWith("matrix")
    }

    (m.name, m.c.map(_ map generate mkString " ")) match {
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

    (m.name, m.c.map(_.map(_ map generate mkString " "))) match {
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
