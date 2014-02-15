package com.prealpha.pipe

trait InlineModifier {
  def identifier: String

  def process(contents: String): String
}




