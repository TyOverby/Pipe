organization := Common.organization

name := "Pipe"

version := Common.version

scalaVersion := Common.scalaVersion

lazy val math = project in file("math")

lazy val blocks = project in file("blocks") dependsOn(math)
