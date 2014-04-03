import sbt._
import sbt.Keys._
import xerial.sbt.Pack._

object Build extends sbt.Build {

    val commonSettings = Defaults.defaultSettings ++ Seq(
        scalaVersion := "2.10.3",
        version := "0.1.0"
    )

    lazy val root = Project(
        id = "vulcan",
        base = file("."),
        settings = commonSettings ++ packSettings ++
        Seq(
            packMain := Map("vulcan" -> "com.prealpha.pipe.document.generators.latex.LatexDocument")
        )
    ).dependsOn(math, document).aggregate(math, document)

    lazy val math = Project(
        id = "math",
        base = file("math"),
        settings = commonSettings ++ Seq(
            libraryDependencies += "org.xerial" % "xerial-core" % "3.2.1",
            libraryDependencies += "org.scalatest" % "scalatest_2.10" % "latest.integration" % "test"
        )
    )

    lazy val document = Project(
        id = "document",
        base = file("document"),
        settings = commonSettings ++ Seq(
            libraryDependencies += "org.xerial" % "xerial-core" % "3.2.1",
            libraryDependencies += "org.scalatest" % "scalatest_2.10" % "latest.integration" % "test"
        )
    ) dependsOn(math)
}
