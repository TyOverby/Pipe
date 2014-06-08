Pipe [![Build Status](https://travis-ci.org/TyOverby/Pipe.svg?branch=master)](https://travis-ci.org/TyOverby/Pipe)
====

[Download Build](https://github.com/TyOverby/Pipe/releases)


##Usage
      vulcan
      vulcan (-i | --in | --input) <input_file> [(-o | --out | --output) <output_file>)]
      vulcan <input_file> [(-o | --out | --output) <output_file>]

## Options
      -i --in  --input    Specify the input file.
      -o --out --output   Specify the output file.
      -h --help           Display this help
      -                   Read from standard input

## Examples
### standard form
    vulcan -i input.vlcn -o output.latex
    vulcan input.vlcn -o output.latex

###Read from standard input
    vulcan -o output.latex -

###Read from standard input and write to standard output
    vulcan -
    vulcan

Pipe / Scalajs
====

# To Build

    sbt packageJS

# To Use

The compiled files for math mode (the only mode working right now) are
in ./math/target/scala-2.11.0-M8/.
