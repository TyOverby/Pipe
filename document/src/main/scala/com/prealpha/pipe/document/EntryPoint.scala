package com.prealpha.pipe.document

import com.prealpha.pipe.document.generators.latex.LatexCompiler
import scala.io.Source
import java.io.PrintWriter

object EntryPoint {
  def help: String =
    """
      | Vulcan
      |
      | Usage:
      |   vulcan
      |   vulcan (-i | --in | --input) <input_file> [(-o | --out | --output) <output_file>)]
      |   vulcan <input_file> [(-o | --out | --output) <output_file>]
      |
      | Options:
      |   -i --in  --input    Specify the input file.
      |   -o --out --output   Specify the output file.
      |   -h --help           Display this help
      |   -                   Read from standard input
      |
      | Examples:
      |   standard form
      |     vulcan -i input.vlcn -o output.latex
      |     vulcan input.vlcn -o output.latex
      |
      |   Read from standard input
      |     vulcan -o output.latex -
      |
      |   Read from standard input and write to standard output
      |     vulcan -
      |     vulcan
    """.stripMargin

  def main(args: Array[String]) {
    type OptMap = Map[String, String]
    def parseArgument(list: List[String]): OptMap = {
      def isSwitch(s: String): Boolean = s.startsWith("-")
      list match {
        case s :: _ if s == "-h" || s == "--help" =>
          System.out.println(help)
          System.exit(0)
          Map()
        case "-o" :: filename :: rest => Map("output" -> filename) ++ parseArgument(rest)
        case "--out" :: filename :: rest => Map("output" -> filename) ++ parseArgument(rest)
        case "--output" :: filename :: rest => Map("output" -> filename) ++ parseArgument(rest)

        case "-i" :: filename :: rest => Map("input" -> filename) ++ parseArgument(rest)
        case "--in" :: filename :: rest => Map("input" -> filename) ++ parseArgument(rest)
        case "--input" :: filename :: rest => Map("input" -> filename) ++ parseArgument(rest)
        case inputFile :: rest if !isSwitch(inputFile) => Map("input" -> inputFile) ++ parseArgument(rest)

        case "-" :: rest => Map("stdin" -> "true") ++ parseArgument(rest)
        case x :: rest if isSwitch(x) =>
          System.err.println(s"$x is not a valid switch")
          System.err.println(help)
          System.exit(1)
          Map()
        case Nil => Map()
      }
    }

    val options = parseArgument(args.toList)

    val input =
      (if (options.contains("input")) {
        Source.fromFile(options.get("input").get)
      } else {
        Source.fromInputStream(System.in)
      }).getLines().mkString("\n")

    val compiled = LatexCompiler.compile(input)

    if (options.contains("output")) {
      val file = options.get("output").get
      val writer = new PrintWriter(file)
      writer.write(compiled)
      writer.close()
    } else {
      println(compiled)
    }
  }
}
