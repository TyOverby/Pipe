package com.prealpha.pipe.pipemode

trait InlineModifier {
  def identifier: String

  def process(contents: String): String
}




