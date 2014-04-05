import sbt._
import sbt.Keys._
import xerial.sbt.Pack._

import scala.scalajs.sbtplugin._
import ScalaJSPlugin._

object Build extends sbt.Build {

    val commonSettings = Defaults.defaultSettings ++ Seq(
        scalaVersion := "2.11.0-M8",
        version := "0.1.0"
    )

    lazy val scalajs_parser = RootProject(uri("git://github.com/sjrd/scala-parser-combinators.git"))

    lazy val root = Project(
        id = "vulcan",
        base = file("."),
        settings = scalaJSSettings ++ commonSettings ++ packSettings ++
        Seq(
           packMain := Map("vulcan" -> "com.prealpha.pipe.blocks.generators.latex.LatexDocument")
        )

    ).dependsOn(math, blocks, scalajs_parser).aggregate(math, blocks)

    lazy val math = Project(
        id = "math",
        base = file("math"),
        settings = scalaJSSettings ++ commonSettings ++ Seq(
            libraryDependencies += "org.xerial" % "xerial-core" % "3.2.1",
            libraryDependencies += "org.scalatest" %% "scalatest" % "latest.integration"
        )
    ) dependsOn(scalajs_parser)

    lazy val blocks = Project(
        id = "blocks",
        base = file("blocks"),
        settings = scalaJSSettings ++ commonSettings ++ Seq(
            libraryDependencies += "org.xerial" % "xerial-core" % "3.2.1",
            libraryDependencies += "org.scalatest" %% "scalatest" % "latest.integration"
        )
    ) dependsOn(math, scalajs_parser)
}
