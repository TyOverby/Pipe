package com.prealpha.pipe.math

import com.prealpha.pipe.math.MathCompiler.{Failure, Result}

private[math] object AlignmentValidator {
  def validateAlignment(alignOn: Option[MathExpr])(line: Seq[MathExpr]): Result[Seq[MathExpr]] = alignOn match {
    case Some(alignExpr) =>
      val aligners = line.zipWithIndex.filter {
        case (`alignExpr`, _) => true
        case _ => false
      }
      if (aligners.length == 1) {
        val index = aligners.head._2
        val replaced = line.slice(0, index) ++ (Align(alignExpr) +: line.slice(index + 1, line.length))
        Right(replaced)
      } else {
        Left(Failure("invalid aligner count", None, (1, 1)))
      }
    case None =>
      Right(line)
  }
}
