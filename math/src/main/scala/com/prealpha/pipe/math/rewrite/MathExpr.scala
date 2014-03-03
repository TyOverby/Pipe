package com.prealpha.pipe.math.rewrite

sealed trait MathExpr

case class Chunk(contents: String) extends MathExpr
case class Symbol(name: String) extends MathExpr
case class Paren(c: Seq[MathExpr]) extends MathExpr
case class Macro(name: String, c: Seq[Seq[MathExpr]]) extends MathExpr
case class SuperMacro(name: String, c: Seq[Seq[Seq[MathExpr]]]) extends MathExpr
case class SuperScript(normal: MathExpr, over: MathExpr) extends MathExpr
case class SubScript(normal: MathExpr, under: MathExpr) extends MathExpr
case class OverDiv(numer: MathExpr, denom: MathExpr) extends MathExpr
case class SideDiv(numer: MathExpr, denom: MathExpr) extends MathExpr

