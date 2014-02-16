package com.prealpha.pipe.pipemode

case class InlineContext(modifiers: List[InlineModifier])

trait InlineModifier {
  def identifier: String

  def process(contents: String): String
}

object InlineModifier {
  def inlineReplace(b: Block)(implicit ctx: InlineContext): Block = ???
    // Search / Replace in the arguments list
}
