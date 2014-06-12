package com.prealpha.pipe

import scala.collection.immutable.WrappedString

package object math {
  implicit def logicalLineAsString(ll: LogicalLine): WrappedString = ll.toString()
}
