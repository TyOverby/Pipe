package com.prealpha.pipe.math

private[math] sealed trait MathExpr

private[math] case class Chunk(contents: String) extends MathExpr
private[math] case class Symbol(name: String) extends MathExpr
private[math] case class Paren(c: Seq[MathExpr]) extends MathExpr
private[math] case class Macro(name: String, c: Seq[Seq[MathExpr]]) extends MathExpr
private[math] case class SuperMacro(name: String, c: Seq[Seq[Seq[MathExpr]]]) extends MathExpr
private[math] case class SuperScript(normal: MathExpr, over: MathExpr) extends MathExpr
private[math] case class SubScript(normal: MathExpr, under: MathExpr) extends MathExpr
private[math] case class OverDiv(numer: MathExpr, denom: MathExpr) extends MathExpr
private[math] case class SideDiv(numer: MathExpr, denom: MathExpr) extends MathExpr
private[math] case class Align(nextTo: MathExpr) extends MathExpr
private[math] case class Comment(text: String) extends MathExpr
