package com.prealpha.pipe.math

import com.prealpha.pipe.math.MathCompiler.{Failure, Result}

private[math] object MathCodeGenerator {
  def generate(expr: MathExpr): Result[String] = generate(expr, dropParens = false)

  private def generate(expr: MathExpr, dropParens: Boolean): Result[String] = expr match {
    case Chunk("...") => Right("\\hdots")
    case Chunk("*") => Right("\\times")
    case Chunk("!=") => Right("\\neq")
    case Chunk(">=") => Right("\\geq")
    case Chunk("<=") => Right("\\leq")
    case Chunk(s) => Right(s)

    case Symbol("not") => Right("\\lnot")
    case Symbol("or") => Right("\\lor")
    case Symbol("and") => Right("\\land")
    case Symbol("xor") => Right("\\oplus")
    case Symbol(s) => Right("\\" + s)

    case Comment(s) =>
      Right(s"&& \\text{$s}")

    case Align(o) =>
      generate(o).right map { aligner =>
        s"&$aligner"
      }

    case Wrapper(xs, left, right) =>
      val contents = xs map generate
      if (contents forall (_.isRight)) {
        val result = contents map (_.right.get) mkString " "
        if (dropParens)
          Right(result)
        else
          Right(s"\\left$left $result \\right$right")
      } else {
        (contents filter (_.isLeft)).head
      }

    case m: Macro =>
      genMacro(m)

    case m: SuperMacro =>
      genSuperMacro(m)

    case SuperScript(normal, over) =>
      generate(normal).right flatMap { normalStr =>
        generate(over, dropParens = true).right map { overStr =>
          s"{$normalStr}^{$overStr}"
        }
      }

    case SubScript(normal, under) =>
      generate(normal).right flatMap { normalStr =>
        generate(under, dropParens = true).right map { underStr =>
          s"{$normalStr}_{$underStr}"
        }
      }

    case OverDiv(numer, denom) =>
      generate(numer, dropParens = true).right flatMap { numerStr =>
        generate(denom, dropParens = true).right map { denomStr =>
          s"\\dfrac{$numerStr}{$denomStr}"
        }
      }

    case SideDiv(numer, denom) =>
      generate(numer).right flatMap { numerStr =>
        generate(denom).right map { denomStr =>
          s"$numerStr / $denomStr"
        }
      }
  }

  private def genMacro(m: Macro): Result[String] = {
    val easyMap = Map("sum" -> "sum", "prod" -> "prod",
      "product" -> "prod",
      "integral" -> "int", "int" -> "int")

    def isActuallySuper(name: String): Boolean = {
      val superNames = Set("cases", "matrix")
      superNames.contains(name) || name.endsWith("matrix")
    }

    val results = m.c map (_ map generate)
    if (results forall (_ forall (_.isRight))) {
      (m.name, results map (_ map (_.right.get) mkString " ")) match {
        case ("sqrt", List(contents)) =>
          Right(s"\\sqrt{$contents}")
        case ("sqrt", _) =>
          Left(Failure("!sqrt(...) takes one argument", None, (m.pos.line, m.pos.column)))

        case (s, List()) if easyMap.contains(s) =>
          Right(s"\\${easyMap(s)}")
        case (s, List(lower)) if easyMap.contains(s) =>
          Right(s"\\${easyMap(s)}_{$lower}")
        case (s, List(lower, upper)) if easyMap.contains(s) =>
          Right(s"\\${easyMap(s)}_{$lower}^{$upper}")
        case (s, _) if easyMap.contains(s) =>
          Left(Failure(s"!$s(...) takes either 0, 1, or 2 arguments.", None, (m.pos.line, m.pos.column)))

        case ("limit", List()) =>
          Right("\\lim")
        case ("limit", List(under)) =>
          Right(s"\\lim_{$under}")
        case ("limit", List(varx, bound)) =>
          Right(s"\\lim_{$varx \\to $bound}")
        case ("limit", _) =>
          Left(Failure("!limit(...) takes either 0, 1, or 2 arguments.", None, (m.pos.line, m.pos.column)))

        case ("vector", List(contents)) =>
          Right(s"\\vec{$contents}")
        case ("vec", List(contents)) =>
          Right(s"\\vec{$contents}")

        case ("hat", List(contents)) =>
          Right(s"\\hat{$contents}")

        case ("floor", List(contents)) =>
          Right(s"\\left \\lfloor{$contents}\\right \\rfloor")
        case ("ceil", List(contents)) =>
          Right(s"\\left \\lceil{$contents}\\right \\rceil")
        case ("set", elements) =>
          Right(s"\\left\\{ ${elements.mkString(", ")} \\right\\}")

        case (name, _) if isActuallySuper(name) =>
          genSuperMacro(SuperMacro(name, Seq(m.c)))

        case _ =>
          Left(Failure(s"No pattern found for macro ${m.name}", None, (m.pos.line, m.pos.column)))
      }
    } else {
      (results.flatten filter (_.isLeft)).head
    }
  }

  private def genSuperMacro(m: SuperMacro): Result[String] = {
    def matrixGen(ident: String, rows: Seq[Seq[String]]): Result[String] = {
      val flatRows = rows.map(_.mkString(" & "))
      val rowsStr = flatRows.mkString(" \\\\\n")
      Right(s"\\begin{${ident}matrix}\n$rowsStr\n\\end{${ident}matrix}")
    }

    val results = m.c map (_ map (_ map generate))
    if (results forall (_ forall (_ forall (_.isRight)))) {
      val contents = results map (_ map (_ map (_.right.get) mkString " "))
      (m.name, contents) match {
        case ("cases", cases) =>
          if (cases exists (_.length != 2))
            Left(Failure("Incorrect usage of cases macro; contains an argument list that is not 2 arguments long.", None, (m.pos.line, m.pos.column)))
          else
            Right((cases map (_ mkString " & ")).mkString("\\begin{cases}\n", " \\\n", "\n\\end{cases}"))
        case ("matrix", rows) => matrixGen("b", rows)
        case ("pmatrix", rows) => matrixGen("p", rows)
        case ("bmatrix", rows) => matrixGen("b", rows)
        case ("Bmatrix", rows) => matrixGen("B", rows)
        case ("vmatrix", rows) => matrixGen("v", rows)
        case ("Vmatrix", rows) => matrixGen("V", rows)
      }
    } else {
      ((results map (_.flatten)).flatten filter (_.isLeft)).head
    }
  }
}
