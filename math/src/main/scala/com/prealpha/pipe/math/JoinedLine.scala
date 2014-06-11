package com.prealpha.pipe.math

private[math] class JoinedLine private (
    private val line: String,
    private val breaks: Set[Int]) {
  def this(line: String) = this(line, Set())

  def offset(index: Int): (Int, Int) = {
    val priorBreaks = breaks filter (_ <= index)
    val line = priorBreaks.size + 1
    val col = index - priorBreaks.reduceOption(_ max _).getOrElse(0) + 1
    (line, col)
  }

  def +(other: JoinedLine): JoinedLine = {
    assert(this.line.endsWith("\\"))
    val newLine = this.line.dropRight(1) + " " + other.line
    val newBreaks = this.breaks ++ other.breaks + line.length
    new JoinedLine(newLine, newBreaks)
  }

  override def toString: String = line
}
