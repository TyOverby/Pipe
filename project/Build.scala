import sbt.Keys._
import sbt._
import xerial.sbt.Pack._

import scala.scalajs.sbtplugin._
import ScalaJSPlugin._

object Build extends sbt.Build {
  val commonSettings = Defaults.coreDefaultSettings ++ Seq(
    scalaVersion := "2.11.0",
    version := "0.4.2"
  )

  lazy val root = Project(
    id = "vulcan",
    base = file("."),
    settings = commonSettings ++ packSettings ++
      Seq(
        packMain := Map("vulcan" -> "com.prealpha.pipe.document.EntryPoint")
      )
  ).dependsOn(math, document).aggregate(math, document)


  lazy val math = Project(
    id = "math",
    base = file("math"),
    settings = scalaJSSettings ++ commonSettings ++ Seq(
      libraryDependencies += "org.scala-lang.modules" %% "scala-parser-combinators" % "1.0.1",
      libraryDependencies += "org.scalatest" % "scalatest_2.11" % "latest.integration" % "test",
      libraryDependencies += "org.xerial" % "xerial-core" % "3.2.1",
      libraryDependencies += "org.scalajs" %%% "scala-parser-combinators" % "1.0.2-SNAPSHOT"
    )
  )

  lazy val document = Project(
    id = "document",
    base = file("document"),
    settings = commonSettings ++ Seq(
      libraryDependencies += "org.scala-lang.modules" %% "scala-parser-combinators" % "1.0.1",
      libraryDependencies += "org.scalatest" % "scalatest_2.11" % "latest.integration" % "test",
      libraryDependencies += "org.xerial" % "xerial-core" % "3.2.1"
    )
  ).dependsOn(math)
}
