package com.prealpha.pipe.generators.latex

import org.scalatest._
import com.prealpha.pipe.{Block, BlocksParser}

class TableBlockTest extends FlatSpec with Matchers {
  def compile(b: Block): String = {
    val rb = new RootBlock
    rb.force(b)
  }

  def parse(s: String): Block = {
    BlocksParser.parse(s)
  }

  "TableBlock" should "parse the table from the Google Doc" in {
    val markup =
      """
        ||table
        |  : ------------- : +-----------+ : ----+ :
        |  : Tables        : Are           : Cool  :
        |  : ------------- : ------------- : ----- :
        |  : col 3 is      : right-aligned :  1600 :
        |  : col 2 is      : centered      :    12 :
        |  : zebra stripes : are neat      :     1 :
      """.stripMargin.trim
    compile(parse(markup)) should
      be (
        """
          |\begin{tabularx}{\linewidth}{lcr}
          |\hline
          |Tables        & Are           & Cool   \\
          |\hline
          |col 3 is      & right-aligned &  1600  \\
          |col 2 is      & centered      &    12  \\
          |zebra stripes & are neat      &     1  \\
          |\end{tabularx}
        """.stripMargin.trim)
  }

  it should "parse this" in {
    val markup1 =
      """
        |$A$ can be transformed to $B$ by subtracting two times the first column from the second.
        |
        |$B$ can be transformed to $C$ by subtracting the first row from the second.
        |
        |The following sequence of elementary (row) operations transforms $C$ into $I_3$:
        |
        ||table
        |  : +                                        : ++++++++++++++++++++++++++++++++++++++++++++ :
        |  : $!matrix(1, 0, 3; 0, -2, -2; 0, -3, -2)$ : Subtract the first row from the third.       :
        |  : $!matrix(1, 0, -3; 0, 1, 1; 0, -3, -2)$  : Multiply the second row by $-1/2$.           :
        |  : $!matrix(1, 0, -3; 0, 1, 1; 0, 0, 1)$    : Add three times the second row to the third. :
        |  : $!matrix(1, 0, -3; 0, 1, 0; 0, 0, 1)$    : Subtract the third row from the second.      :
        |  : $!matrix(1, 0, 0; 0, 1, 0; 0, 0, 1)$     : Add three times the third row to the first.  :
        |
      """.stripMargin.trim
    println(compile(parse(markup1)))

    val markup2 =
      """
        |$A$ can be transformed to $B$ by subtracting two times the first column from the second.
        |
        |$B$ can be transformed to $C$ by subtracting the first row from the second.
        |
        |The following sequence of elementary (row) operations transforms $C$ into $I_3$:
        |
        ||table
        |  | +--------------------------------------- | ++++++++++++++++++++++++++++++++++++++++++++ |
        |  | $!matrix(1, 0, 3; 0, -2, -2; 0, -3, -2)$ | Subtract the first row from the third.       |
        |  | ---------------------------------------- | -------------------------------------------- |
        |  | $!matrix(1, 0, -3; 0, 1, 1; 0, -3, -2)$  | Multiply the second row by $-1/2$.           |
        |  | ---------------------------------------- | -------------------------------------------- |
        |  | $!matrix(1, 0, -3; 0, 1, 1; 0, 0, 1)$    | Add three times the second row to the third. |
        |  | ---------------------------------------- | -------------------------------------------- |
        |  | $!matrix(1, 0, -3; 0, 1, 0; 0, 0, 1)$    | Subtract the third row from the second.      |
        |  | ---------------------------------------- | -------------------------------------------- |
        |  | $!matrix(1, 0, 0; 0, 1, 0; 0, 0, 1)$     | Add three times the third row to the first.  |
        |  | ---------------------------------------- | -------------------------------------------- |
        |
      """.stripMargin.trim
    println(compile(parse(markup2)))
  }
}
