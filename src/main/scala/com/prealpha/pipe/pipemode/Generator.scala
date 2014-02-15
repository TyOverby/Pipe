package com.prealpha.pipe.pipemode

case class CompileContext(generators: List[BlockGenerator],
                          settings: Map[Class[_],Map[String, String]] = Map())


case class ResultContext()

object EmptyResultContext extends ResultContext()

trait BlockGenerator {
  def captures(block: Block)(implicit ctx: CompileContext): Boolean
  def produce(block: Block)(implicit ctx: CompileContext): (String, ResultContext)

  final def compile(block: Block)(implicit ctx: CompileContext) : (String, ResultContext) = {
    val matching = ctx.generators.filter(_.captures(block)(ctx))
    if (matching.isEmpty) {
      throw new Exception(s"Trying to find a block Generator that matches ${block.toString} failed")
    }

    if (matching.size > 1) {
      System.err.println(s"Multiple block Generators (${matching.toString()}) match ${block.toString()}. " +
      s"Going with ${matching.head.toString}")
    }

    matching.head.produce(block)(ctx)
  }

  final def merge(results: Seq[(String, ResultContext)]): (String, ResultContext) = {
    val strMerge = results.map(_._1).mkString("\n")
    val resultMerge = EmptyResultContext
    (strMerge, resultMerge)
  }
}

