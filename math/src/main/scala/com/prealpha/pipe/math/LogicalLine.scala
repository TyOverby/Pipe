package com.prealpha.pipe.math

private[math] class LogicalLine private (
    private val line: String,
    private val breaks: Set[Int],
    private val startingAt: Int) {
  def this(line: String, startingAt: Int) = this(line, Set(), startingAt)

  def offset(index: Int): (Int, Int) = {
    val priorBreaks = breaks filter (_ <= index)
    val line = priorBreaks.size + startingAt
    val col = index - (priorBreaks reduceOption (_ max _)).getOrElse(0) + 1
    (line, col)
  }

  def +(other: LogicalLine): LogicalLine = {
    assert(this.line.endsWith("\\"))
    val newLine = this.line.dropRight(1) + "\n" + other.line
    val newBreaks = this.breaks ++ other.breaks + line.length
    new LogicalLine(newLine, newBreaks, this.startingAt)
  }

  override def toString: String = line
}
