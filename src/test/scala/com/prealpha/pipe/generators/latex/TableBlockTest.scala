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
        |  : col 3 is      : right-aligned : $1600 :
        |  : col 2 is      : centered      :   $12 :
        |  : zebra stripes : are neat      :    $1 :
      """.stripMargin.trim
    compile(parse(markup)) should
      be (
        """
          |\begin{tabularx}{\linewidth}{lcr}
          |  \hline
          |  Tables & Are & Cool \\
          |  \hline
          |  col 3 is & right-aligned & $1600 \\
          |  col 2 is & centered & $12 \\
          |  zebra stripes & are neat & $1 \\
          |\end{tabularx}
        """.stripMargin.trim)
  }
}
