package com.prealpha.pipe

import scala.collection.immutable.WrappedString

package object math {
  implicit def joinedLine2String(jl: JoinedLine): WrappedString = jl.toString()
}
