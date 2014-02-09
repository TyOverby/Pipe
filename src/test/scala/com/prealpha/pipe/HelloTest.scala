package com.prealpha.pipe

import org.scalatest._

class HelloTest extends FlatSpec with Matchers {
  "A test" should "pass" in {
    true should be (true)
    false should not be (true)
  }
}
