package com.prealpha.pipe.math

import MathCompiler.{Failure, Result}

private[math] object MathPreprocessor {
  def preprocess(input: String): Seq[Result[LogicalLine]] = {
    join(input.trim.split("\n").zipWithIndex map {
      case (line, index) => new LogicalLine(line, index + 1)
    })
  }

  private def join(lines: Seq[LogicalLine]): Seq[Result[LogicalLine]] = lines match {
    case Seq(first, second, tail @ _ *) =>
      if (first.toString.endsWith("\\"))
        join((first + second) +: tail)
      else
        Right(first) +: join(second +: tail)
    case Seq(line) =>
      if (line.toString.endsWith("\\"))
        Seq(Left(Failure("preprocessor error: no lines remaining to join to", None, line.offset(line.toString.length - 1))))
      else
        Seq(Right(line))
    case Seq() =>
      Seq()
  }
}
