import sbt._
import sbt.Keys._
import xerial.sbt.Pack._

import scala.scalajs.sbtplugin._
import ScalaJSPlugin._

object Build extends sbt.Build {

    val commonSettings = Defaults.defaultSettings ++ scalaJSSettings ++ Seq(
        scalaVersion := "2.10.3",
        version := "0.1.0"
    )

    lazy val root = Project(
        id = "vulcan",
        base = file("."),
        settings = commonSettings ++ packSettings ++
        Seq(
            packMain := Map("vulcan" -> "com.prealpha.pipe.blocks.generators.latex.LatexDocument")
        )
    ).dependsOn(math, blocks).aggregate(math, blocks)

    lazy val math = Project(
        id = "math",
        base = file("math"),
        settings = commonSettings ++ Seq(
            libraryDependencies += "org.xerial" % "xerial-core" % "3.2.1",
            libraryDependencies += "org.scalatest" % "scalatest_2.10" % "latest.integration" % "test"
        )
    )

    lazy val blocks = Project(
        id = "blocks",
        base = file("blocks"),
        settings = commonSettings ++ Seq(
            libraryDependencies += "org.xerial" % "xerial-core" % "3.2.1",
            libraryDependencies += "org.scalatest" % "scalatest_2.10" % "latest.integration" % "test"
        )
    ) dependsOn(math)
}
