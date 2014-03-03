package com.prealpha.pipe.math.rewrite

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
      case m: Macro => genMacro(m)
      case m: SuperMacro => genSuperMacro(m)
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

  def genMacro(m: Macro)(implicit builder: StringBuilder) {

  }

  def genSuperMacro(m: SuperMacro)(implicit builder: StringBuilder) {

  }
}
