/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Align = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.nextTo$1 = null
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Align;
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.nextTo__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.nextTo$1
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_Align = (function(nextTo) {
  return new ScalaJS.c.com_prealpha_pipe_math_Align().init___Lcom_prealpha_pipe_math_MathExpr(nextTo)
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.copy$default$1__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.nextTo__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.productPrefix__T = (function() {
  return "Align"
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.nextTo__Lcom_prealpha_pipe_math_MathExpr();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_Align(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_math_Align(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Align$1 = ScalaJS.as.com_prealpha_pipe_math_Align(x$1);
      return (ScalaJS.anyRefEqEq(this.nextTo__Lcom_prealpha_pipe_math_MathExpr(), Align$1.nextTo__Lcom_prealpha_pipe_math_MathExpr()) && Align$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.init___Lcom_prealpha_pipe_math_MathExpr = (function(nextTo) {
  this.nextTo$1 = nextTo;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.nextTo = (function() {
  return this.nextTo__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.copy = (function(arg$1) {
  return this.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_Align(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.copy$default$1 = (function() {
  return this.copy$default$1__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.copy__Lcom_prealpha_pipe_math_MathExpr__ = (function(nextTo) {
  return this.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_Align(nextTo)
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.nextTo__ = (function() {
  return this.nextTo__Lcom_prealpha_pipe_math_MathExpr()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Align = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Align.prototype = ScalaJS.c.com_prealpha_pipe_math_Align.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Align = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_Align.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathExpr(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_Align.prototype = ScalaJS.c.com_prealpha_pipe_math_Align.prototype;
ScalaJS.is.com_prealpha_pipe_math_Align = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Align)))
});
ScalaJS.as.com_prealpha_pipe_math_Align = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Align(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Align")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Align = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Align)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Align = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Align(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Align;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Align = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Align: 0
}, false, "com.prealpha.pipe.math.Align", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_Align: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Align.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Align;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Chunk = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.contents$1 = null
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Chunk;
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.contents__T = (function() {
  return this.contents$1
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.copy__T__Lcom_prealpha_pipe_math_Chunk = (function(contents) {
  return new ScalaJS.c.com_prealpha_pipe_math_Chunk().init___T(contents)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.copy$default$1__T = (function() {
  return this.contents__T()
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.productPrefix__T = (function() {
  return "Chunk"
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.contents__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_Chunk(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_math_Chunk(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Chunk$1 = ScalaJS.as.com_prealpha_pipe_math_Chunk(x$1);
      return (ScalaJS.anyRefEqEq(this.contents__T(), Chunk$1.contents__T()) && Chunk$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.init___T = (function(contents) {
  this.contents$1 = contents;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.contents = (function() {
  return this.contents__T()
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.copy = (function(arg$1) {
  return this.copy__T__Lcom_prealpha_pipe_math_Chunk(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.copy$default$1 = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.copy__T__ = (function(contents) {
  return this.copy__T__Lcom_prealpha_pipe_math_Chunk(contents)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.contents__ = (function() {
  return this.contents__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Chunk = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Chunk.prototype = ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Chunk = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_Chunk.call(this);
  return this.init___T(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_Chunk.prototype = ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype;
ScalaJS.is.com_prealpha_pipe_math_Chunk = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Chunk)))
});
ScalaJS.as.com_prealpha_pipe_math_Chunk = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Chunk(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Chunk")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Chunk = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Chunk)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Chunk = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Chunk(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Chunk;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Chunk = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Chunk: 0
}, false, "com.prealpha.pipe.math.Chunk", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_Chunk: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Chunk.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Chunk;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_CodeGen$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_CodeGen$;
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genEntire__Lscala_collection_Seq__T = (function(exprs) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  this.genMulti__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__V(exprs, sb);
  return sb.toString__T()
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genMulti__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__V = (function(exprs, builder) {
  if (exprs.isEmpty__Z()) {
    return undefined
  };
  ScalaJS.as.scala_collection_IterableLike(exprs.init__O()).foreach__Lscala_Function1__V(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(builder$1) {
    return (function(e) {
      ScalaJS.modules.com_prealpha_pipe_math_CodeGen().genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(e, builder$1);
      return builder$1.append__T__Lscala_collection_mutable_StringBuilder(" ")
    })
  })(builder)));
  this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(ScalaJS.as.com_prealpha_pipe_math_MathExpr(exprs.last__O()), builder)
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V = (function(expr, sb) {
  var _$this = this;
  tailCallLoop: while (true) {
    var rc31 = false;
    var x8 = null;
    var rc32 = false;
    var x12 = null;
    var rc33 = false;
    var x17 = null;
    var x1 = expr;
    matchEnd34: {
      if (ScalaJS.is.com_prealpha_pipe_math_Chunk(x1)) {
        var x2 = ScalaJS.as.com_prealpha_pipe_math_Chunk(x1);
        var s = x2.contents__T();
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(s);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd34
      };
      if (ScalaJS.is.com_prealpha_pipe_math_Symbol(x1)) {
        var x3 = ScalaJS.as.com_prealpha_pipe_math_Symbol(x1);
        var s$2 = x3.name__T();
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("\\").$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(s$2);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd34
      };
      if (ScalaJS.is.com_prealpha_pipe_math_Comment(x1)) {
        var x4 = ScalaJS.as.com_prealpha_pipe_math_Comment(x1);
        var s$3 = x4.text__T();
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("&& ").$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("\\text{").$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(s$3).$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}");
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd34
      };
      if (ScalaJS.is.com_prealpha_pipe_math_Align(x1)) {
        var x5 = ScalaJS.as.com_prealpha_pipe_math_Align(x1);
        var o = x5.nextTo__Lcom_prealpha_pipe_math_MathExpr();
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("&");
        expr = o;
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd34
      };
      if (ScalaJS.is.com_prealpha_pipe_math_Paren(x1)) {
        var x6 = ScalaJS.as.com_prealpha_pipe_math_Paren(x1);
        var xs = x6.c__Lscala_collection_Seq();
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("\\left( ");
        _$this.genMulti__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__V(xs, sb);
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(" \\right)");
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd34
      };
      if (ScalaJS.is.com_prealpha_pipe_math_Macro(x1)) {
        var x28 = ScalaJS.as.com_prealpha_pipe_math_Macro(x1);
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(_$this.genMacro__Lcom_prealpha_pipe_math_Macro__T(x28));
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd34
      };
      if (ScalaJS.is.com_prealpha_pipe_math_SuperMacro(x1)) {
        var x29 = ScalaJS.as.com_prealpha_pipe_math_SuperMacro(x1);
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(_$this.genSuperMacro__Lcom_prealpha_pipe_math_SuperMacro__T(x29));
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd34
      };
      if (ScalaJS.is.com_prealpha_pipe_math_SuperScript(x1)) {
        rc31 = true;
        x8 = ScalaJS.as.com_prealpha_pipe_math_SuperScript(x1);
        var normal = x8.normal__Lcom_prealpha_pipe_math_MathExpr();
        var p7 = x8.over__Lcom_prealpha_pipe_math_MathExpr();
        if (ScalaJS.is.com_prealpha_pipe_math_Paren(p7)) {
          var x9 = ScalaJS.as.com_prealpha_pipe_math_Paren(p7);
          var overs = x9.c__Lscala_collection_Seq();
          sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("{");
          _$this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(normal, sb);
          sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}^{");
          _$this.genMulti__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__V(overs, sb);
          sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}");
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd34
        }
      };
      if (rc31) {
        var normal$2 = x8.normal__Lcom_prealpha_pipe_math_MathExpr();
        var over = x8.over__Lcom_prealpha_pipe_math_MathExpr();
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("{");
        _$this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(normal$2, sb);
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}^{");
        _$this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(over, sb);
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}");
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd34
      };
      if (ScalaJS.is.com_prealpha_pipe_math_SubScript(x1)) {
        rc32 = true;
        x12 = ScalaJS.as.com_prealpha_pipe_math_SubScript(x1);
        var normal$3 = x12.normal__Lcom_prealpha_pipe_math_MathExpr();
        var p11 = x12.under__Lcom_prealpha_pipe_math_MathExpr();
        if (ScalaJS.is.com_prealpha_pipe_math_Paren(p11)) {
          var x13 = ScalaJS.as.com_prealpha_pipe_math_Paren(p11);
          var unders = x13.c__Lscala_collection_Seq();
          sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("{");
          _$this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(normal$3, sb);
          sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}_{");
          _$this.genMulti__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__V(unders, sb);
          sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}");
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd34
        }
      };
      if (rc32) {
        var normal$4 = x12.normal__Lcom_prealpha_pipe_math_MathExpr();
        var under = x12.under__Lcom_prealpha_pipe_math_MathExpr();
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("{");
        _$this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(normal$4, sb);
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}_{");
        _$this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(under, sb);
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}");
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd34
      };
      if (ScalaJS.is.com_prealpha_pipe_math_OverDiv(x1)) {
        rc33 = true;
        x17 = ScalaJS.as.com_prealpha_pipe_math_OverDiv(x1);
        var p15 = x17.numer__Lcom_prealpha_pipe_math_MathExpr();
        var p16 = x17.denom__Lcom_prealpha_pipe_math_MathExpr();
        if (ScalaJS.is.com_prealpha_pipe_math_Paren(p15)) {
          var x18 = ScalaJS.as.com_prealpha_pipe_math_Paren(p15);
          var xs$2 = x18.c__Lscala_collection_Seq();
          if (ScalaJS.is.com_prealpha_pipe_math_Paren(p16)) {
            var x19 = ScalaJS.as.com_prealpha_pipe_math_Paren(p16);
            var ys = x19.c__Lscala_collection_Seq();
            sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("\\dfrac{");
            _$this.genMulti__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__V(xs$2, sb);
            sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}{");
            _$this.genMulti__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__V(ys, sb);
            sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}");
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd34
          }
        }
      };
      if (rc33) {
        var p20 = x17.numer__Lcom_prealpha_pipe_math_MathExpr();
        var denom = x17.denom__Lcom_prealpha_pipe_math_MathExpr();
        if (ScalaJS.is.com_prealpha_pipe_math_Paren(p20)) {
          var x22 = ScalaJS.as.com_prealpha_pipe_math_Paren(p20);
          var xs$3 = x22.c__Lscala_collection_Seq();
          sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("\\dfrac{");
          _$this.genMulti__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__V(xs$3, sb);
          sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}{");
          _$this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(denom, sb);
          sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}");
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd34
        }
      };
      if (rc33) {
        var numer = x17.numer__Lcom_prealpha_pipe_math_MathExpr();
        var p23 = x17.denom__Lcom_prealpha_pipe_math_MathExpr();
        if (ScalaJS.is.com_prealpha_pipe_math_Paren(p23)) {
          var x25 = ScalaJS.as.com_prealpha_pipe_math_Paren(p23);
          var ys$2 = x25.c__Lscala_collection_Seq();
          sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("\\dfrac{");
          _$this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(numer, sb);
          sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}{");
          _$this.genMulti__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__V(ys$2, sb);
          sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}");
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd34
        }
      };
      if (rc33) {
        var numer$2 = x17.numer__Lcom_prealpha_pipe_math_MathExpr();
        var denom$2 = x17.denom__Lcom_prealpha_pipe_math_MathExpr();
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("\\dfrac{");
        _$this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(numer$2, sb);
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}{");
        _$this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(denom$2, sb);
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}");
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd34
      };
      if (ScalaJS.is.com_prealpha_pipe_math_SideDiv(x1)) {
        var x27 = ScalaJS.as.com_prealpha_pipe_math_SideDiv(x1);
        var numer$3 = x27.numer__Lcom_prealpha_pipe_math_MathExpr();
        var denom$3 = x27.denom__Lcom_prealpha_pipe_math_MathExpr();
        _$this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(numer$3, sb);
        sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(" / ");
        expr = denom$3;
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd34
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    return undefined
  }
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genMacro__Lcom_prealpha_pipe_math_Macro__T = (function(m) {
  var easyMap = ScalaJS.as.scala_collection_immutable_Map(ScalaJS.modules.scala_Predef().Map__Lscala_collection_immutable_Map$().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("sum"), "sum"), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("prod"), "prod"), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("product"), "prod"), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("integral"), "int"), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("int"), "int")]), 1))));
  var actuallySuper = ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["cases", "matrix"]), 1))));
  var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(m.name__T(), m.c__Lscala_collection_Seq().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(exprs) {
      return ScalaJS.modules.com_prealpha_pipe_math_CodeGen().genEntire__Lscala_collection_Seq__T(exprs)
    })
  })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  if ((x1 !== null)) {
    var p2 = ScalaJS.as.java_lang_String(x1._1__O());
    var p3 = ScalaJS.as.scala_collection_Seq(x1._2__O());
    if (ScalaJS.anyRefEqEq("sqrt", p2)) {
      if (ScalaJS.is.scala_collection_immutable_List(p3)) {
        var x4 = ScalaJS.as.scala_collection_immutable_List(p3);
        var o53 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x4);
        if ((!o53.isEmpty__Z())) {
          if (((!ScalaJS.anyRefEqEq(o53.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o53.get__O()).lengthCompare__I__I(1) === 0))) {
            var contents = ScalaJS.as.java_lang_String(ScalaJS.as.scala_collection_LinearSeqOptimized(o53.get__O()).apply__I__O(0));
            return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\sqrt{", "}"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [contents])))
          }
        }
      }
    }
  };
  if ((x1 !== null)) {
    var p6 = ScalaJS.as.java_lang_String(x1._1__O());
    if (ScalaJS.anyRefEqEq("sqrt", p6)) {
      throw new ScalaJS.c.com_prealpha_pipe_math_ParseException().init___T__O__O("!sqrt(...) takes one argument", "", "")
    }
  };
  if ((x1 !== null)) {
    var s = ScalaJS.as.java_lang_String(x1._1__O());
    var p8 = ScalaJS.as.scala_collection_Seq(x1._2__O());
    if (ScalaJS.is.scala_collection_immutable_List(p8)) {
      var x9 = ScalaJS.as.scala_collection_immutable_List(p8);
      var o56 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x9);
      if ((!o56.isEmpty__Z())) {
        if (((!ScalaJS.anyRefEqEq(o56.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o56.get__O()).lengthCompare__I__I(0) === 0))) {
          if (easyMap.contains__O__Z(s)) {
            return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [easyMap.apply__O__O(s)])))
          }
        }
      }
    }
  };
  if ((x1 !== null)) {
    var s$2 = ScalaJS.as.java_lang_String(x1._1__O());
    var p11 = ScalaJS.as.scala_collection_Seq(x1._2__O());
    if (ScalaJS.is.scala_collection_immutable_List(p11)) {
      var x12 = ScalaJS.as.scala_collection_immutable_List(p11);
      var o58 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x12);
      if ((!o58.isEmpty__Z())) {
        if (((!ScalaJS.anyRefEqEq(o58.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o58.get__O()).lengthCompare__I__I(1) === 0))) {
          var lower = ScalaJS.as.java_lang_String(ScalaJS.as.scala_collection_LinearSeqOptimized(o58.get__O()).apply__I__O(0));
          if (easyMap.contains__O__Z(s$2)) {
            return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\", "_{", "}"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [easyMap.apply__O__O(s$2), lower])))
          }
        }
      }
    }
  };
  if ((x1 !== null)) {
    var s$3 = ScalaJS.as.java_lang_String(x1._1__O());
    var p14 = ScalaJS.as.scala_collection_Seq(x1._2__O());
    if (ScalaJS.is.scala_collection_immutable_List(p14)) {
      var x15 = ScalaJS.as.scala_collection_immutable_List(p14);
      var o60 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x15);
      if ((!o60.isEmpty__Z())) {
        if (((!ScalaJS.anyRefEqEq(o60.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o60.get__O()).lengthCompare__I__I(2) === 0))) {
          var lower$2 = ScalaJS.as.java_lang_String(ScalaJS.as.scala_collection_LinearSeqOptimized(o60.get__O()).apply__I__O(0));
          var upper = ScalaJS.as.java_lang_String(ScalaJS.as.scala_collection_LinearSeqOptimized(o60.get__O()).apply__I__O(1));
          if (easyMap.contains__O__Z(s$3)) {
            return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\", "_{", "}{", "}"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [easyMap.apply__O__O(s$3), lower$2, upper])))
          }
        }
      }
    }
  };
  if ((x1 !== null)) {
    var s$4 = ScalaJS.as.java_lang_String(x1._1__O());
    if (easyMap.contains__O__Z(s$4)) {
      throw new ScalaJS.c.com_prealpha_pipe_math_ParseException().init___T__O__O(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["!", "(...) takes either 0, 1, or 2 arguments."]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [s$4]))), "", "")
    }
  };
  if ((x1 !== null)) {
    var p18 = ScalaJS.as.java_lang_String(x1._1__O());
    var p19 = ScalaJS.as.scala_collection_Seq(x1._2__O());
    if (ScalaJS.anyRefEqEq("limit", p18)) {
      if (ScalaJS.is.scala_collection_immutable_List(p19)) {
        var x20 = ScalaJS.as.scala_collection_immutable_List(p19);
        var o63 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x20);
        if ((!o63.isEmpty__Z())) {
          if (((!ScalaJS.anyRefEqEq(o63.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o63.get__O()).lengthCompare__I__I(0) === 0))) {
            return "\\lim"
          }
        }
      }
    }
  };
  if ((x1 !== null)) {
    var p22 = ScalaJS.as.java_lang_String(x1._1__O());
    var p23 = ScalaJS.as.scala_collection_Seq(x1._2__O());
    if (ScalaJS.anyRefEqEq("limit", p22)) {
      if (ScalaJS.is.scala_collection_immutable_List(p23)) {
        var x24 = ScalaJS.as.scala_collection_immutable_List(p23);
        var o65 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x24);
        if ((!o65.isEmpty__Z())) {
          if (((!ScalaJS.anyRefEqEq(o65.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o65.get__O()).lengthCompare__I__I(1) === 0))) {
            var under = ScalaJS.as.java_lang_String(ScalaJS.as.scala_collection_LinearSeqOptimized(o65.get__O()).apply__I__O(0));
            return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\lim_{", "}"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [under])))
          }
        }
      }
    }
  };
  if ((x1 !== null)) {
    var p26 = ScalaJS.as.java_lang_String(x1._1__O());
    var p27 = ScalaJS.as.scala_collection_Seq(x1._2__O());
    if (ScalaJS.anyRefEqEq("limit", p26)) {
      if (ScalaJS.is.scala_collection_immutable_List(p27)) {
        var x28 = ScalaJS.as.scala_collection_immutable_List(p27);
        var o67 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x28);
        if ((!o67.isEmpty__Z())) {
          if (((!ScalaJS.anyRefEqEq(o67.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o67.get__O()).lengthCompare__I__I(2) === 0))) {
            var varx = ScalaJS.as.java_lang_String(ScalaJS.as.scala_collection_LinearSeqOptimized(o67.get__O()).apply__I__O(0));
            var bound = ScalaJS.as.java_lang_String(ScalaJS.as.scala_collection_LinearSeqOptimized(o67.get__O()).apply__I__O(1));
            return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\lim_{", " \\\\to ", "}"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [varx, bound])))
          }
        }
      }
    }
  };
  if ((x1 !== null)) {
    var p30 = ScalaJS.as.java_lang_String(x1._1__O());
    if (ScalaJS.anyRefEqEq("limit", p30)) {
      throw new ScalaJS.c.com_prealpha_pipe_math_ParseException().init___T__O__O("!limit(...) takes either 0, 1, or 2 arguments.", "", "")
    }
  };
  if ((x1 !== null)) {
    var p32 = ScalaJS.as.java_lang_String(x1._1__O());
    var p33 = ScalaJS.as.scala_collection_Seq(x1._2__O());
    if (ScalaJS.anyRefEqEq("floor", p32)) {
      if (ScalaJS.is.scala_collection_immutable_List(p33)) {
        var x34 = ScalaJS.as.scala_collection_immutable_List(p33);
        var o70 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x34);
        if ((!o70.isEmpty__Z())) {
          if (((!ScalaJS.anyRefEqEq(o70.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o70.get__O()).lengthCompare__I__I(1) === 0))) {
            var contents$2 = ScalaJS.as.java_lang_String(ScalaJS.as.scala_collection_LinearSeqOptimized(o70.get__O()).apply__I__O(0));
            return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\left \\\\lfloor{", "}\\\\right \\\\rfloor"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [contents$2])))
          }
        }
      }
    }
  };
  if ((x1 !== null)) {
    var p36 = ScalaJS.as.java_lang_String(x1._1__O());
    var p37 = ScalaJS.as.scala_collection_Seq(x1._2__O());
    if (ScalaJS.anyRefEqEq("ceil", p36)) {
      if (ScalaJS.is.scala_collection_immutable_List(p37)) {
        var x38 = ScalaJS.as.scala_collection_immutable_List(p37);
        var o72 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x38);
        if ((!o72.isEmpty__Z())) {
          if (((!ScalaJS.anyRefEqEq(o72.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o72.get__O()).lengthCompare__I__I(1) === 0))) {
            var contents$3 = ScalaJS.as.java_lang_String(ScalaJS.as.scala_collection_LinearSeqOptimized(o72.get__O()).apply__I__O(0));
            return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\left \\\\lceil{", "}\\\\right \\\\rceil"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [contents$3])))
          }
        }
      }
    }
  };
  if ((x1 !== null)) {
    var name = ScalaJS.as.java_lang_String(x1._1__O());
    if (actuallySuper.contains__O__Z(name)) {
      return this.genSuperMacro__Lcom_prealpha_pipe_math_SuperMacro__T(new ScalaJS.c.com_prealpha_pipe_math_SuperMacro().init___T__Lscala_collection_Seq(name, ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_collection_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_Seq.getArrayOf(), [m.c__Lscala_collection_Seq()]), 1))))))
    }
  };
  throw new ScalaJS.c.com_prealpha_pipe_math_ParseException().init___T__O__O(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["No pattern found for macro ", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [m.name__T()]))), "", "")
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genSuperMacro__Lcom_prealpha_pipe_math_SuperMacro__T = (function(m) {
  var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(m.name__T(), m.c__Lscala_collection_Seq().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$1) {
      return ScalaJS.as.scala_collection_Seq(x$1.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1().init___Lcom_prealpha_pipe_math_CodeGen$$anonfun$2(this), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
    })
  })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  if ((x1 !== null)) {
    var p2 = ScalaJS.as.java_lang_String(x1._1__O());
    var cases = ScalaJS.as.scala_collection_Seq(x1._2__O());
    if (ScalaJS.anyRefEqEq("cases", p2)) {
      if (cases.exists__Lscala_Function1__Z(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
        return (function(x$2) {
          return ScalaJS.bZ((x$2.length__I() !== 2))
        })
      })()))) {
        throw new ScalaJS.c.com_prealpha_pipe_math_ParseException().init___T__O__O("Incorrect usage of cases macro. Contains an argument list that is not 2 arguments long", "", "")
      };
      return ScalaJS.as.scala_collection_TraversableOnce(cases.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
        return (function(x$3) {
          return x$3.mkString__T__T(" & ")
        })
      })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).mkString__T__T__T__T("\\begin{cases}\n", " \\\n", "\n\\end{cases}")
    }
  };
  if ((x1 !== null)) {
    var p3 = ScalaJS.as.java_lang_String(x1._1__O());
    var rows = ScalaJS.as.scala_collection_Seq(x1._2__O());
    if (ScalaJS.anyRefEqEq("matrix", p3)) {
      var flatRows = ScalaJS.as.scala_collection_Seq(rows.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
        return (function(x$4) {
          return x$4.mkString__T__T(" & ")
        })
      })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
      var rowsStr = flatRows.mkString__T__T(" \\\\\n");
      var colCount = ScalaJS.uI(ScalaJS.as.scala_collection_TraversableOnce(rows.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
        return (function(x$5) {
          return ScalaJS.bI(x$5.length__I())
        })
      })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).max__Lscala_math_Ordering__O(ScalaJS.modules.scala_math_Ordering$Int()));
      var colStr = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("c")).$$times__I__T(colCount);
      return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\left( \\\\begin{array}{", "}\\n", "\\n\\\\end{array} \\\\right)"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [colStr, rowsStr])))
    }
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genEntire = (function(arg$1) {
  return this.genEntire__Lscala_collection_Seq__T(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genMulti = (function(arg$1, arg$2) {
  return this.genMulti__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__V(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genSingle = (function(arg$1, arg$2) {
  return this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genMacro = (function(arg$1) {
  return this.genMacro__Lcom_prealpha_pipe_math_Macro__T(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genSuperMacro = (function(arg$1) {
  return this.genSuperMacro__Lcom_prealpha_pipe_math_SuperMacro__T(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genSuperMacro__Lcom_prealpha_pipe_math_SuperMacro__ = (function(m) {
  return this.genSuperMacro__Lcom_prealpha_pipe_math_SuperMacro__T(m)
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genMacro__Lcom_prealpha_pipe_math_Macro__ = (function(m$2) {
  return this.genMacro__Lcom_prealpha_pipe_math_Macro__T(m$2)
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__ = (function(expr, sb) {
  return ScalaJS.bV(this.genSingle__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_mutable_StringBuilder__V(expr, sb))
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genMulti__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__ = (function(exprs, builder) {
  return ScalaJS.bV(this.genMulti__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__V(exprs, builder))
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.genEntire__Lscala_collection_Seq__ = (function(exprs$2) {
  return this.genEntire__Lscala_collection_Seq__T(exprs$2)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_CodeGen$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_CodeGen$.prototype = ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_CodeGen$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_CodeGen$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_CodeGen$.prototype = ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype;
ScalaJS.is.com_prealpha_pipe_math_CodeGen$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_CodeGen$)))
});
ScalaJS.as.com_prealpha_pipe_math_CodeGen$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_CodeGen$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.CodeGen")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_CodeGen$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_CodeGen$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_CodeGen$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_CodeGen$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.CodeGen;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_CodeGen$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_CodeGen$: 0
}, false, "com.prealpha.pipe.math.CodeGen$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_CodeGen$: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_CodeGen$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_CodeGen = undefined;
ScalaJS.modules.com_prealpha_pipe_math_CodeGen = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_CodeGen)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_CodeGen = new ScalaJS.c.com_prealpha_pipe_math_CodeGen$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_CodeGen
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Comment = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.text$1 = null
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Comment;
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.text__T = (function() {
  return this.text$1
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.copy__T__Lcom_prealpha_pipe_math_Comment = (function(text) {
  return new ScalaJS.c.com_prealpha_pipe_math_Comment().init___T(text)
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.copy$default$1__T = (function() {
  return this.text__T()
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.productPrefix__T = (function() {
  return "Comment"
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.text__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_Comment(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_math_Comment(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Comment$1 = ScalaJS.as.com_prealpha_pipe_math_Comment(x$1);
      return (ScalaJS.anyRefEqEq(this.text__T(), Comment$1.text__T()) && Comment$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.init___T = (function(text) {
  this.text$1 = text;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.text = (function() {
  return this.text__T()
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.copy = (function(arg$1) {
  return this.copy__T__Lcom_prealpha_pipe_math_Comment(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.copy$default$1 = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.copy__T__ = (function(text) {
  return this.copy__T__Lcom_prealpha_pipe_math_Comment(text)
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.text__ = (function() {
  return this.text__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Comment = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Comment.prototype = ScalaJS.c.com_prealpha_pipe_math_Comment.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Comment = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_Comment.call(this);
  return this.init___T(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_Comment.prototype = ScalaJS.c.com_prealpha_pipe_math_Comment.prototype;
ScalaJS.is.com_prealpha_pipe_math_Comment = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Comment)))
});
ScalaJS.as.com_prealpha_pipe_math_Comment = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Comment(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Comment")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Comment = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Comment)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Comment = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Comment(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Comment;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Comment = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Comment: 0
}, false, "com.prealpha.pipe.math.Comment", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_Comment: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Comment.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Comment;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Macro = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.name$1 = null;
  this.c$1 = null
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Macro;
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.name__T = (function() {
  return this.name$1
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.c__Lscala_collection_Seq = (function() {
  return this.c$1
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.copy$default$1__T = (function() {
  return this.name__T()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.copy$default$2__Lscala_collection_Seq = (function() {
  return this.c__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.copy__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Macro = (function(name, c) {
  return new ScalaJS.c.com_prealpha_pipe_math_Macro().init___T__Lscala_collection_Seq(name, c)
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.productPrefix__T = (function() {
  return "Macro"
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.name__T();
        break
      };
    case 1:
      {
        return this.c__Lscala_collection_Seq();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_Macro(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_math_Macro(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Macro$1 = ScalaJS.as.com_prealpha_pipe_math_Macro(x$1);
      return ((ScalaJS.anyRefEqEq(this.name__T(), Macro$1.name__T()) && ScalaJS.anyRefEqEq(this.c__Lscala_collection_Seq(), Macro$1.c__Lscala_collection_Seq())) && Macro$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.init___T__Lscala_collection_Seq = (function(name, c) {
  this.name$1 = name;
  this.c$1 = c;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.name = (function() {
  return this.name__T()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.c = (function() {
  return this.c__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.copy = (function(arg$1, arg$2) {
  return this.copy__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Macro(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.copy$default$1 = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.copy$default$2 = (function() {
  return this.copy$default$2__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.copy$default$2__ = (function() {
  return this.copy$default$2__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.copy__T__Lscala_collection_Seq__ = (function(name, c) {
  return this.copy__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Macro(name, c)
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.c__ = (function() {
  return this.c__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Macro = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Macro.prototype = ScalaJS.c.com_prealpha_pipe_math_Macro.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Macro = (function(arg$1, arg$2) {
  ScalaJS.c.com_prealpha_pipe_math_Macro.call(this);
  return this.init___T__Lscala_collection_Seq(arg$1, arg$2)
});
ScalaJS.classes.com_prealpha_pipe_math_Macro.prototype = ScalaJS.c.com_prealpha_pipe_math_Macro.prototype;
ScalaJS.is.com_prealpha_pipe_math_Macro = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Macro)))
});
ScalaJS.as.com_prealpha_pipe_math_Macro = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Macro(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Macro")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Macro = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Macro)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Macro = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Macro(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Macro;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Macro = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Macro: 0
}, false, "com.prealpha.pipe.math.Macro", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_Macro: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Macro.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Macro;

ScalaJS.is.com_prealpha_pipe_math_MathExpr = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathExpr)))
});
ScalaJS.as.com_prealpha_pipe_math_MathExpr = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathExpr(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathExpr")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathExpr = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathExpr)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathExpr = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathExpr(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathExpr;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathExpr = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathExpr: 0
}, true, "com.prealpha.pipe.math.MathExpr", undefined, {
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.expr$1 = null;
  this.scriptExpr$1 = null;
  this.symbolicChunk$1 = null;
  this.characterChunk$1 = null;
  this.numericChunk$1 = null;
  this.symbol$1 = null;
  this.comment$1 = null;
  this.paren$1 = null;
  this.commaSep$1 = null;
  this.marco$1 = null;
  this.semiSep$1 = null;
  this.superMarco$1 = null;
  this.superScript$1 = null;
  this.subScript$1 = null;
  this.overDiv$1 = null;
  this.sideDiv$1 = null;
  this.whiteSpace$1 = null;
  this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar$1 = null;
  this.bitmap$0$1 = 0;
  this.scala$util$parsing$combinator$PackratParsers$$MemoEntry$module$1 = null;
  this.scala$util$parsing$combinator$PackratParsers$$LR$module$1 = null;
  this.scala$util$parsing$combinator$PackratParsers$$Head$module$1 = null;
  this.Success$module$1 = null;
  this.NoSuccess$module$1 = null;
  this.Failure$module$1 = null;
  this.Error$module$1 = null;
  this.$$tilde$module$1 = null
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$;
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.expr$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 1) === 0)) {
    this.expr$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().comment__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(this)).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(this)).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(this)).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(this)).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(this)).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(this)).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(this)).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(this)).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(this))
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.expr$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scriptExpr$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 2) === 0)) {
    this.scriptExpr$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().paren__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1(this)).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1(this)).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1(this)).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1(this))
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 2)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.scriptExpr$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.symbolicChunk$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 4) === 0)) {
    this.symbolicChunk$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("[^()!:#;,/_\\ ^a-zA-Z0-9]+")).r__Lscala_util_matching_Regex()).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(ScalaJS.modules.com_prealpha_pipe_math_Chunk())
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 4)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.symbolicChunk$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.characterChunk$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 8) === 0)) {
    this.characterChunk$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("[a-zA-Z]+")).r__Lscala_util_matching_Regex()).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(ScalaJS.modules.com_prealpha_pipe_math_Chunk())
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 8)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.characterChunk$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.numericChunk$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 16) === 0)) {
    this.numericChunk$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("-?[0-9.]+")).r__Lscala_util_matching_Regex()).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(ScalaJS.modules.com_prealpha_pipe_math_Chunk())
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 16)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.numericChunk$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.symbol$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 32) === 0)) {
    this.symbol$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser(":").$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$symbol$1(this)).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(ScalaJS.modules.com_prealpha_pipe_math_Symbol())
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 32)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.symbol$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.comment$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 64) === 0)) {
    this.comment$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("#").$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$comment$1(this)).$$less$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$comment$1(this)).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(ScalaJS.modules.com_prealpha_pipe_math_Comment())
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 64)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.comment$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.paren$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 128) === 0)) {
    this.paren$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("(").$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$paren$1(this)).$$less$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$paren$1(this)).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(ScalaJS.modules.com_prealpha_pipe_math_Paren())
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 128)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.paren$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.commaSep$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 256) === 0)) {
    this.commaSep$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$times__Lscala_util_parsing_combinator_Parsers$Parser().$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$commaSep$1(this)).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$commaSep$1(this))
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 256)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.commaSep$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.marco$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 512) === 0)) {
    this.marco$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("!").$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1(this)).$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1(this)).$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1(this)).$$less$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1(this)).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1(this))
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 512)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.marco$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.semiSep$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 1024) === 0)) {
    this.semiSep$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().commaSep__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$semiSep$1(this)).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$semiSep$1(this))
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 1024)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.semiSep$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.superMarco$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 2048) === 0)) {
    this.superMarco$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("!").$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1(this)).$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1(this)).$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1(this)).$$less$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1(this)).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1(this))
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 2048)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.superMarco$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.superScript$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 4096) === 0)) {
    this.superScript$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superScript$1(this)).$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superScript$1(this)).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superScript$1(this))
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 4096)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.superScript$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.subScript$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 8192) === 0)) {
    this.subScript$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$subScript$1(this)).$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$subScript$1(this)).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$subScript$1(this))
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 8192)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.subScript$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.overDiv$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 16384) === 0)) {
    this.overDiv$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$overDiv$1(this)).$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$overDiv$1(this)).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$overDiv$1(this))
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 16384)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.overDiv$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.sideDiv$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 32768) === 0)) {
    this.sideDiv$1 = this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.modules.com_prealpha_pipe_math_MathParser().expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1(this)).$$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1(this)).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50().init___Lcom_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1(this))
      })
    })()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 32768)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.sideDiv$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$MemoEntry$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$MemoEntry$ = (function() {
  if ((this.scala$util$parsing$combinator$PackratParsers$$MemoEntry$module$1 === null)) {
    this.scala$util$parsing$combinator$PackratParsers$$MemoEntry$module$1 = new ScalaJS.c.scala_util_parsing_combinator_PackratParsers$MemoEntry$().init___Lscala_util_parsing_combinator_PackratParsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.scala$util$parsing$combinator$PackratParsers$$MemoEntry$module$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$MemoEntry__Lscala_util_parsing_combinator_PackratParsers$MemoEntry$ = (function() {
  if ((this.scala$util$parsing$combinator$PackratParsers$$MemoEntry$module$1 === null)) {
    return this.scala$util$parsing$combinator$PackratParsers$$MemoEntry$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$MemoEntry$()
  } else {
    return this.scala$util$parsing$combinator$PackratParsers$$MemoEntry$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$LR$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$LR$ = (function() {
  if ((this.scala$util$parsing$combinator$PackratParsers$$LR$module$1 === null)) {
    this.scala$util$parsing$combinator$PackratParsers$$LR$module$1 = new ScalaJS.c.scala_util_parsing_combinator_PackratParsers$LR$().init___Lscala_util_parsing_combinator_PackratParsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.scala$util$parsing$combinator$PackratParsers$$LR$module$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$LR__Lscala_util_parsing_combinator_PackratParsers$LR$ = (function() {
  if ((this.scala$util$parsing$combinator$PackratParsers$$LR$module$1 === null)) {
    return this.scala$util$parsing$combinator$PackratParsers$$LR$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$LR$()
  } else {
    return this.scala$util$parsing$combinator$PackratParsers$$LR$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$Head$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$Head$ = (function() {
  if ((this.scala$util$parsing$combinator$PackratParsers$$Head$module$1 === null)) {
    this.scala$util$parsing$combinator$PackratParsers$$Head$module$1 = new ScalaJS.c.scala_util_parsing_combinator_PackratParsers$Head$().init___Lscala_util_parsing_combinator_PackratParsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.scala$util$parsing$combinator$PackratParsers$$Head$module$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$Head__Lscala_util_parsing_combinator_PackratParsers$Head$ = (function() {
  if ((this.scala$util$parsing$combinator$PackratParsers$$Head$module$1 === null)) {
    return this.scala$util$parsing$combinator$PackratParsers$$Head$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$Head$()
  } else {
    return this.scala$util$parsing$combinator$PackratParsers$$Head$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$super$phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__phrase__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$super$Parser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser = (function(f) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__Parser__Lscala_util_parsing_combinator_Parsers__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(this, f)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_PackratParsers$class__phrase__Lscala_util_parsing_combinator_PackratParsers__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_PackratParsers$PackratParser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_PackratParsers$class__parser2packrat__Lscala_util_parsing_combinator_PackratParsers__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.memo__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_PackratParsers$class__memo__Lscala_util_parsing_combinator_PackratParsers__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_PackratParsers$PackratParser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.whiteSpace__Lscala_util_matching_Regex = (function() {
  return this.whiteSpace$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$RegexParsers$$super$positioned__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__positioned__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$RegexParsers$$super$phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__phrase__Lscala_util_parsing_combinator_Parsers__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$RegexParsers$_setter_$whiteSpace_$eq__Lscala_util_matching_Regex__V = (function(x$1) {
  this.whiteSpace$1 = x$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.handleWhiteSpace__Ljava_lang_CharSequence__I__I = (function(source, offset) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__handleWhiteSpace__Lscala_util_parsing_combinator_RegexParsers__Ljava_lang_CharSequence__I__I(this, source, offset)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.literal__T__Lscala_util_parsing_combinator_Parsers$Parser = (function(s) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__literal__Lscala_util_parsing_combinator_RegexParsers__T__Lscala_util_parsing_combinator_Parsers$Parser(this, s)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser = (function(r) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__regex__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(this, r)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.positioned__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__positioned__Lscala_util_parsing_combinator_RegexParsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parse__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(p, in$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__parse__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(this, p, in$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(p, in$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__parse__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult(this, p, in$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(p, in$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__parse__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(this, p, in$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(p, in$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__parseAll__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(this, p, in$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(p, in$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__parseAll__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(this, p, in$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(p, in$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__parseAll__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult(this, p, in$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Success$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$Success$ = (function() {
  if ((this.Success$module$1 === null)) {
    this.Success$module$1 = new ScalaJS.c.scala_util_parsing_combinator_Parsers$Success$().init___Lscala_util_parsing_combinator_Parsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Success$module$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Success__Lscala_util_parsing_combinator_Parsers$Success$ = (function() {
  if ((this.Success$module$1 === null)) {
    return this.Success$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$Success$()
  } else {
    return this.Success$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar$lzycompute__p1__Lscala_util_DynamicVariable = (function() {
  if (((this.bitmap$0$1 & 65536) === 0)) {
    this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar$1 = ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__scala$util$parsing$combinator$Parsers$$lastNoSuccessVar__Lscala_util_parsing_combinator_Parsers__Lscala_util_DynamicVariable(this);
    this.bitmap$0$1 = (this.bitmap$0$1 | 65536)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar__Lscala_util_DynamicVariable = (function() {
  if (((this.bitmap$0$1 & 65536) === 0)) {
    return this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar$lzycompute__p1__Lscala_util_DynamicVariable()
  } else {
    return this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.NoSuccess$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$NoSuccess$ = (function() {
  if ((this.NoSuccess$module$1 === null)) {
    this.NoSuccess$module$1 = new ScalaJS.c.scala_util_parsing_combinator_Parsers$NoSuccess$().init___Lscala_util_parsing_combinator_Parsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.NoSuccess$module$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.NoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess$ = (function() {
  if ((this.NoSuccess$module$1 === null)) {
    return this.NoSuccess$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$NoSuccess$()
  } else {
    return this.NoSuccess$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Failure$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$Failure$ = (function() {
  if ((this.Failure$module$1 === null)) {
    this.Failure$module$1 = new ScalaJS.c.scala_util_parsing_combinator_Parsers$Failure$().init___Lscala_util_parsing_combinator_Parsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Failure$module$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Failure__Lscala_util_parsing_combinator_Parsers$Failure$ = (function() {
  if ((this.Failure$module$1 === null)) {
    return this.Failure$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$Failure$()
  } else {
    return this.Failure$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Error$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$Error$ = (function() {
  if ((this.Error$module$1 === null)) {
    this.Error$module$1 = new ScalaJS.c.scala_util_parsing_combinator_Parsers$Error$().init___Lscala_util_parsing_combinator_Parsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Error$module$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Error__Lscala_util_parsing_combinator_Parsers$Error$ = (function() {
  if ((this.Error$module$1 === null)) {
    return this.Error$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$Error$()
  } else {
    return this.Error$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.$$tilde$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$$tilde$ = (function() {
  if ((this.$$tilde$module$1 === null)) {
    this.$$tilde$module$1 = new ScalaJS.c.scala_util_parsing_combinator_Parsers$$tilde$().init___Lscala_util_parsing_combinator_Parsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.$$tilde$module$1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.$$tilde__Lscala_util_parsing_combinator_Parsers$$tilde$ = (function() {
  if ((this.$$tilde$module$1 === null)) {
    return this.$$tilde$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$$tilde$()
  } else {
    return this.$$tilde$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.lastNoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess = (function() {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__lastNoSuccess__Lscala_util_parsing_combinator_Parsers__Lscala_util_parsing_combinator_Parsers$NoSuccess(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.lastNoSuccess_$eq__Lscala_util_parsing_combinator_Parsers$NoSuccess__V = (function(x) {
  ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__lastNoSuccess_$eq__Lscala_util_parsing_combinator_Parsers__Lscala_util_parsing_combinator_Parsers$NoSuccess__V(this, x)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Parser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser = (function(f) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__Parser__Lscala_util_parsing_combinator_Parsers__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(this, f)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.OnceParser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$OnceParser = (function(f) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__OnceParser__Lscala_util_parsing_combinator_Parsers__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$OnceParser(this, f)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.commit__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__commit__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.elem__T__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser = (function(kind, p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__elem__Lscala_util_parsing_combinator_Parsers__T__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(this, kind, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.elem__O__Lscala_util_parsing_combinator_Parsers$Parser = (function(e) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__elem__Lscala_util_parsing_combinator_Parsers__O__Lscala_util_parsing_combinator_Parsers$Parser(this, e)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.accept__O__Lscala_util_parsing_combinator_Parsers$Parser = (function(e) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__accept__Lscala_util_parsing_combinator_Parsers__O__Lscala_util_parsing_combinator_Parsers$Parser(this, e)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.accept__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser = (function(es, evidence$1) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__accept__Lscala_util_parsing_combinator_Parsers__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(this, es, evidence$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.accept__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser = (function(expected, f) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__accept__Lscala_util_parsing_combinator_Parsers__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser(this, expected, f)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.acceptIf__Lscala_Function1__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser = (function(p, err) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__acceptIf__Lscala_util_parsing_combinator_Parsers__Lscala_Function1__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(this, p, err)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.acceptMatch__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser = (function(expected, f) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__acceptMatch__Lscala_util_parsing_combinator_Parsers__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser(this, expected, f)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.acceptSeq__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser = (function(es, evidence$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__acceptSeq__Lscala_util_parsing_combinator_Parsers__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(this, es, evidence$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.failure__T__Lscala_util_parsing_combinator_Parsers$Parser = (function(msg) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__failure__Lscala_util_parsing_combinator_Parsers__T__Lscala_util_parsing_combinator_Parsers$Parser(this, msg)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.err__T__Lscala_util_parsing_combinator_Parsers$Parser = (function(msg) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__err__Lscala_util_parsing_combinator_Parsers__T__Lscala_util_parsing_combinator_Parsers$Parser(this, msg)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.success__O__Lscala_util_parsing_combinator_Parsers$Parser = (function(v) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__success__Lscala_util_parsing_combinator_Parsers__O__Lscala_util_parsing_combinator_Parsers$Parser(this, v)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.log__Lscala_Function0__T__Lscala_util_parsing_combinator_Parsers$Parser = (function(p, name) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__log__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__T__Lscala_util_parsing_combinator_Parsers$Parser(this, p, name)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.rep__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__rep__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.repsep__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p, q) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__repsep__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p, q)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.rep1__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__rep1__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.rep1__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(first, p0) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__rep1__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, first, p0)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.repN__I__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(num, p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__repN__Lscala_util_parsing_combinator_Parsers__I__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, num, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.rep1sep__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p, q) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__rep1sep__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p, q)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.chainl1__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p, q) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__chainl1__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p, q)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.chainl1__Lscala_Function0__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(first, p, q) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__chainl1__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, first, p, q)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.chainr1__Lscala_Function0__Lscala_Function0__Lscala_Function2__O__Lscala_util_parsing_combinator_Parsers$Parser = (function(p, q, combine, first) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__chainr1__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_Function0__Lscala_Function2__O__Lscala_util_parsing_combinator_Parsers$Parser(this, p, q, combine, first)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.opt__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__opt__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.not__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__not__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.guard__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__guard__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.mkList__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__mkList__Lscala_util_parsing_combinator_Parsers__Lscala_Function1(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.skipWhitespace__Z = (function() {
  return true
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.middle__Lscala_Function2__Lscala_util_parsing_combinator_Parsers$$tilde__O = (function(f, expr) {
  return f.apply__O__O__O(ScalaJS.as.scala_util_parsing_combinator_Parsers$$tilde(expr._1__O())._1__O(), expr._2__O())
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.cons__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List = (function(expr) {
  var x$1 = expr._1__O();
  return ScalaJS.as.scala_collection_immutable_List(expr._2__O()).$$colon$colon__O__Lscala_collection_immutable_List(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 1) === 0)) {
    return this.expr$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.expr$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scriptExpr__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 2) === 0)) {
    return this.scriptExpr$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.scriptExpr$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.symbolicChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 4) === 0)) {
    return this.symbolicChunk$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.symbolicChunk$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.characterChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 8) === 0)) {
    return this.characterChunk$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.characterChunk$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.numericChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 16) === 0)) {
    return this.numericChunk$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.numericChunk$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.symbol__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 32) === 0)) {
    return this.symbol$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.symbol$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.comment__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 64) === 0)) {
    return this.comment$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.comment$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.paren__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 128) === 0)) {
    return this.paren$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.paren$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.commaSep__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 256) === 0)) {
    return this.commaSep$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.commaSep$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.marco__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 512) === 0)) {
    return this.marco$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.marco$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.semiSep__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 1024) === 0)) {
    return this.semiSep$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.semiSep$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.superMarco__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 2048) === 0)) {
    return this.superMarco$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.superMarco$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.superScript__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 4096) === 0)) {
    return this.superScript$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.superScript$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.subScript__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 8192) === 0)) {
    return this.subScript$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.subScript$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.overDiv__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 16384) === 0)) {
    return this.overDiv$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.overDiv$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.sideDiv__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  if (((this.bitmap$0$1 & 32768) === 0)) {
    return this.sideDiv$lzycompute__p1__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
  } else {
    return this.sideDiv$1
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.tryParse__T__Lscala_util_Try = (function(input) {
  var sr = new ScalaJS.c.java_io_StringReader().init___T(input);
  var br = new ScalaJS.c.java_io_BufferedReader().init___Ljava_io_Reader(sr);
  var psr = new ScalaJS.c.scala_util_parsing_input_PagedSeqReader().init___Lscala_collection_immutable_PagedSeq(ScalaJS.modules.scala_collection_immutable_PagedSeq().fromReader__Ljava_io_Reader__Lscala_collection_immutable_PagedSeq(br));
  var pr = new ScalaJS.c.scala_util_parsing_combinator_PackratParsers$PackratReader().init___Lscala_util_parsing_combinator_PackratParsers__Lscala_util_parsing_input_Reader(this, psr);
  if (new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(input)).forall__Lscala_Function1__Z(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$2) {
      x$2 = ScalaJS.uC(x$2);
      return ScalaJS.bZ(ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(x$2)))
    })
  })()))) {
    return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(new ScalaJS.c.com_prealpha_pipe_math_ParseException().init___T__O__O("", input, ""))
  } else {
    var x1 = this.parse__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(this.expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$plus__Lscala_util_parsing_combinator_Parsers$Parser(), pr);
    if (ScalaJS.is.scala_util_parsing_combinator_Parsers$Success(x1)) {
      var x2 = ScalaJS.as.scala_util_parsing_combinator_Parsers$Success(x1);
      var result = ScalaJS.as.scala_collection_immutable_List(x2.result__O());
      return new ScalaJS.c.scala_util_Success().init___O(result)
    };
    var o9 = this.NoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess$().unapply__Lscala_util_parsing_combinator_Parsers$ParseResult__Lscala_Option(x1);
    if ((!o9.isEmpty__Z())) {
      var msg = ScalaJS.as.java_lang_String(ScalaJS.as.scala_Tuple2(o9.get__O())._1__O());
      var next = ScalaJS.as.scala_util_parsing_input_Reader(ScalaJS.as.scala_Tuple2(o9.get__O())._2__O());
      return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(new ScalaJS.c.com_prealpha_pipe_math_ParseException().init___T__O__O(msg, input, next))
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return this.phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_PackratParsers$PackratParser(p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_math_MathParser = this;
  ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__$init$__Lscala_util_parsing_combinator_Parsers__V(this);
  ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__$init$__Lscala_util_parsing_combinator_RegexParsers__V(this);
  ScalaJS.impls.scala_util_parsing_combinator_PackratParsers$class__$init$__Lscala_util_parsing_combinator_PackratParsers__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.skipWhitespace = (function() {
  return this.skipWhitespace__Z()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.middle = (function(arg$1, arg$2) {
  return this.middle__Lscala_Function2__Lscala_util_parsing_combinator_Parsers$$tilde__O(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.cons = (function(arg$1) {
  return this.cons__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.expr = (function() {
  return this.expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scriptExpr = (function() {
  return this.scriptExpr__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.symbolicChunk = (function() {
  return this.symbolicChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.characterChunk = (function() {
  return this.characterChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.numericChunk = (function() {
  return this.numericChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.symbol = (function() {
  return this.symbol__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.comment = (function() {
  return this.comment__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.paren = (function() {
  return this.paren__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.commaSep = (function() {
  return this.commaSep__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.marco = (function() {
  return this.marco__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.semiSep = (function() {
  return this.semiSep__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.superMarco = (function() {
  return this.superMarco__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.superScript = (function() {
  return this.superScript__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.subScript = (function() {
  return this.subScript__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.overDiv = (function() {
  return this.overDiv__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.sideDiv = (function() {
  return this.sideDiv__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.tryParse = (function(arg$1) {
  return this.tryParse__T__Lscala_util_Try(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$MemoEntry = (function() {
  return this.scala$util$parsing$combinator$PackratParsers$$MemoEntry__Lscala_util_parsing_combinator_PackratParsers$MemoEntry$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$LR = (function() {
  return this.scala$util$parsing$combinator$PackratParsers$$LR__Lscala_util_parsing_combinator_PackratParsers$LR$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$Head = (function() {
  return this.scala$util$parsing$combinator$PackratParsers$$Head__Lscala_util_parsing_combinator_PackratParsers$Head$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$super$phrase = (function(arg$1) {
  return this.scala$util$parsing$combinator$PackratParsers$$super$phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$super$Parser = (function(arg$1) {
  return this.scala$util$parsing$combinator$PackratParsers$$super$Parser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.phrase = (function(arg$1) {
  return this.phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_PackratParsers$PackratParser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parser2packrat = (function(arg$1) {
  return this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.memo = (function(arg$1) {
  return this.memo__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_PackratParsers$PackratParser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.whiteSpace = (function() {
  return this.whiteSpace__Lscala_util_matching_Regex()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$RegexParsers$$super$positioned = (function(arg$1) {
  return this.scala$util$parsing$combinator$RegexParsers$$super$positioned__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$RegexParsers$$super$phrase = (function(arg$1) {
  return this.scala$util$parsing$combinator$RegexParsers$$super$phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$RegexParsers$_setter_$whiteSpace_$eq = (function(arg$1) {
  return this.scala$util$parsing$combinator$RegexParsers$_setter_$whiteSpace_$eq__Lscala_util_matching_Regex__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.handleWhiteSpace = (function(arg$1, arg$2) {
  return this.handleWhiteSpace__Ljava_lang_CharSequence__I__I(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.literal = (function(arg$1) {
  return this.literal__T__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.regex = (function(arg$1) {
  return this.regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.positioned = (function(arg$1) {
  return this.positioned__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parse = (function(arg$1, arg$2) {
  if (ScalaJS.is.scala_util_parsing_input_Reader(arg$2)) {
    return this.parse__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(arg$1, arg$2)
  } else {
    if (ScalaJS.is.java_lang_CharSequence(arg$2)) {
      return this.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult(arg$1, arg$2)
    } else {
      if (ScalaJS.is.java_io_Reader(arg$2)) {
        return this.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(arg$1, arg$2)
      } else {
        throw "No matching overload"
      }
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parseAll = (function(arg$1, arg$2) {
  if (ScalaJS.is.scala_util_parsing_input_Reader(arg$2)) {
    return this.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(arg$1, arg$2)
  } else {
    if (ScalaJS.is.java_io_Reader(arg$2)) {
      return this.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(arg$1, arg$2)
    } else {
      if (ScalaJS.is.java_lang_CharSequence(arg$2)) {
        return this.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult(arg$1, arg$2)
      } else {
        throw "No matching overload"
      }
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Success = (function() {
  return this.Success__Lscala_util_parsing_combinator_Parsers$Success$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar = (function() {
  return this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar__Lscala_util_DynamicVariable()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.NoSuccess = (function() {
  return this.NoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Failure = (function() {
  return this.Failure__Lscala_util_parsing_combinator_Parsers$Failure$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Error = (function() {
  return this.Error__Lscala_util_parsing_combinator_Parsers$Error$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.$tilde = (function() {
  return this.$$tilde__Lscala_util_parsing_combinator_Parsers$$tilde$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.lastNoSuccess = (function() {
  return this.lastNoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.lastNoSuccess_$eq = (function(arg$1) {
  return this.lastNoSuccess_$eq__Lscala_util_parsing_combinator_Parsers$NoSuccess__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Parser = (function(arg$1) {
  return this.Parser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.OnceParser = (function(arg$1) {
  return this.OnceParser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$OnceParser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.commit = (function(arg$1) {
  return this.commit__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.elem = (function(arg$1, arg$2) {
  switch (arguments.length) {
    case 1:
      return this.elem__O__Lscala_util_parsing_combinator_Parsers$Parser(arg$1);
    case 2:
      return this.elem__T__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2);
    default:
      throw "No matching overload";
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.accept = (function(arg$1, arg$2) {
  switch (arguments.length) {
    case 1:
      return this.accept__O__Lscala_util_parsing_combinator_Parsers$Parser(arg$1);
    case 2:
      if ((typeof(arg$1) === "string")) {
        return this.accept__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
      } else {
        if (ScalaJS.is.java_lang_Object(arg$1)) {
          return this.accept__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
        } else {
          throw "No matching overload"
        }
      };
    default:
      throw "No matching overload";
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.acceptIf = (function(arg$1, arg$2) {
  return this.acceptIf__Lscala_Function1__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.acceptMatch = (function(arg$1, arg$2) {
  return this.acceptMatch__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.acceptSeq = (function(arg$1, arg$2) {
  return this.acceptSeq__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.failure = (function(arg$1) {
  return this.failure__T__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.err = (function(arg$1) {
  return this.err__T__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.success = (function(arg$1) {
  return this.success__O__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.log = (function(arg$1, arg$2) {
  return this.log__Lscala_Function0__T__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.rep = (function(arg$1) {
  return this.rep__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.repsep = (function(arg$1, arg$2) {
  return this.repsep__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.rep1 = (function(arg$1, arg$2) {
  switch (arguments.length) {
    case 1:
      return this.rep1__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1);
    case 2:
      return this.rep1__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2);
    default:
      throw "No matching overload";
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.repN = (function(arg$1, arg$2) {
  return this.repN__I__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.rep1sep = (function(arg$1, arg$2) {
  return this.rep1sep__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.chainl1 = (function(arg$1, arg$2, arg$3) {
  switch (arguments.length) {
    case 2:
      return this.chainl1__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2);
    case 3:
      return this.chainl1__Lscala_Function0__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2, arg$3);
    default:
      throw "No matching overload";
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.chainr1 = (function(arg$1, arg$2, arg$3, arg$4) {
  return this.chainr1__Lscala_Function0__Lscala_Function0__Lscala_Function2__O__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2, arg$3, arg$4)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.opt = (function(arg$1) {
  return this.opt__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.not = (function(arg$1) {
  return this.not__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.guard = (function(arg$1) {
  return this.guard__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.mkList = (function() {
  return this.mkList__Lscala_Function1()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.mkList__ = (function() {
  return this.mkList__Lscala_Function1()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.guard__Lscala_Function0__ = (function(p) {
  return this.guard__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.not__Lscala_Function0__ = (function(p$2) {
  return this.not__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.opt__Lscala_Function0__ = (function(p$3) {
  return this.opt__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$3)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.chainr1__Lscala_Function0__Lscala_Function0__Lscala_Function2__O__ = (function(p$4, q, combine, first) {
  return this.chainr1__Lscala_Function0__Lscala_Function0__Lscala_Function2__O__Lscala_util_parsing_combinator_Parsers$Parser(p$4, q, combine, first)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.chainl1__Lscala_Function0__Lscala_Function0__Lscala_Function0__ = (function(first$2, p$5, q$2) {
  return this.chainl1__Lscala_Function0__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(first$2, p$5, q$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.chainl1__Lscala_Function0__Lscala_Function0__ = (function(p$6, q$3) {
  return this.chainl1__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$6, q$3)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.rep1sep__Lscala_Function0__Lscala_Function0__ = (function(p$7, q$4) {
  return this.rep1sep__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$7, q$4)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.repN__I__Lscala_Function0__ = (function(num, p$8) {
  return this.repN__I__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(num, p$8)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.rep1__Lscala_Function0__Lscala_Function0__ = (function(first$3, p0) {
  return this.rep1__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(first$3, p0)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.rep1__Lscala_Function0__ = (function(p$9) {
  return this.rep1__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$9)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.repsep__Lscala_Function0__Lscala_Function0__ = (function(p$10, q$5) {
  return this.repsep__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$10, q$5)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.rep__Lscala_Function0__ = (function(p$11) {
  return this.rep__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$11)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.log__Lscala_Function0__T__ = (function(p$12, name) {
  return this.log__Lscala_Function0__T__Lscala_util_parsing_combinator_Parsers$Parser(p$12, name)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.success__O__ = (function(v) {
  return this.success__O__Lscala_util_parsing_combinator_Parsers$Parser(v)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.err__T__ = (function(msg) {
  return this.err__T__Lscala_util_parsing_combinator_Parsers$Parser(msg)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.failure__T__ = (function(msg$2) {
  return this.failure__T__Lscala_util_parsing_combinator_Parsers$Parser(msg$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.acceptSeq__O__Lscala_Function1__ = (function(es, evidence$2) {
  return this.acceptSeq__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(es, evidence$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.acceptMatch__T__Lscala_PartialFunction__ = (function(expected, f) {
  return this.acceptMatch__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser(expected, f)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.acceptIf__Lscala_Function1__Lscala_Function1__ = (function(p$13, err) {
  return this.acceptIf__Lscala_Function1__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(p$13, err)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.accept__T__Lscala_PartialFunction__ = (function(expected$2, f$2) {
  return this.accept__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser(expected$2, f$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.accept__O__Lscala_Function1__ = (function(es$2, evidence$1) {
  return this.accept__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(es$2, evidence$1)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.accept__O__ = (function(e) {
  return this.accept__O__Lscala_util_parsing_combinator_Parsers$Parser(e)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.elem__O__ = (function(e$2) {
  return this.elem__O__Lscala_util_parsing_combinator_Parsers$Parser(e$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.elem__T__Lscala_Function1__ = (function(kind, p$14) {
  return this.elem__T__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(kind, p$14)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.commit__Lscala_Function0__ = (function(p$15) {
  return this.commit__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$15)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.OnceParser__Lscala_Function1__ = (function(f$3) {
  return this.OnceParser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$OnceParser(f$3)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Parser__Lscala_Function1__ = (function(f$4) {
  return this.Parser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(f$4)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.lastNoSuccess_$eq__Lscala_util_parsing_combinator_Parsers$NoSuccess__ = (function(x) {
  return ScalaJS.bV(this.lastNoSuccess_$eq__Lscala_util_parsing_combinator_Parsers$NoSuccess__V(x))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.lastNoSuccess__ = (function() {
  return this.lastNoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.$$tilde__ = (function() {
  return this.$$tilde__Lscala_util_parsing_combinator_Parsers$$tilde$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Error__ = (function() {
  return this.Error__Lscala_util_parsing_combinator_Parsers$Error$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Failure__ = (function() {
  return this.Failure__Lscala_util_parsing_combinator_Parsers$Failure$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.NoSuccess__ = (function() {
  return this.NoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar__ = (function() {
  return this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar__Lscala_util_DynamicVariable()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.Success__ = (function() {
  return this.Success__Lscala_util_parsing_combinator_Parsers$Success$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__ = (function(p$16, in$2) {
  return this.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult(p$16, in$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__ = (function(p$17, in$3) {
  return this.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(p$17, in$3)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__ = (function(p$18, in$4) {
  return this.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(p$18, in$4)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__ = (function(p$19, in$5) {
  return this.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(p$19, in$5)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__ = (function(p$20, in$6) {
  return this.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult(p$20, in$6)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parse__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__ = (function(p$21, in$7) {
  return this.parse__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(p$21, in$7)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.positioned__Lscala_Function0__ = (function(p$22) {
  return this.positioned__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$22)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.regex__Lscala_util_matching_Regex__ = (function(r) {
  return this.regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(r)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.literal__T__ = (function(s) {
  return this.literal__T__Lscala_util_parsing_combinator_Parsers$Parser(s)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.handleWhiteSpace__Ljava_lang_CharSequence__I__ = (function(source, offset) {
  return ScalaJS.bI(this.handleWhiteSpace__Ljava_lang_CharSequence__I__I(source, offset))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$RegexParsers$_setter_$whiteSpace_$eq__Lscala_util_matching_Regex__ = (function(x$1) {
  return ScalaJS.bV(this.scala$util$parsing$combinator$RegexParsers$_setter_$whiteSpace_$eq__Lscala_util_matching_Regex__V(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$RegexParsers$$super$phrase__Lscala_util_parsing_combinator_Parsers$Parser__ = (function(p$23) {
  return this.scala$util$parsing$combinator$RegexParsers$$super$phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(p$23)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$RegexParsers$$super$positioned__Lscala_Function0__ = (function(p$24) {
  return this.scala$util$parsing$combinator$RegexParsers$$super$positioned__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$24)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.whiteSpace__ = (function() {
  return this.whiteSpace__Lscala_util_matching_Regex()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.memo__Lscala_util_parsing_combinator_Parsers$Parser__ = (function(p$25) {
  return this.memo__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_PackratParsers$PackratParser(p$25)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.parser2packrat__Lscala_Function0__ = (function(p$26) {
  return this.parser2packrat__Lscala_Function0__Lscala_util_parsing_combinator_PackratParsers$PackratParser(p$26)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.phrase__Lscala_util_parsing_combinator_Parsers$Parser__ = (function(p$27) {
  return this.phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_PackratParsers$PackratParser(p$27)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$super$Parser__Lscala_Function1__ = (function(f$5) {
  return this.scala$util$parsing$combinator$PackratParsers$$super$Parser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(f$5)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$super$phrase__Lscala_util_parsing_combinator_Parsers$Parser__ = (function(p$28) {
  return this.scala$util$parsing$combinator$PackratParsers$$super$phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(p$28)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$Head__ = (function() {
  return this.scala$util$parsing$combinator$PackratParsers$$Head__Lscala_util_parsing_combinator_PackratParsers$Head$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$LR__ = (function() {
  return this.scala$util$parsing$combinator$PackratParsers$$LR__Lscala_util_parsing_combinator_PackratParsers$LR$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scala$util$parsing$combinator$PackratParsers$$MemoEntry__ = (function() {
  return this.scala$util$parsing$combinator$PackratParsers$$MemoEntry__Lscala_util_parsing_combinator_PackratParsers$MemoEntry$()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.tryParse__T__ = (function(input) {
  return this.tryParse__T__Lscala_util_Try(input)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.sideDiv__ = (function() {
  return this.sideDiv__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.overDiv__ = (function() {
  return this.overDiv__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.subScript__ = (function() {
  return this.subScript__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.superScript__ = (function() {
  return this.superScript__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.superMarco__ = (function() {
  return this.superMarco__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.semiSep__ = (function() {
  return this.semiSep__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.marco__ = (function() {
  return this.marco__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.commaSep__ = (function() {
  return this.commaSep__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.paren__ = (function() {
  return this.paren__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.comment__ = (function() {
  return this.comment__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.symbol__ = (function() {
  return this.symbol__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.numericChunk__ = (function() {
  return this.numericChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.characterChunk__ = (function() {
  return this.characterChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.symbolicChunk__ = (function() {
  return this.symbolicChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.scriptExpr__ = (function() {
  return this.scriptExpr__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.expr__ = (function() {
  return this.expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.cons__Lscala_util_parsing_combinator_Parsers$$tilde__ = (function(expr) {
  return this.cons__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List(expr)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.middle__Lscala_Function2__Lscala_util_parsing_combinator_Parsers$$tilde__ = (function(f$6, expr$2) {
  return this.middle__Lscala_Function2__Lscala_util_parsing_combinator_Parsers$$tilde__O(f$6, expr$2)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.skipWhitespace__ = (function() {
  return ScalaJS.bZ(this.skipWhitespace__Z())
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$: 0
}, false, "com.prealpha.pipe.math.MathParser$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_MathParser$: 1,
  scala_util_parsing_combinator_PackratParsers: 1,
  scala_util_parsing_combinator_RegexParsers: 1,
  scala_util_parsing_combinator_Parsers: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_MathParser = undefined;
ScalaJS.modules.com_prealpha_pipe_math_MathParser = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_MathParser)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_MathParser = new ScalaJS.c.com_prealpha_pipe_math_MathParser$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_MathParser
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Never$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Never$;
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.productPrefix__T = (function() {
  return "Never"
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_Never$(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.hashCode__I = (function() {
  return 75160172
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.toString__T = (function() {
  return "Never"
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_Never()
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_math_Never = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Never$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Never$.prototype = ScalaJS.c.com_prealpha_pipe_math_Never$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Never$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_Never$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_Never$.prototype = ScalaJS.c.com_prealpha_pipe_math_Never$.prototype;
ScalaJS.is.com_prealpha_pipe_math_Never$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Never$)))
});
ScalaJS.as.com_prealpha_pipe_math_Never$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Never$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Never")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Never$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Never$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Never$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Never$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Never;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Never$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Never$: 0
}, false, "com.prealpha.pipe.math.Never$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_Never$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Never$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Never$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_Never = undefined;
ScalaJS.modules.com_prealpha_pipe_math_Never = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_Never)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_Never = new ScalaJS.c.com_prealpha_pipe_math_Never$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_Never
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_OverDiv = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.numer$1 = null;
  this.denom$1 = null
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_OverDiv;
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.numer__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.numer$1
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.denom__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.denom$1
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_OverDiv = (function(numer, denom) {
  return new ScalaJS.c.com_prealpha_pipe_math_OverDiv().init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(numer, denom)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.copy$default$1__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.numer__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.copy$default$2__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.denom__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.productPrefix__T = (function() {
  return "OverDiv"
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.numer__Lcom_prealpha_pipe_math_MathExpr();
        break
      };
    case 1:
      {
        return this.denom__Lcom_prealpha_pipe_math_MathExpr();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_OverDiv(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_math_OverDiv(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var OverDiv$1 = ScalaJS.as.com_prealpha_pipe_math_OverDiv(x$1);
      return ((ScalaJS.anyRefEqEq(this.numer__Lcom_prealpha_pipe_math_MathExpr(), OverDiv$1.numer__Lcom_prealpha_pipe_math_MathExpr()) && ScalaJS.anyRefEqEq(this.denom__Lcom_prealpha_pipe_math_MathExpr(), OverDiv$1.denom__Lcom_prealpha_pipe_math_MathExpr())) && OverDiv$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr = (function(numer, denom) {
  this.numer$1 = numer;
  this.denom$1 = denom;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.numer = (function() {
  return this.numer__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.denom = (function() {
  return this.denom__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.copy = (function(arg$1, arg$2) {
  return this.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_OverDiv(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.copy$default$1 = (function() {
  return this.copy$default$1__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.copy$default$2 = (function() {
  return this.copy$default$2__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.copy$default$2__ = (function() {
  return this.copy$default$2__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__ = (function(numer, denom) {
  return this.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_OverDiv(numer, denom)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.denom__ = (function() {
  return this.denom__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.numer__ = (function() {
  return this.numer__Lcom_prealpha_pipe_math_MathExpr()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_OverDiv = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_OverDiv.prototype = ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_OverDiv = (function(arg$1, arg$2) {
  ScalaJS.c.com_prealpha_pipe_math_OverDiv.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(arg$1, arg$2)
});
ScalaJS.classes.com_prealpha_pipe_math_OverDiv.prototype = ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype;
ScalaJS.is.com_prealpha_pipe_math_OverDiv = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_OverDiv)))
});
ScalaJS.as.com_prealpha_pipe_math_OverDiv = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_OverDiv(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.OverDiv")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_OverDiv = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_OverDiv)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_OverDiv = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_OverDiv(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.OverDiv;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_OverDiv = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_OverDiv: 0
}, false, "com.prealpha.pipe.math.OverDiv", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_OverDiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_OverDiv;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Paren = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.c$1 = null
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Paren;
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.c__Lscala_collection_Seq = (function() {
  return this.c$1
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.copy$default$1__Lscala_collection_Seq = (function() {
  return this.c__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.copy__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Paren = (function(c) {
  return new ScalaJS.c.com_prealpha_pipe_math_Paren().init___Lscala_collection_Seq(c)
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.productPrefix__T = (function() {
  return "Paren"
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.c__Lscala_collection_Seq();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_Paren(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_math_Paren(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Paren$1 = ScalaJS.as.com_prealpha_pipe_math_Paren(x$1);
      return (ScalaJS.anyRefEqEq(this.c__Lscala_collection_Seq(), Paren$1.c__Lscala_collection_Seq()) && Paren$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.init___Lscala_collection_Seq = (function(c) {
  this.c$1 = c;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.c = (function() {
  return this.c__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.copy = (function(arg$1) {
  return this.copy__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Paren(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.copy$default$1 = (function() {
  return this.copy$default$1__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.copy__Lscala_collection_Seq__ = (function(c) {
  return this.copy__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Paren(c)
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.c__ = (function() {
  return this.c__Lscala_collection_Seq()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Paren = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Paren.prototype = ScalaJS.c.com_prealpha_pipe_math_Paren.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Paren = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_Paren.call(this);
  return this.init___Lscala_collection_Seq(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_Paren.prototype = ScalaJS.c.com_prealpha_pipe_math_Paren.prototype;
ScalaJS.is.com_prealpha_pipe_math_Paren = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Paren)))
});
ScalaJS.as.com_prealpha_pipe_math_Paren = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Paren(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Paren")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Paren = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Paren)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Paren = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Paren(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Paren;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Paren = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Paren: 0
}, false, "com.prealpha.pipe.math.Paren", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_Paren: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Paren.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Paren;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_ParseException$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_ParseException$;
ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype.toString__T = (function() {
  return "ParseException"
});
ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype.apply__T__O__O__Lcom_prealpha_pipe_math_ParseException = (function(msg, input, next) {
  return new ScalaJS.c.com_prealpha_pipe_math_ParseException().init___T__O__O(msg, input, next)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype.unapply__Lcom_prealpha_pipe_math_ParseException__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(x$0.msg__T(), x$0.input__O(), x$0.next__O()))
  }
});
ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_ParseException()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype.apply = (function(arg$1, arg$2, arg$3) {
  return this.apply__T__O__O__Lcom_prealpha_pipe_math_ParseException(arg$1, arg$2, arg$3)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_math_ParseException__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype.unapply__Lcom_prealpha_pipe_math_ParseException__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_math_ParseException__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype.apply__T__O__O__ = (function(msg, input, next) {
  return this.apply__T__O__O__Lcom_prealpha_pipe_math_ParseException(msg, input, next)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_ParseException$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_ParseException$.prototype = ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_ParseException$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_ParseException$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_ParseException$.prototype = ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype;
ScalaJS.is.com_prealpha_pipe_math_ParseException$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_ParseException$)))
});
ScalaJS.as.com_prealpha_pipe_math_ParseException$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_ParseException$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.ParseException")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_ParseException$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_ParseException$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_ParseException$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_ParseException$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.ParseException;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_ParseException$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_ParseException$: 0
}, false, "com.prealpha.pipe.math.ParseException$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_ParseException$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_ParseException$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_ParseException$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_ParseException = undefined;
ScalaJS.modules.com_prealpha_pipe_math_ParseException = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_ParseException)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_ParseException = new ScalaJS.c.com_prealpha_pipe_math_ParseException$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_ParseException
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_SideDiv = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.numer$1 = null;
  this.denom$1 = null
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_SideDiv;
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.numer__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.numer$1
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.denom__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.denom$1
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SideDiv = (function(numer, denom) {
  return new ScalaJS.c.com_prealpha_pipe_math_SideDiv().init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(numer, denom)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.copy$default$1__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.numer__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.copy$default$2__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.denom__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.productPrefix__T = (function() {
  return "SideDiv"
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.numer__Lcom_prealpha_pipe_math_MathExpr();
        break
      };
    case 1:
      {
        return this.denom__Lcom_prealpha_pipe_math_MathExpr();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_SideDiv(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_math_SideDiv(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var SideDiv$1 = ScalaJS.as.com_prealpha_pipe_math_SideDiv(x$1);
      return ((ScalaJS.anyRefEqEq(this.numer__Lcom_prealpha_pipe_math_MathExpr(), SideDiv$1.numer__Lcom_prealpha_pipe_math_MathExpr()) && ScalaJS.anyRefEqEq(this.denom__Lcom_prealpha_pipe_math_MathExpr(), SideDiv$1.denom__Lcom_prealpha_pipe_math_MathExpr())) && SideDiv$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr = (function(numer, denom) {
  this.numer$1 = numer;
  this.denom$1 = denom;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.numer = (function() {
  return this.numer__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.denom = (function() {
  return this.denom__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.copy = (function(arg$1, arg$2) {
  return this.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SideDiv(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.copy$default$1 = (function() {
  return this.copy$default$1__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.copy$default$2 = (function() {
  return this.copy$default$2__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.copy$default$2__ = (function() {
  return this.copy$default$2__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__ = (function(numer, denom) {
  return this.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SideDiv(numer, denom)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.denom__ = (function() {
  return this.denom__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.numer__ = (function() {
  return this.numer__Lcom_prealpha_pipe_math_MathExpr()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_SideDiv = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_SideDiv.prototype = ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_SideDiv = (function(arg$1, arg$2) {
  ScalaJS.c.com_prealpha_pipe_math_SideDiv.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(arg$1, arg$2)
});
ScalaJS.classes.com_prealpha_pipe_math_SideDiv.prototype = ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype;
ScalaJS.is.com_prealpha_pipe_math_SideDiv = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_SideDiv)))
});
ScalaJS.as.com_prealpha_pipe_math_SideDiv = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_SideDiv(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.SideDiv")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_SideDiv = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_SideDiv)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_SideDiv = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_SideDiv(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.SideDiv;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_SideDiv = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_SideDiv: 0
}, false, "com.prealpha.pipe.math.SideDiv", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_SideDiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_SideDiv;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_SubScript = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.normal$1 = null;
  this.under$1 = null
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_SubScript;
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.normal__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.normal$1
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.under__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.under$1
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SubScript = (function(normal, under) {
  return new ScalaJS.c.com_prealpha_pipe_math_SubScript().init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(normal, under)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.copy$default$1__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.normal__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.copy$default$2__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.under__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.productPrefix__T = (function() {
  return "SubScript"
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.normal__Lcom_prealpha_pipe_math_MathExpr();
        break
      };
    case 1:
      {
        return this.under__Lcom_prealpha_pipe_math_MathExpr();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_SubScript(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_math_SubScript(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var SubScript$1 = ScalaJS.as.com_prealpha_pipe_math_SubScript(x$1);
      return ((ScalaJS.anyRefEqEq(this.normal__Lcom_prealpha_pipe_math_MathExpr(), SubScript$1.normal__Lcom_prealpha_pipe_math_MathExpr()) && ScalaJS.anyRefEqEq(this.under__Lcom_prealpha_pipe_math_MathExpr(), SubScript$1.under__Lcom_prealpha_pipe_math_MathExpr())) && SubScript$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr = (function(normal, under) {
  this.normal$1 = normal;
  this.under$1 = under;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.normal = (function() {
  return this.normal__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.under = (function() {
  return this.under__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.copy = (function(arg$1, arg$2) {
  return this.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SubScript(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.copy$default$1 = (function() {
  return this.copy$default$1__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.copy$default$2 = (function() {
  return this.copy$default$2__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.copy$default$2__ = (function() {
  return this.copy$default$2__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__ = (function(normal, under) {
  return this.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SubScript(normal, under)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.under__ = (function() {
  return this.under__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.normal__ = (function() {
  return this.normal__Lcom_prealpha_pipe_math_MathExpr()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_SubScript = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_SubScript.prototype = ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_SubScript = (function(arg$1, arg$2) {
  ScalaJS.c.com_prealpha_pipe_math_SubScript.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(arg$1, arg$2)
});
ScalaJS.classes.com_prealpha_pipe_math_SubScript.prototype = ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype;
ScalaJS.is.com_prealpha_pipe_math_SubScript = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_SubScript)))
});
ScalaJS.as.com_prealpha_pipe_math_SubScript = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_SubScript(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.SubScript")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_SubScript = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_SubScript)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_SubScript = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_SubScript(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.SubScript;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_SubScript = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_SubScript: 0
}, false, "com.prealpha.pipe.math.SubScript", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_SubScript: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_SubScript.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_SubScript;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_SuperMacro = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.name$1 = null;
  this.c$1 = null
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_SuperMacro;
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.name__T = (function() {
  return this.name$1
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.c__Lscala_collection_Seq = (function() {
  return this.c$1
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.copy$default$1__T = (function() {
  return this.name__T()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.copy$default$2__Lscala_collection_Seq = (function() {
  return this.c__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.copy__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_SuperMacro = (function(name, c) {
  return new ScalaJS.c.com_prealpha_pipe_math_SuperMacro().init___T__Lscala_collection_Seq(name, c)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.productPrefix__T = (function() {
  return "SuperMacro"
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.name__T();
        break
      };
    case 1:
      {
        return this.c__Lscala_collection_Seq();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_SuperMacro(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_math_SuperMacro(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var SuperMacro$1 = ScalaJS.as.com_prealpha_pipe_math_SuperMacro(x$1);
      return ((ScalaJS.anyRefEqEq(this.name__T(), SuperMacro$1.name__T()) && ScalaJS.anyRefEqEq(this.c__Lscala_collection_Seq(), SuperMacro$1.c__Lscala_collection_Seq())) && SuperMacro$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.init___T__Lscala_collection_Seq = (function(name, c) {
  this.name$1 = name;
  this.c$1 = c;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.name = (function() {
  return this.name__T()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.c = (function() {
  return this.c__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.copy = (function(arg$1, arg$2) {
  return this.copy__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_SuperMacro(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.copy$default$1 = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.copy$default$2 = (function() {
  return this.copy$default$2__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.copy$default$2__ = (function() {
  return this.copy$default$2__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.copy__T__Lscala_collection_Seq__ = (function(name, c) {
  return this.copy__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_SuperMacro(name, c)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.c__ = (function() {
  return this.c__Lscala_collection_Seq()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_SuperMacro = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_SuperMacro.prototype = ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_SuperMacro = (function(arg$1, arg$2) {
  ScalaJS.c.com_prealpha_pipe_math_SuperMacro.call(this);
  return this.init___T__Lscala_collection_Seq(arg$1, arg$2)
});
ScalaJS.classes.com_prealpha_pipe_math_SuperMacro.prototype = ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype;
ScalaJS.is.com_prealpha_pipe_math_SuperMacro = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_SuperMacro)))
});
ScalaJS.as.com_prealpha_pipe_math_SuperMacro = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_SuperMacro(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.SuperMacro")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_SuperMacro = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_SuperMacro)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_SuperMacro = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_SuperMacro(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.SuperMacro;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_SuperMacro = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_SuperMacro: 0
}, false, "com.prealpha.pipe.math.SuperMacro", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_SuperMacro: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_SuperMacro;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_SuperScript = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.normal$1 = null;
  this.over$1 = null
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_SuperScript;
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.normal__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.normal$1
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.over__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.over$1
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SuperScript = (function(normal, over) {
  return new ScalaJS.c.com_prealpha_pipe_math_SuperScript().init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(normal, over)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.copy$default$1__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.normal__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.copy$default$2__Lcom_prealpha_pipe_math_MathExpr = (function() {
  return this.over__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.productPrefix__T = (function() {
  return "SuperScript"
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.normal__Lcom_prealpha_pipe_math_MathExpr();
        break
      };
    case 1:
      {
        return this.over__Lcom_prealpha_pipe_math_MathExpr();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_SuperScript(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_math_SuperScript(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var SuperScript$1 = ScalaJS.as.com_prealpha_pipe_math_SuperScript(x$1);
      return ((ScalaJS.anyRefEqEq(this.normal__Lcom_prealpha_pipe_math_MathExpr(), SuperScript$1.normal__Lcom_prealpha_pipe_math_MathExpr()) && ScalaJS.anyRefEqEq(this.over__Lcom_prealpha_pipe_math_MathExpr(), SuperScript$1.over__Lcom_prealpha_pipe_math_MathExpr())) && SuperScript$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr = (function(normal, over) {
  this.normal$1 = normal;
  this.over$1 = over;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.normal = (function() {
  return this.normal__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.over = (function() {
  return this.over__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.copy = (function(arg$1, arg$2) {
  return this.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SuperScript(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.copy$default$1 = (function() {
  return this.copy$default$1__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.copy$default$2 = (function() {
  return this.copy$default$2__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.copy$default$2__ = (function() {
  return this.copy$default$2__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__ = (function(normal, over) {
  return this.copy__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SuperScript(normal, over)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.over__ = (function() {
  return this.over__Lcom_prealpha_pipe_math_MathExpr()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.normal__ = (function() {
  return this.normal__Lcom_prealpha_pipe_math_MathExpr()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_SuperScript = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_SuperScript.prototype = ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_SuperScript = (function(arg$1, arg$2) {
  ScalaJS.c.com_prealpha_pipe_math_SuperScript.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(arg$1, arg$2)
});
ScalaJS.classes.com_prealpha_pipe_math_SuperScript.prototype = ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype;
ScalaJS.is.com_prealpha_pipe_math_SuperScript = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_SuperScript)))
});
ScalaJS.as.com_prealpha_pipe_math_SuperScript = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_SuperScript(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.SuperScript")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_SuperScript = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_SuperScript)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_SuperScript = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_SuperScript(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.SuperScript;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_SuperScript = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_SuperScript: 0
}, false, "com.prealpha.pipe.math.SuperScript", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_SuperScript: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_SuperScript;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Symbol = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.name$1 = null
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Symbol;
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.name__T = (function() {
  return this.name$1
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.copy__T__Lcom_prealpha_pipe_math_Symbol = (function(name) {
  return new ScalaJS.c.com_prealpha_pipe_math_Symbol().init___T(name)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.copy$default$1__T = (function() {
  return this.name__T()
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.productPrefix__T = (function() {
  return "Symbol"
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.name__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_Symbol(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_math_Symbol(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Symbol$1 = ScalaJS.as.com_prealpha_pipe_math_Symbol(x$1);
      return (ScalaJS.anyRefEqEq(this.name__T(), Symbol$1.name__T()) && Symbol$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.init___T = (function(name) {
  this.name$1 = name;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.name = (function() {
  return this.name__T()
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.copy = (function(arg$1) {
  return this.copy__T__Lcom_prealpha_pipe_math_Symbol(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.copy$default$1 = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.copy__T__ = (function(name) {
  return this.copy__T__Lcom_prealpha_pipe_math_Symbol(name)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Symbol = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Symbol.prototype = ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Symbol = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_Symbol.call(this);
  return this.init___T(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_Symbol.prototype = ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype;
ScalaJS.is.com_prealpha_pipe_math_Symbol = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Symbol)))
});
ScalaJS.as.com_prealpha_pipe_math_Symbol = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Symbol(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Symbol")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Symbol = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Symbol)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Symbol = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Symbol(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Symbol;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Symbol = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Symbol: 0
}, false, "com.prealpha.pipe.math.Symbol", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_math_Symbol: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_math_MathExpr: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Symbol.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Symbol;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Align$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_Align$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_Align$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Align$;
ScalaJS.c.com_prealpha_pipe_math_Align$.prototype.toString__T = (function() {
  return "Align"
});
ScalaJS.c.com_prealpha_pipe_math_Align$.prototype.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_Align = (function(nextTo) {
  return new ScalaJS.c.com_prealpha_pipe_math_Align().init___Lcom_prealpha_pipe_math_MathExpr(nextTo)
});
ScalaJS.c.com_prealpha_pipe_math_Align$.prototype.unapply__Lcom_prealpha_pipe_math_Align__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.nextTo__Lcom_prealpha_pipe_math_MathExpr())
  }
});
ScalaJS.c.com_prealpha_pipe_math_Align$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_Align()
});
ScalaJS.c.com_prealpha_pipe_math_Align$.prototype.apply__O__O = (function(v1) {
  return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_Align(ScalaJS.as.com_prealpha_pipe_math_MathExpr(v1))
});
ScalaJS.c.com_prealpha_pipe_math_Align$.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.com_prealpha_pipe_math_MathExpr(arg$1)) {
    return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_Align(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_Align$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_math_Align__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Align$.prototype.unapply__Lcom_prealpha_pipe_math_Align__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_math_Align__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_math_Align$.prototype.apply__Lcom_prealpha_pipe_math_MathExpr__ = (function(nextTo) {
  return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_Align(nextTo)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Align$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Align$.prototype = ScalaJS.c.com_prealpha_pipe_math_Align$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Align$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_Align$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_Align$.prototype = ScalaJS.c.com_prealpha_pipe_math_Align$.prototype;
ScalaJS.is.com_prealpha_pipe_math_Align$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Align$)))
});
ScalaJS.as.com_prealpha_pipe_math_Align$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Align$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Align")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Align$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Align$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Align$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Align$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Align;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Align$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Align$: 0
}, false, "com.prealpha.pipe.math.Align$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_Align$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Align$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Align$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_Align = undefined;
ScalaJS.modules.com_prealpha_pipe_math_Align = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_Align)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_Align = new ScalaJS.c.com_prealpha_pipe_math_Align$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_Align
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Chunk$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Chunk$;
ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype.toString__T = (function() {
  return "Chunk"
});
ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype.apply__T__Lcom_prealpha_pipe_math_Chunk = (function(contents) {
  return new ScalaJS.c.com_prealpha_pipe_math_Chunk().init___T(contents)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype.unapply__Lcom_prealpha_pipe_math_Chunk__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.contents__T())
  }
});
ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_Chunk()
});
ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lcom_prealpha_pipe_math_Chunk(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "string")) {
    return this.apply__T__Lcom_prealpha_pipe_math_Chunk(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_math_Chunk__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype.unapply__Lcom_prealpha_pipe_math_Chunk__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_math_Chunk__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype.apply__T__ = (function(contents) {
  return this.apply__T__Lcom_prealpha_pipe_math_Chunk(contents)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Chunk$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Chunk$.prototype = ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Chunk$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_Chunk$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_Chunk$.prototype = ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype;
ScalaJS.is.com_prealpha_pipe_math_Chunk$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Chunk$)))
});
ScalaJS.as.com_prealpha_pipe_math_Chunk$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Chunk$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Chunk")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Chunk$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Chunk$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Chunk$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Chunk$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Chunk;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Chunk$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Chunk$: 0
}, false, "com.prealpha.pipe.math.Chunk$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_Chunk$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Chunk$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Chunk$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_Chunk = undefined;
ScalaJS.modules.com_prealpha_pipe_math_Chunk = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_Chunk)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_Chunk = new ScalaJS.c.com_prealpha_pipe_math_Chunk$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_Chunk
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1;
ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.prototype.apply__Lscala_collection_Seq__T = (function(exprs$3) {
  return ScalaJS.modules.com_prealpha_pipe_math_CodeGen().genEntire__Lscala_collection_Seq__T(exprs$3)
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_collection_Seq__T(ScalaJS.as.scala_collection_Seq(v1))
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.prototype.init___Lcom_prealpha_pipe_math_CodeGen$$anonfun$2 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.scala_collection_Seq(arg$1)) {
    return this.apply__Lscala_collection_Seq__T(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.prototype.apply__Lscala_collection_Seq__ = (function(exprs) {
  return this.apply__Lscala_collection_Seq__T(exprs)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.prototype = ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.call(this);
  return this.init___Lcom_prealpha_pipe_math_CodeGen$$anonfun$2(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.prototype = ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.prototype;
ScalaJS.is.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1)))
});
ScalaJS.as.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.CodeGen$$anonfun$2$$anonfun$apply$1")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.CodeGen$$anonfun$2$$anonfun$apply$1;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1: 0
}, false, "com.prealpha.pipe.math.CodeGen$$anonfun$2$$anonfun$apply$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_CodeGen$$anonfun$2$$anonfun$apply$1;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Comment$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Comment$;
ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype.toString__T = (function() {
  return "Comment"
});
ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype.apply__T__Lcom_prealpha_pipe_math_Comment = (function(text) {
  return new ScalaJS.c.com_prealpha_pipe_math_Comment().init___T(text)
});
ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype.unapply__Lcom_prealpha_pipe_math_Comment__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.text__T())
  }
});
ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_Comment()
});
ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lcom_prealpha_pipe_math_Comment(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "string")) {
    return this.apply__T__Lcom_prealpha_pipe_math_Comment(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_math_Comment__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype.unapply__Lcom_prealpha_pipe_math_Comment__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_math_Comment__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype.apply__T__ = (function(text) {
  return this.apply__T__Lcom_prealpha_pipe_math_Comment(text)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Comment$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Comment$.prototype = ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Comment$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_Comment$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_Comment$.prototype = ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype;
ScalaJS.is.com_prealpha_pipe_math_Comment$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Comment$)))
});
ScalaJS.as.com_prealpha_pipe_math_Comment$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Comment$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Comment")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Comment$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Comment$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Comment$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Comment$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Comment;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Comment$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Comment$: 0
}, false, "com.prealpha.pipe.math.Comment$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_Comment$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Comment$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Comment$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_Comment = undefined;
ScalaJS.modules.com_prealpha_pipe_math_Comment = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_Comment)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_Comment = new ScalaJS.c.com_prealpha_pipe_math_Comment$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_Comment
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Macro$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Macro$;
ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype.toString__T = (function() {
  return "Macro"
});
ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype.apply__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Macro = (function(name, c) {
  return new ScalaJS.c.com_prealpha_pipe_math_Macro().init___T__Lscala_collection_Seq(name, c)
});
ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype.unapply__Lcom_prealpha_pipe_math_Macro__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.name__T(), x$0.c__Lscala_collection_Seq()))
  }
});
ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_Macro()
});
ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Macro(ScalaJS.as.java_lang_String(v1), ScalaJS.as.scala_collection_Seq(v2))
});
ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype.apply = (function(arg$1, arg$2) {
  if ((typeof(arg$1) === "string")) {
    return this.apply__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Macro(arg$1, arg$2)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O__O(arg$1, arg$2)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_math_Macro__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype.unapply__Lcom_prealpha_pipe_math_Macro__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_math_Macro__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype.apply__T__Lscala_collection_Seq__ = (function(name, c) {
  return this.apply__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Macro(name, c)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Macro$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Macro$.prototype = ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Macro$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_Macro$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_Macro$.prototype = ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype;
ScalaJS.is.com_prealpha_pipe_math_Macro$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Macro$)))
});
ScalaJS.as.com_prealpha_pipe_math_Macro$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Macro$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Macro")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Macro$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Macro$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Macro$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Macro$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Macro;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Macro$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Macro$: 0
}, false, "com.prealpha.pipe.math.Macro$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  com_prealpha_pipe_math_Macro$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Macro$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Macro$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_Macro = undefined;
ScalaJS.modules.com_prealpha_pipe_math_Macro = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_Macro)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_Macro = new ScalaJS.c.com_prealpha_pipe_math_Macro$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_Macro
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser(",").$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_math_MathParser().expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$times__Lscala_util_parsing_combinator_Parsers$Parser()
    })
  })())).$$times__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$commaSep$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$commaSep$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$commaSep$1$$anonfun$apply$23")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$commaSep$1$$anonfun$apply$23;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$commaSep$1$$anonfun$apply$23", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$23;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List = (function(expr) {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().cons__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List(expr)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List(ScalaJS.as.scala_util_parsing_combinator_Parsers$$tilde(v1))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$commaSep$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$$tilde(arg$1)) {
    return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__ = (function(expr) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List(expr)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$commaSep$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$commaSep$1$$anonfun$apply$25")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$commaSep$1$$anonfun$apply$25;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$commaSep$1$$anonfun$apply$25", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$commaSep$1$$anonfun$apply$25;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("[^\\n]*")).r__Lscala_util_matching_Regex())
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$comment$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$comment$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$comment$1$$anonfun$apply$19")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$comment$1$$anonfun$apply$19;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$comment$1$$anonfun$apply$19", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$19;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("$")).r__Lscala_util_matching_Regex())
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$comment$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$comment$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$comment$1$$anonfun$apply$20")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$comment$1$$anonfun$apply$20;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$comment$1$$anonfun$apply$20", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$comment$1$$anonfun$apply$20;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().overDiv__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$1")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$1;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$1", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$1;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().sideDiv__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$2")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$2;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$2", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$2;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().superScript__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$3")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$3;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$3", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$3;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().subScript__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$4")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$4;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$4", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$4;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().paren__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$5")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$5;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$5", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$5;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().symbol__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$6")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$6;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$6", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$6;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().marco__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$7")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$7;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$7", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$7;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().superMarco__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$8")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$8;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$8", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$8;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().numericChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_math_MathParser().symbolicChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
    })
  })())).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_math_MathParser().characterChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
    })
  })()))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$expr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$9")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$9;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$expr$1$$anonfun$apply$9", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$expr$1$$anonfun$apply$9;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("[a-zA-Z]+")).r__Lscala_util_matching_Regex())
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$26")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$26;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$26", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$26;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("(")
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$27")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$27;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$27", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$27;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().commaSep__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$28")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$28;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$28", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$28;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser(")")
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$29")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$29;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$29", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$29;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_Macro = (function(expr) {
  return ScalaJS.as.com_prealpha_pipe_math_Macro(ScalaJS.modules.com_prealpha_pipe_math_MathParser().middle__Lscala_Function2__Lscala_util_parsing_combinator_Parsers$$tilde__O(ScalaJS.modules.com_prealpha_pipe_math_Macro(), expr))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_Macro(ScalaJS.as.scala_util_parsing_combinator_Parsers$$tilde(v1))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$$tilde(arg$1)) {
    return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_Macro(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__ = (function(expr) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_Macro(expr)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$marco$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$30")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$30;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$marco$1$$anonfun$apply$30", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$marco$1$$anonfun$apply$30;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("/")
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$overDiv$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$overDiv$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$overDiv$1$$anonfun$apply$45")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$overDiv$1$$anonfun$apply$45;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$overDiv$1$$anonfun$apply$45", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$45;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$overDiv$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$overDiv$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$overDiv$1$$anonfun$apply$46")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$overDiv$1$$anonfun$apply$46;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$overDiv$1$$anonfun$apply$46", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$46;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_OverDiv = (function(expr) {
  return ScalaJS.as.com_prealpha_pipe_math_OverDiv(ScalaJS.modules.com_prealpha_pipe_math_MathParser().middle__Lscala_Function2__Lscala_util_parsing_combinator_Parsers$$tilde__O(ScalaJS.modules.com_prealpha_pipe_math_OverDiv(), expr))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_OverDiv(ScalaJS.as.scala_util_parsing_combinator_Parsers$$tilde(v1))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$overDiv$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$$tilde(arg$1)) {
    return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_OverDiv(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__ = (function(expr) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_OverDiv(expr)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$overDiv$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$overDiv$1$$anonfun$apply$47")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$overDiv$1$$anonfun$apply$47;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$overDiv$1$$anonfun$apply$47", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$overDiv$1$$anonfun$apply$47;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$times__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$paren$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$paren$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$paren$1$$anonfun$apply$21")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$paren$1$$anonfun$apply$21;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$paren$1$$anonfun$apply$21", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$21;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser(")")
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$paren$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$paren$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$paren$1$$anonfun$apply$22")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$paren$1$$anonfun$apply$22;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$paren$1$$anonfun$apply$22", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$paren$1$$anonfun$apply$22;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().symbol__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$12;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().marco__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$13;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().superMarco__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$14;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().numericChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser().$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_math_MathParser().symbolicChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
    })
  })())).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_math_MathParser().characterChunk__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
    })
  })()))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$scriptExpr$1$$anonfun$apply$15;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser(";").$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_math_MathParser().commaSep__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
    })
  })())).$$times__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$semiSep$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$semiSep$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$semiSep$1$$anonfun$apply$31")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$semiSep$1$$anonfun$apply$31;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$semiSep$1$$anonfun$apply$31", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$31;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List = (function(expr) {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().cons__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List(expr)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List(ScalaJS.as.scala_util_parsing_combinator_Parsers$$tilde(v1))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$semiSep$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$$tilde(arg$1)) {
    return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__ = (function(expr) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lscala_collection_immutable_List(expr)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$semiSep$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$semiSep$1$$anonfun$apply$33")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$semiSep$1$$anonfun$apply$33;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$semiSep$1$$anonfun$apply$33", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$semiSep$1$$anonfun$apply$33;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("//")
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$sideDiv$1$$anonfun$apply$48")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$sideDiv$1$$anonfun$apply$48;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$sideDiv$1$$anonfun$apply$48", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$48;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().expr__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$sideDiv$1$$anonfun$apply$49")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$sideDiv$1$$anonfun$apply$49;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$sideDiv$1$$anonfun$apply$49", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$49;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SideDiv = (function(expr) {
  return ScalaJS.as.com_prealpha_pipe_math_SideDiv(ScalaJS.modules.com_prealpha_pipe_math_MathParser().middle__Lscala_Function2__Lscala_util_parsing_combinator_Parsers$$tilde__O(ScalaJS.modules.com_prealpha_pipe_math_SideDiv(), expr))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SideDiv(ScalaJS.as.scala_util_parsing_combinator_Parsers$$tilde(v1))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$$tilde(arg$1)) {
    return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SideDiv(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__ = (function(expr) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SideDiv(expr)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$sideDiv$1$$anonfun$apply$50")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$sideDiv$1$$anonfun$apply$50;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$sideDiv$1$$anonfun$apply$50", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$sideDiv$1$$anonfun$apply$50;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("_")
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$subScript$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$subScript$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$subScript$1$$anonfun$apply$42")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$subScript$1$$anonfun$apply$42;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$subScript$1$$anonfun$apply$42", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$42;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().scriptExpr__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$subScript$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$subScript$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$subScript$1$$anonfun$apply$43")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$subScript$1$$anonfun$apply$43;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$subScript$1$$anonfun$apply$43", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$43;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SubScript = (function(expr) {
  return ScalaJS.as.com_prealpha_pipe_math_SubScript(ScalaJS.modules.com_prealpha_pipe_math_MathParser().middle__Lscala_Function2__Lscala_util_parsing_combinator_Parsers$$tilde__O(ScalaJS.modules.com_prealpha_pipe_math_SubScript(), expr))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SubScript(ScalaJS.as.scala_util_parsing_combinator_Parsers$$tilde(v1))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$subScript$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$$tilde(arg$1)) {
    return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SubScript(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__ = (function(expr) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SubScript(expr)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$subScript$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$subScript$1$$anonfun$apply$44")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$subScript$1$$anonfun$apply$44;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$subScript$1$$anonfun$apply$44", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$subScript$1$$anonfun$apply$44;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("[a-zA-Z]+")).r__Lscala_util_matching_Regex())
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$34")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$34;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$34", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$34;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("(")
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$35")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$35;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$35", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$35;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().semiSep__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$36")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$36;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$36", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$36;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser(")")
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$37")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$37;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$37", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$37;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SuperMacro = (function(expr) {
  return ScalaJS.as.com_prealpha_pipe_math_SuperMacro(ScalaJS.modules.com_prealpha_pipe_math_MathParser().middle__Lscala_Function2__Lscala_util_parsing_combinator_Parsers$$tilde__O(ScalaJS.modules.com_prealpha_pipe_math_SuperMacro(), expr))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SuperMacro(ScalaJS.as.scala_util_parsing_combinator_Parsers$$tilde(v1))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$$tilde(arg$1)) {
    return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SuperMacro(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__ = (function(expr) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SuperMacro(expr)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superMarco$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$38")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$38;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$superMarco$1$$anonfun$apply$38", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superMarco$1$$anonfun$apply$38;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("^")
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superScript$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superScript$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$superScript$1$$anonfun$apply$39")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$superScript$1$$anonfun$apply$39;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$superScript$1$$anonfun$apply$39", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$39;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40.prototype.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().scriptExpr__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superScript$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_PackratParsers$PackratParser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superScript$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$superScript$1$$anonfun$apply$40")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$superScript$1$$anonfun$apply$40;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$superScript$1$$anonfun$apply$40", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$40;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SuperScript = (function(expr) {
  return ScalaJS.as.com_prealpha_pipe_math_SuperScript(ScalaJS.modules.com_prealpha_pipe_math_MathParser().middle__Lscala_Function2__Lscala_util_parsing_combinator_Parsers$$tilde__O(ScalaJS.modules.com_prealpha_pipe_math_SuperScript(), expr))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SuperScript(ScalaJS.as.scala_util_parsing_combinator_Parsers$$tilde(v1))
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superScript$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$$tilde(arg$1)) {
    return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SuperScript(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.prototype.apply__Lscala_util_parsing_combinator_Parsers$$tilde__ = (function(expr) {
  return this.apply__Lscala_util_parsing_combinator_Parsers$$tilde__Lcom_prealpha_pipe_math_SuperScript(expr)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$superScript$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$superScript$1$$anonfun$apply$41")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$superScript$1$$anonfun$apply$41;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$superScript$1$$anonfun$apply$41", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$superScript$1$$anonfun$apply$41;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18;
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_MathParser().regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("[a-zA-Z]+")).r__Lscala_util_matching_Regex())
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18.prototype.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$symbol$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathParser$$anonfun$symbol$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18.prototype = ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18.prototype;
ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18)))
});
ScalaJS.as.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.MathParser$$anonfun$symbol$1$$anonfun$apply$18")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.MathParser$$anonfun$symbol$1$$anonfun$apply$18;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18: 0
}, false, "com.prealpha.pipe.math.MathParser$$anonfun$symbol$1$$anonfun$apply$18", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_MathParser$$anonfun$symbol$1$$anonfun$apply$18;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_OverDiv$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_OverDiv$;
ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype.toString__T = (function() {
  return "OverDiv"
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_OverDiv = (function(numer, denom) {
  return new ScalaJS.c.com_prealpha_pipe_math_OverDiv().init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(numer, denom)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype.unapply__Lcom_prealpha_pipe_math_OverDiv__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.numer__Lcom_prealpha_pipe_math_MathExpr(), x$0.denom__Lcom_prealpha_pipe_math_MathExpr()))
  }
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_OverDiv()
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_OverDiv(ScalaJS.as.com_prealpha_pipe_math_MathExpr(v1), ScalaJS.as.com_prealpha_pipe_math_MathExpr(v2))
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype.apply = (function(arg$1, arg$2) {
  if (ScalaJS.is.com_prealpha_pipe_math_MathExpr(arg$1)) {
    return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_OverDiv(arg$1, arg$2)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O__O(arg$1, arg$2)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_math_OverDiv__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype.unapply__Lcom_prealpha_pipe_math_OverDiv__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_math_OverDiv__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__ = (function(numer, denom) {
  return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_OverDiv(numer, denom)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_OverDiv$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_OverDiv$.prototype = ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_OverDiv$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_OverDiv$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_OverDiv$.prototype = ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype;
ScalaJS.is.com_prealpha_pipe_math_OverDiv$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_OverDiv$)))
});
ScalaJS.as.com_prealpha_pipe_math_OverDiv$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_OverDiv$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.OverDiv")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_OverDiv$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_OverDiv$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_OverDiv$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_OverDiv$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.OverDiv;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_OverDiv$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_OverDiv$: 0
}, false, "com.prealpha.pipe.math.OverDiv$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  com_prealpha_pipe_math_OverDiv$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_OverDiv$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_OverDiv$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_OverDiv = undefined;
ScalaJS.modules.com_prealpha_pipe_math_OverDiv = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_OverDiv)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_OverDiv = new ScalaJS.c.com_prealpha_pipe_math_OverDiv$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_OverDiv
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Paren$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Paren$;
ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype.toString__T = (function() {
  return "Paren"
});
ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype.apply__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Paren = (function(c) {
  return new ScalaJS.c.com_prealpha_pipe_math_Paren().init___Lscala_collection_Seq(c)
});
ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype.unapply__Lcom_prealpha_pipe_math_Paren__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.c__Lscala_collection_Seq())
  }
});
ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_Paren()
});
ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Paren(ScalaJS.as.scala_collection_Seq(v1))
});
ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.scala_collection_Seq(arg$1)) {
    return this.apply__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Paren(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_math_Paren__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype.unapply__Lcom_prealpha_pipe_math_Paren__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_math_Paren__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype.apply__Lscala_collection_Seq__ = (function(c) {
  return this.apply__Lscala_collection_Seq__Lcom_prealpha_pipe_math_Paren(c)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Paren$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Paren$.prototype = ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Paren$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_Paren$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_Paren$.prototype = ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype;
ScalaJS.is.com_prealpha_pipe_math_Paren$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Paren$)))
});
ScalaJS.as.com_prealpha_pipe_math_Paren$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Paren$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Paren")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Paren$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Paren$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Paren$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Paren$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Paren;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Paren$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Paren$: 0
}, false, "com.prealpha.pipe.math.Paren$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_Paren$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Paren$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Paren$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_Paren = undefined;
ScalaJS.modules.com_prealpha_pipe_math_Paren = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_Paren)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_Paren = new ScalaJS.c.com_prealpha_pipe_math_Paren$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_Paren
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_SideDiv$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_SideDiv$;
ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype.toString__T = (function() {
  return "SideDiv"
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SideDiv = (function(numer, denom) {
  return new ScalaJS.c.com_prealpha_pipe_math_SideDiv().init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(numer, denom)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype.unapply__Lcom_prealpha_pipe_math_SideDiv__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.numer__Lcom_prealpha_pipe_math_MathExpr(), x$0.denom__Lcom_prealpha_pipe_math_MathExpr()))
  }
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_SideDiv()
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SideDiv(ScalaJS.as.com_prealpha_pipe_math_MathExpr(v1), ScalaJS.as.com_prealpha_pipe_math_MathExpr(v2))
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype.apply = (function(arg$1, arg$2) {
  if (ScalaJS.is.com_prealpha_pipe_math_MathExpr(arg$1)) {
    return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SideDiv(arg$1, arg$2)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O__O(arg$1, arg$2)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_math_SideDiv__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype.unapply__Lcom_prealpha_pipe_math_SideDiv__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_math_SideDiv__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__ = (function(numer, denom) {
  return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SideDiv(numer, denom)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_SideDiv$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_SideDiv$.prototype = ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_SideDiv$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_SideDiv$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_SideDiv$.prototype = ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype;
ScalaJS.is.com_prealpha_pipe_math_SideDiv$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_SideDiv$)))
});
ScalaJS.as.com_prealpha_pipe_math_SideDiv$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_SideDiv$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.SideDiv")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_SideDiv$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_SideDiv$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_SideDiv$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_SideDiv$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.SideDiv;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_SideDiv$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_SideDiv$: 0
}, false, "com.prealpha.pipe.math.SideDiv$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  com_prealpha_pipe_math_SideDiv$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_SideDiv$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_SideDiv$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_SideDiv = undefined;
ScalaJS.modules.com_prealpha_pipe_math_SideDiv = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_SideDiv)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_SideDiv = new ScalaJS.c.com_prealpha_pipe_math_SideDiv$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_SideDiv
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_SubScript$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_SubScript$;
ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype.toString__T = (function() {
  return "SubScript"
});
ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SubScript = (function(normal, under) {
  return new ScalaJS.c.com_prealpha_pipe_math_SubScript().init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(normal, under)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype.unapply__Lcom_prealpha_pipe_math_SubScript__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.normal__Lcom_prealpha_pipe_math_MathExpr(), x$0.under__Lcom_prealpha_pipe_math_MathExpr()))
  }
});
ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_SubScript()
});
ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SubScript(ScalaJS.as.com_prealpha_pipe_math_MathExpr(v1), ScalaJS.as.com_prealpha_pipe_math_MathExpr(v2))
});
ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype.apply = (function(arg$1, arg$2) {
  if (ScalaJS.is.com_prealpha_pipe_math_MathExpr(arg$1)) {
    return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SubScript(arg$1, arg$2)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O__O(arg$1, arg$2)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_math_SubScript__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype.unapply__Lcom_prealpha_pipe_math_SubScript__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_math_SubScript__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__ = (function(normal, under) {
  return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SubScript(normal, under)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_SubScript$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_SubScript$.prototype = ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_SubScript$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_SubScript$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_SubScript$.prototype = ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype;
ScalaJS.is.com_prealpha_pipe_math_SubScript$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_SubScript$)))
});
ScalaJS.as.com_prealpha_pipe_math_SubScript$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_SubScript$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.SubScript")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_SubScript$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_SubScript$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_SubScript$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_SubScript$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.SubScript;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_SubScript$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_SubScript$: 0
}, false, "com.prealpha.pipe.math.SubScript$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  com_prealpha_pipe_math_SubScript$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_SubScript$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_SubScript$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_SubScript = undefined;
ScalaJS.modules.com_prealpha_pipe_math_SubScript = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_SubScript)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_SubScript = new ScalaJS.c.com_prealpha_pipe_math_SubScript$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_SubScript
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_SuperMacro$;
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype.toString__T = (function() {
  return "SuperMacro"
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype.apply__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_SuperMacro = (function(name, c) {
  return new ScalaJS.c.com_prealpha_pipe_math_SuperMacro().init___T__Lscala_collection_Seq(name, c)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype.unapply__Lcom_prealpha_pipe_math_SuperMacro__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.name__T(), x$0.c__Lscala_collection_Seq()))
  }
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_SuperMacro()
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_SuperMacro(ScalaJS.as.java_lang_String(v1), ScalaJS.as.scala_collection_Seq(v2))
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype.apply = (function(arg$1, arg$2) {
  if ((typeof(arg$1) === "string")) {
    return this.apply__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_SuperMacro(arg$1, arg$2)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O__O(arg$1, arg$2)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_math_SuperMacro__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype.unapply__Lcom_prealpha_pipe_math_SuperMacro__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_math_SuperMacro__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype.apply__T__Lscala_collection_Seq__ = (function(name, c) {
  return this.apply__T__Lscala_collection_Seq__Lcom_prealpha_pipe_math_SuperMacro(name, c)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_SuperMacro$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_SuperMacro$.prototype = ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_SuperMacro$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_SuperMacro$.prototype = ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype;
ScalaJS.is.com_prealpha_pipe_math_SuperMacro$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_SuperMacro$)))
});
ScalaJS.as.com_prealpha_pipe_math_SuperMacro$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_SuperMacro$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.SuperMacro")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_SuperMacro$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_SuperMacro$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_SuperMacro$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_SuperMacro$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.SuperMacro;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_SuperMacro$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_SuperMacro$: 0
}, false, "com.prealpha.pipe.math.SuperMacro$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  com_prealpha_pipe_math_SuperMacro$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_SuperMacro$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_SuperMacro$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_SuperMacro = undefined;
ScalaJS.modules.com_prealpha_pipe_math_SuperMacro = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_SuperMacro)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_SuperMacro = new ScalaJS.c.com_prealpha_pipe_math_SuperMacro$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_SuperMacro
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_SuperScript$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_SuperScript$;
ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype.toString__T = (function() {
  return "SuperScript"
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SuperScript = (function(normal, over) {
  return new ScalaJS.c.com_prealpha_pipe_math_SuperScript().init___Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(normal, over)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype.unapply__Lcom_prealpha_pipe_math_SuperScript__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.normal__Lcom_prealpha_pipe_math_MathExpr(), x$0.over__Lcom_prealpha_pipe_math_MathExpr()))
  }
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_SuperScript()
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SuperScript(ScalaJS.as.com_prealpha_pipe_math_MathExpr(v1), ScalaJS.as.com_prealpha_pipe_math_MathExpr(v2))
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype.apply = (function(arg$1, arg$2) {
  if (ScalaJS.is.com_prealpha_pipe_math_MathExpr(arg$1)) {
    return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SuperScript(arg$1, arg$2)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O__O(arg$1, arg$2)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_math_SuperScript__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype.unapply__Lcom_prealpha_pipe_math_SuperScript__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_math_SuperScript__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__ = (function(normal, over) {
  return this.apply__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_SuperScript(normal, over)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_SuperScript$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_SuperScript$.prototype = ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_SuperScript$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_SuperScript$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_SuperScript$.prototype = ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype;
ScalaJS.is.com_prealpha_pipe_math_SuperScript$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_SuperScript$)))
});
ScalaJS.as.com_prealpha_pipe_math_SuperScript$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_SuperScript$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.SuperScript")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_SuperScript$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_SuperScript$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_SuperScript$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_SuperScript$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.SuperScript;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_SuperScript$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_SuperScript$: 0
}, false, "com.prealpha.pipe.math.SuperScript$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  com_prealpha_pipe_math_SuperScript$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_SuperScript$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_SuperScript$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_SuperScript = undefined;
ScalaJS.modules.com_prealpha_pipe_math_SuperScript = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_SuperScript)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_SuperScript = new ScalaJS.c.com_prealpha_pipe_math_SuperScript$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_SuperScript
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_Symbol$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_Symbol$;
ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype.toString__T = (function() {
  return "Symbol"
});
ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype.apply__T__Lcom_prealpha_pipe_math_Symbol = (function(name) {
  return new ScalaJS.c.com_prealpha_pipe_math_Symbol().init___T(name)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype.unapply__Lcom_prealpha_pipe_math_Symbol__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.name__T())
  }
});
ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_math_Symbol()
});
ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lcom_prealpha_pipe_math_Symbol(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "string")) {
    return this.apply__T__Lcom_prealpha_pipe_math_Symbol(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_math_Symbol__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype.unapply__Lcom_prealpha_pipe_math_Symbol__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_math_Symbol__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype.apply__T__ = (function(name) {
  return this.apply__T__Lcom_prealpha_pipe_math_Symbol(name)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_Symbol$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_Symbol$.prototype = ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_Symbol$ = (function() {
  ScalaJS.c.com_prealpha_pipe_math_Symbol$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_math_Symbol$.prototype = ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype;
ScalaJS.is.com_prealpha_pipe_math_Symbol$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_Symbol$)))
});
ScalaJS.as.com_prealpha_pipe_math_Symbol$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_Symbol$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.Symbol")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_Symbol$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_Symbol$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_Symbol$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_Symbol$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.Symbol;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_Symbol$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_Symbol$: 0
}, false, "com.prealpha.pipe.math.Symbol$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_math_Symbol$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_Symbol$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_Symbol$;
ScalaJS.moduleInstances.com_prealpha_pipe_math_Symbol = undefined;
ScalaJS.modules.com_prealpha_pipe_math_Symbol = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_math_Symbol)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_math_Symbol = new ScalaJS.c.com_prealpha_pipe_math_Symbol$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_math_Symbol
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_math_ParseException = (function() {
  ScalaJS.c.java_lang_Exception.call(this);
  this.msg$3 = null;
  this.input$3 = null;
  this.next$3 = null
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.constructor = ScalaJS.c.com_prealpha_pipe_math_ParseException;
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.msg__T = (function() {
  return this.msg$3
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.input__O = (function() {
  return this.input$3
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.next__O = (function() {
  return this.next$3
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.copy__T__O__O__Lcom_prealpha_pipe_math_ParseException = (function(msg, input, next) {
  return new ScalaJS.c.com_prealpha_pipe_math_ParseException().init___T__O__O(msg, input, next)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.copy$default$1__T = (function() {
  return this.msg__T()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.copy$default$2__O = (function() {
  return this.input__O()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.copy$default$3__O = (function() {
  return this.next__O()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.productPrefix__T = (function() {
  return "ParseException"
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.productArity__I = (function() {
  return 3
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.msg__T();
        break
      };
    case 1:
      {
        return this.input__O();
        break
      };
    case 2:
      {
        return this.next__O();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_math_ParseException(x$1)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_math_ParseException(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var ParseException$1 = ScalaJS.as.com_prealpha_pipe_math_ParseException(x$1);
      return (((ScalaJS.anyRefEqEq(this.msg__T(), ParseException$1.msg__T()) && ScalaJS.anyEqEq(this.input__O(), ParseException$1.input__O())) && ScalaJS.anyEqEq(this.next__O(), ParseException$1.next__O())) && ParseException$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.init___T__O__O = (function(msg, input, next) {
  this.msg$3 = msg;
  this.input$3 = input;
  this.next$3 = next;
  ScalaJS.c.java_lang_Exception.prototype.init___T.call(this, ("Parse failed with message: " + msg));
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.msg = (function() {
  return this.msg__T()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.input = (function() {
  return this.input__O()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.next = (function() {
  return this.next__O()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.copy = (function(arg$1, arg$2, arg$3) {
  return this.copy__T__O__O__Lcom_prealpha_pipe_math_ParseException(arg$1, arg$2, arg$3)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.copy$default$1 = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.copy$default$2 = (function() {
  return this.copy$default$2__O()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.copy$default$3 = (function() {
  return this.copy$default$3__O()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.copy$default$3__ = (function() {
  return this.copy$default$3__O()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.copy$default$2__ = (function() {
  return this.copy$default$2__O()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.copy__T__O__O__ = (function(msg, input, next) {
  return this.copy__T__O__O__Lcom_prealpha_pipe_math_ParseException(msg, input, next)
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.next__ = (function() {
  return this.next__O()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.input__ = (function() {
  return this.input__O()
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.msg__ = (function() {
  return this.msg__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_math_ParseException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_math_ParseException.prototype = ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_math_ParseException = (function(arg$1, arg$2, arg$3) {
  ScalaJS.c.com_prealpha_pipe_math_ParseException.call(this);
  return this.init___T__O__O(arg$1, arg$2, arg$3)
});
ScalaJS.classes.com_prealpha_pipe_math_ParseException.prototype = ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype;
ScalaJS.is.com_prealpha_pipe_math_ParseException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_math_ParseException)))
});
ScalaJS.as.com_prealpha_pipe_math_ParseException = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_math_ParseException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.math.ParseException")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_math_ParseException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_math_ParseException)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_math_ParseException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_math_ParseException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.math.ParseException;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_math_ParseException = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_math_ParseException: 0
}, false, "com.prealpha.pipe.math.ParseException", ScalaJS.data.java_lang_Exception, {
  com_prealpha_pipe_math_ParseException: 1,
  scala_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_math_ParseException.prototype.$classData = ScalaJS.data.com_prealpha_pipe_math_ParseException;

//@ sourceMappingURL=blocks-intdeps.js.map
