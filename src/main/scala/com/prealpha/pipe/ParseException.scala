package com.prealpha.pipe

case class ParseException[T](msg: String, input: T, next: T) extends Exception("Parse failed with message: " + msg)
