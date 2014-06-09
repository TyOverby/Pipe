#!/bin/bash

git clone https://github.com/sjrd/scala-parser-combinators.git
cd scala-parser-combinators
git checkout scalajs
sbt publishLocal
cd ../
rm -rf scala-parser-combinators
