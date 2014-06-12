package com.prealpha.pipe.math

import MathCompiler.{Failure, Result}

private[math] object MathPreprocessor {
  def preprocess(input: String): Result[Seq[LogicalLine]] = {
    join(input.trim.split("\n") map (new LogicalLine(_)))
  }

  private def join(lines: Seq[LogicalLine]): Result[Seq[LogicalLine]] = lines match {
    case Seq(first, second, tail @ _ *) =>
      if (first.endsWith("\\"))
        join((first + second) +: tail)
      else
        join(second +: tail).right map (first +: _)
    case Seq(line) =>
      if (line.endsWith("\\"))
        Left(Failure("preprocessor error: no lines remaining to join to", None, line.offset(line.length - 1)))
      else
        Right(Seq(line))
    case Seq() =>
      Right(Seq())
  }
}
