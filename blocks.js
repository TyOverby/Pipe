ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function($$this, block, ctx) {
  var matching = ScalaJS.as.scala_collection_immutable_List(ctx.generators__Lscala_collection_immutable_List().filter__Lscala_Function1__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(block$1, ctx$1) {
    return (function(x$1) {
      return ScalaJS.bZ(x$1.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$1, ctx$1))
    })
  })(block, ctx))));
  if (matching.isEmpty__Z()) {
    throw new ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException().init___Lcom_prealpha_pipe_blocks_Block__T(block, new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["Trying to find a block Generator that matches ", " failed"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [block.toString__T()]))))
  };
  if ((matching.size__I() > 1)) {
    ScalaJS.modules.java_lang_System().err__Ljava_io_PrintStream().println__T__V((("" + new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["Multiple block Generators (", ") match ", ". "]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [matching.toString__T(), block.toString__T()])))) + new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["Going with ", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.objectToString(matching.head__O())])))))
  };
  return ScalaJS.as.com_prealpha_pipe_blocks_generators_BlockGenerator(matching.head__O()).produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2 = (function($$this, results) {
  var strMerge = ScalaJS.as.scala_collection_TraversableOnce(results.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$2) {
      return ScalaJS.as.java_lang_String(x$2._1__O())
    })
  })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).mkString__T__T("\n");
  var contexts = ScalaJS.as.scala_collection_Seq(results.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$3) {
      return ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x$3._2__O()).imports__Lscala_collection_immutable_Set()
    })
  })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  var combinedImports = ScalaJS.as.scala_collection_immutable_Set(contexts.fold__O__Lscala_Function2__O(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil()), new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction2((function() {
    return (function(a, b) {
      return ScalaJS.as.scala_collection_immutable_Set(a.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(b))
    })
  })())));
  var resultMerge = ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(ScalaJS.as.scala_collection_TraversableOnce(results.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$4) {
      return ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x$4._2__O())
    })
  })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).foldLeft__O__Lscala_Function2__O(ScalaJS.modules.com_prealpha_pipe_blocks_generators_EmptyResultContext(), new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction2((function() {
    return (function(x$5, x$6) {
      return x$5.$$plus$plus__Lcom_prealpha_pipe_blocks_generators_ResultContext__Lcom_prealpha_pipe_blocks_generators_ResultContext(x$6)
    })
  })())));
  return new ScalaJS.c.scala_Tuple2().init___O__O(strMerge, resultMerge)
});
ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V = (function($$this) {
  /*<skip>*/
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_Block = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.instance$1 = null;
  this.argLine$1 = null;
  this.level$1 = 0;
  this.lineNum$1 = 0;
  this.childLines$1 = null;
  this.childBlocks$1 = null
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_Block;
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.instance__T = (function() {
  return this.instance$1
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.argLine__T = (function() {
  return this.argLine$1
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.level__I = (function() {
  return this.level$1
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.lineNum__I = (function() {
  return this.lineNum$1
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.childLines__Lscala_collection_immutable_List = (function() {
  return this.childLines$1
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.childBlocks__Lscala_collection_immutable_List = (function() {
  return this.childBlocks$1
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy__T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lcom_prealpha_pipe_blocks_Block = (function(instance, argLine, level, lineNum, childLines, childBlocks) {
  return new ScalaJS.c.com_prealpha_pipe_blocks_Block().init___T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List(instance, argLine, level, lineNum, childLines, childBlocks)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$1__T = (function() {
  return this.instance__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$2__T = (function() {
  return this.argLine__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$3__I = (function() {
  return this.level__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$4__I = (function() {
  return this.lineNum__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$5__Lscala_collection_immutable_List = (function() {
  return this.childLines__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$6__Lscala_collection_immutable_List = (function() {
  return this.childBlocks__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.productPrefix__T = (function() {
  return "Block"
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.productArity__I = (function() {
  return 6
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.instance__T();
        break
      };
    case 1:
      {
        return this.argLine__T();
        break
      };
    case 2:
      {
        return ScalaJS.bI(this.level__I());
        break
      };
    case 3:
      {
        return ScalaJS.bI(this.lineNum__I());
        break
      };
    case 4:
      {
        return this.childLines__Lscala_collection_immutable_List();
        break
      };
    case 5:
      {
        return this.childBlocks__Lscala_collection_immutable_List();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_blocks_Block(x$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.hashCode__I = (function() {
  var acc = -889275714;
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, ScalaJS.modules.scala_runtime_Statics().anyHash__O__I(this.instance__T()));
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, ScalaJS.modules.scala_runtime_Statics().anyHash__O__I(this.argLine__T()));
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, this.level__I());
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, this.lineNum__I());
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, ScalaJS.modules.scala_runtime_Statics().anyHash__O__I(this.childLines__Lscala_collection_immutable_List()));
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, ScalaJS.modules.scala_runtime_Statics().anyHash__O__I(this.childBlocks__Lscala_collection_immutable_List()));
  return ScalaJS.modules.scala_runtime_Statics().finalizeHash__I__I__I(acc, 6)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_blocks_Block(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Block$1 = ScalaJS.as.com_prealpha_pipe_blocks_Block(x$1);
      return ((((((ScalaJS.anyRefEqEq(this.instance__T(), Block$1.instance__T()) && ScalaJS.anyRefEqEq(this.argLine__T(), Block$1.argLine__T())) && (this.level__I() === Block$1.level__I())) && (this.lineNum__I() === Block$1.lineNum__I())) && ScalaJS.anyRefEqEq(this.childLines__Lscala_collection_immutable_List(), Block$1.childLines__Lscala_collection_immutable_List())) && ScalaJS.anyRefEqEq(this.childBlocks__Lscala_collection_immutable_List(), Block$1.childBlocks__Lscala_collection_immutable_List())) && Block$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.init___T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List = (function(instance, argLine, level, lineNum, childLines, childBlocks) {
  this.instance$1 = instance;
  this.argLine$1 = argLine;
  this.level$1 = level;
  this.lineNum$1 = lineNum;
  this.childLines$1 = childLines;
  this.childBlocks$1 = childBlocks;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.instance = (function() {
  return this.instance__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.argLine = (function() {
  return this.argLine__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.level = (function() {
  return this.level__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.lineNum = (function() {
  return this.lineNum__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.childLines = (function() {
  return this.childLines__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.childBlocks = (function() {
  return this.childBlocks__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy = (function(arg$1, arg$2, arg$3, arg$4, arg$5, arg$6) {
  return this.copy__T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lcom_prealpha_pipe_blocks_Block(arg$1, arg$2, arg$3, arg$4, arg$5, arg$6)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$1 = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$2 = (function() {
  return this.copy$default$2__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$3 = (function() {
  return this.copy$default$3__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$4 = (function() {
  return this.copy$default$4__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$5 = (function() {
  return this.copy$default$5__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$6 = (function() {
  return this.copy$default$6__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$6__ = (function() {
  return this.copy$default$6__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$5__ = (function() {
  return this.copy$default$5__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$4__ = (function() {
  return ScalaJS.bI(this.copy$default$4__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$3__ = (function() {
  return ScalaJS.bI(this.copy$default$3__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$2__ = (function() {
  return this.copy$default$2__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.copy__T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List__ = (function(instance, argLine, level, lineNum, childLines, childBlocks) {
  return this.copy__T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lcom_prealpha_pipe_blocks_Block(instance, argLine, level, lineNum, childLines, childBlocks)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.childBlocks__ = (function() {
  return this.childBlocks__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.childLines__ = (function() {
  return this.childLines__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.lineNum__ = (function() {
  return ScalaJS.bI(this.lineNum__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.level__ = (function() {
  return ScalaJS.bI(this.level__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.argLine__ = (function() {
  return this.argLine__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.instance__ = (function() {
  return this.instance__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_Block = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_Block.prototype = ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_Block = (function(arg$1, arg$2, arg$3, arg$4, arg$5, arg$6) {
  ScalaJS.c.com_prealpha_pipe_blocks_Block.call(this);
  return this.init___T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List(arg$1, arg$2, arg$3, arg$4, arg$5, arg$6)
});
ScalaJS.classes.com_prealpha_pipe_blocks_Block.prototype = ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_Block = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_Block)))
});
ScalaJS.as.com_prealpha_pipe_blocks_Block = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_Block(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.Block")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_Block = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_Block)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_Block = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_Block(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.Block;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_Block = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_Block: 0
}, false, "com.prealpha.pipe.blocks.Block", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_Block: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_Block.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_Block;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.instance$1 = null;
  this.argLine$1 = null;
  this.level$1 = 0;
  this.lineNum$1 = 0;
  this.lines$1 = null;
  this.lst$1 = null
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder;
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.instance__T = (function() {
  return this.instance$1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.argLine__T = (function() {
  return this.argLine$1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.level__I = (function() {
  return this.level$1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.lineNum__I = (function() {
  return this.lineNum$1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.lines__Ljava_util_ArrayList = (function() {
  return this.lines$1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.lst__Ljava_util_ArrayList = (function() {
  return this.lst$1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.lst_$eq__Ljava_util_ArrayList__V = (function(x$1) {
  this.lst$1 = x$1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.addLine__T__V = (function(line) {
  this.lines__Ljava_util_ArrayList().add__O__Z(line)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.addChild__Lcom_prealpha_pipe_blocks_BlockBuilder__V = (function(bb) {
  this.lst__Ljava_util_ArrayList().add__O__Z(bb)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.asBlock__Lcom_prealpha_pipe_blocks_Block = (function() {
  return new ScalaJS.c.com_prealpha_pipe_blocks_Block().init___T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List(this.instance__T(), this.argLine__T(), this.level__I(), this.lineNum__I(), ScalaJS.modules.scala_collection_JavaConversions().collectionAsScalaIterable__Ljava_util_Collection__Lscala_collection_Iterable(this.lines__Ljava_util_ArrayList()).toList__Lscala_collection_immutable_List(), ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.modules.scala_collection_JavaConversions().collectionAsScalaIterable__Ljava_util_Collection__Lscala_collection_Iterable(this.lst__Ljava_util_ArrayList()).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$1) {
      return x$1.asBlock__Lcom_prealpha_pipe_blocks_Block()
    })
  })()), ScalaJS.modules.scala_collection_Iterable().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toList__Lscala_collection_immutable_List())
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.init___T__T__I__I = (function(instance, argLine, level, lineNum) {
  this.instance$1 = instance;
  this.argLine$1 = argLine;
  this.level$1 = level;
  this.lineNum$1 = lineNum;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.lines$1 = new ScalaJS.c.java_util_ArrayList().init___();
  this.lst$1 = new ScalaJS.c.java_util_ArrayList().init___();
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.instance = (function() {
  return this.instance__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.argLine = (function() {
  return this.argLine__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.level = (function() {
  return this.level__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.lineNum = (function() {
  return this.lineNum__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.lines = (function() {
  return this.lines__Ljava_util_ArrayList()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.lst = (function() {
  return this.lst__Ljava_util_ArrayList()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.lst_$eq = (function(arg$1) {
  return this.lst_$eq__Ljava_util_ArrayList__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.addLine = (function(arg$1) {
  return this.addLine__T__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.addChild = (function(arg$1) {
  return this.addChild__Lcom_prealpha_pipe_blocks_BlockBuilder__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.asBlock = (function() {
  return this.asBlock__Lcom_prealpha_pipe_blocks_Block()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.asBlock__ = (function() {
  return this.asBlock__Lcom_prealpha_pipe_blocks_Block()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.addChild__Lcom_prealpha_pipe_blocks_BlockBuilder__ = (function(bb) {
  return ScalaJS.bV(this.addChild__Lcom_prealpha_pipe_blocks_BlockBuilder__V(bb))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.addLine__T__ = (function(line) {
  return ScalaJS.bV(this.addLine__T__V(line))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.lst_$eq__Ljava_util_ArrayList__ = (function(x$1) {
  return ScalaJS.bV(this.lst_$eq__Ljava_util_ArrayList__V(x$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.lst__ = (function() {
  return this.lst__Ljava_util_ArrayList()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.lines__ = (function() {
  return this.lines__Ljava_util_ArrayList()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.lineNum__ = (function() {
  return ScalaJS.bI(this.lineNum__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.level__ = (function() {
  return ScalaJS.bI(this.level__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.argLine__ = (function() {
  return this.argLine__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.instance__ = (function() {
  return this.instance__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlockBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlockBuilder.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_BlockBuilder = (function(arg$1, arg$2, arg$3, arg$4) {
  ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.call(this);
  return this.init___T__T__I__I(arg$1, arg$2, arg$3, arg$4)
});
ScalaJS.classes.com_prealpha_pipe_blocks_BlockBuilder.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_BlockBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_BlockBuilder)))
});
ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_BlockBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.BlockBuilder")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlockBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_BlockBuilder)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_BlockBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlockBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.BlockBuilder;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_BlockBuilder = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_BlockBuilder: 0
}, false, "com.prealpha.pipe.blocks.BlockBuilder", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_BlockBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_BlockBuilder;

ScalaJS.is.com_prealpha_pipe_blocks_generators_BlockGenerator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_BlockGenerator)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_BlockGenerator = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_BlockGenerator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.BlockGenerator")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_BlockGenerator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_BlockGenerator)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_BlockGenerator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_BlockGenerator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.BlockGenerator;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_BlockGenerator = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_BlockGenerator: 0
}, true, "com.prealpha.pipe.blocks.generators.BlockGenerator", undefined, {
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$;
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype.parse__T__Lcom_prealpha_pipe_blocks_Block = (function(chunk) {
  var root = new ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder().init___T__T__I__I("_root", "", -1, 0);
  var stack = new ScalaJS.c.java_util_Stack().init___();
  var last = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.modules.scala_collection_immutable_Nil());
  stack.push__O__O(root);
  var jsx$2 = last;
  var x$1 = root;
  var jsx$1 = ScalaJS.as.scala_collection_immutable_List(last.elem$1).$$colon$colon__O__Lscala_collection_immutable_List(x$1);
  jsx$2.elem$1 = jsx$1;
  ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__AT(chunk, "\n"), 1)).zipWithIndex__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_Tuple2.getClassOf()))), 1)).withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(check$ifrefutable$1) {
      var x1 = check$ifrefutable$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var jsx$3 = true;
          break matchEnd3
        };
        var jsx$3 = false;
        break matchEnd3
      };
      return ScalaJS.bZ(jsx$3)
    })
  })())).foreach__Lscala_Function1__V(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(stack$1, last$1) {
    return (function(x$7) {
      var x1 = x$7;
      matchEnd3: {
        if ((x1 !== null)) {
          var line = ScalaJS.as.java_lang_String(x1._1__O());
          var lineNum_ = x1._2$mcI$sp__I();
          var lineNum = (lineNum_ + 1);
          var trimmed = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(line);
          if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(trimmed) === 0)) {
            var jsx$5 = new ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder();
            if ((ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(ScalaJS.as.scala_collection_immutable_List(last$1.elem$1).head__O()).level__I() !== -1)) {
              var jsx$4 = ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(ScalaJS.as.scala_collection_immutable_List(last$1.elem$1).head__O()).level__I()
            } else {
              var jsx$4 = 0
            };
            var bb = jsx$5.init___T__T__I__I("_blank", "", jsx$4, lineNum)
          } else {
            if (((ScalaJS.uC(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(trimmed)).head__O()) === 124) && (!ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(ScalaJS.uC(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(trimmed)).tail__O()))).head__O())))))) {
              var afterPipe = ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(trimmed)).tail__O()))).takeWhile__Lscala_Function1__O(new ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1().init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2(this)));
              var argList = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(trimmed)).dropWhile__Lscala_Function1__O(new ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2().init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2(this))));
              var indentLevel = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(line)).takeWhile__Lscala_Function1__O(new ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3().init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2(this))));
              if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__contains__Lscala_scalajs_runtime_RuntimeString__Ljava_lang_CharSequence__Z(afterPipe, "/")) {
                var parts = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__AT(afterPipe, "/");
                if ((parts.underlying.length < 2)) {
                  throw new ScalaJS.c.com_prealpha_pipe_blocks_ParseError().init___I__T__T(lineNum, line, "incorrectly formatted split block.")
                };
                var initial = ScalaJS.asArrayOf.com_prealpha_pipe_blocks_BlockBuilder(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(parts, 1)).init__O(), 1)).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4().init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2__I__I(this, lineNum, indentLevel), ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.com_prealpha_pipe_blocks_BlockBuilder.getClassOf()))), 1);
                ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(initial, 1)).reduceLeft__Lscala_Function2__O(new ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5().init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2(this));
                var lastBlock = new ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder().init___T__T__I__I(ScalaJS.as.java_lang_String(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(parts, 1)).last__O()), argList, indentLevel, lineNum);
                ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(initial, 1)).last__O()).addChild__Lcom_prealpha_pipe_blocks_BlockBuilder__V(lastBlock);
                var bb = ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(initial, 1)).head__O())
              } else {
                var bb = new ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder().init___T__T__I__I(afterPipe, argList, indentLevel, lineNum)
              }
            } else {
              var bb = new ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder().init___T__T__I__I("_textline", line, ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(line)).takeWhile__Lscala_Function1__O(new ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6().init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2(this)))), lineNum)
            }
          };
          ScalaJS.modules.com_prealpha_pipe_blocks_BlocksParser().com$prealpha$pipe$blocks$BlocksParser$$insertNode$1__Lcom_prealpha_pipe_blocks_BlockBuilder__T__Ljava_util_Stack__Lscala_runtime_ObjectRef__V(bb, line, stack$1, last$1);
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      return ScalaJS.bV(undefined)
    })
  })(stack, last)));
  return this.com$prealpha$pipe$blocks$BlocksParser$$coalesce__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder(root).asBlock__Lcom_prealpha_pipe_blocks_Block()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype.com$prealpha$pipe$blocks$BlocksParser$$coalesce__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder = (function(root) {
  var insideText = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(false);
  var bb = new ScalaJS.c.scala_runtime_ObjectRef().init___O(null);
  var lst = new ScalaJS.c.java_util_ArrayList().init___();
  ScalaJS.modules.scala_collection_JavaConversions().collectionAsScalaIterable__Ljava_util_Collection__Lscala_collection_Iterable(root.lst__Ljava_util_ArrayList()).withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(check$ifrefutable$2) {
      var x1 = check$ifrefutable$2;
      matchEnd4: {
        if ((x1 !== null)) {
          var jsx$6 = true;
          break matchEnd4
        };
        var jsx$6 = false;
        break matchEnd4
      };
      return ScalaJS.bZ(jsx$6)
    })
  })())).foreach__Lscala_Function1__V(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(insideText$1, bb$1, lst$1) {
    return (function(child) {
      if (ScalaJS.anyRefEqEq(child.instance__T(), "_textline")) {
        if (insideText$1.elem$1) {
          ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(bb$1.elem$1).addLine__T__V(child.argLine__T());
          var jsx$8 = ScalaJS.modules.scala_collection_JavaConversions().collectionAsScalaIterable__Ljava_util_Collection__Lscala_collection_Iterable(child.lst__Ljava_util_ArrayList());
          var eta$0$1 = ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(bb$1.elem$1);
          var jsx$7 = new ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1().init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$8__Lcom_prealpha_pipe_blocks_BlockBuilder(this, eta$0$1);
          jsx$8.foreach__Lscala_Function1__V(jsx$7);
          return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        } else {
          insideText$1.elem$1 = true;
          bb$1.elem$1 = new ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder().init___T__T__I__I("_text", "", child.level__I(), child.lineNum__I());
          ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(bb$1.elem$1).addLine__T__V(child.argLine__T());
          var jsx$10 = ScalaJS.modules.scala_collection_JavaConversions().collectionAsScalaIterable__Ljava_util_Collection__Lscala_collection_Iterable(child.lst__Ljava_util_ArrayList());
          var eta$0$2 = ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(bb$1.elem$1);
          var jsx$9 = new ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2().init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$8__Lcom_prealpha_pipe_blocks_BlockBuilder(this, eta$0$2);
          jsx$10.foreach__Lscala_Function1__V(jsx$9);
          return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        }
      } else {
        if (insideText$1.elem$1) {
          insideText$1.elem$1 = false;
          var jsx$11 = lst$1.add__O__Z(ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(bb$1.elem$1));
          ScalaJS.bZ(jsx$11)
        } else {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        };
        if ((!ScalaJS.anyRefEqEq(child.instance__T(), "_blank"))) {
          return ScalaJS.bZ(lst$1.add__O__Z(ScalaJS.modules.com_prealpha_pipe_blocks_BlocksParser().com$prealpha$pipe$blocks$BlocksParser$$coalesce__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder(child)))
        } else {
          return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        }
      }
    })
  })(insideText, bb, lst)));
  var merged = ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  if (insideText.elem$1) {
    ScalaJS.bZ(lst.add__O__Z(ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(bb.elem$1)))
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  root.lst_$eq__Ljava_util_ArrayList__V(lst);
  return root
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype.com$prealpha$pipe$blocks$BlocksParser$$insertNode$1__Lcom_prealpha_pipe_blocks_BlockBuilder__T__Ljava_util_Stack__Lscala_runtime_ObjectRef__V = (function(block, line, stack$1, last$1) {
  while ((ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(stack$1.peek__O()).level__I() >= block.level__I())) {
    stack$1.pop__O()
  };
  ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(stack$1.peek__O()).addChild__Lcom_prealpha_pipe_blocks_BlockBuilder__V(block);
  ScalaJS.modules.scala_collection_JavaConversions().collectionAsScalaIterable__Ljava_util_Collection__Lscala_collection_Iterable(stack$1).foreach__Lscala_Function1__V(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(line$1) {
    return (function(b) {
      b.addLine__T__V(line$1);
      return ScalaJS.bV(undefined)
    })
  })(line)));
  stack$1.push__O__O(block);
  var jsx$13 = last$1;
  var x$2 = block;
  var jsx$12 = ScalaJS.as.scala_collection_immutable_List(last$1.elem$1).$$colon$colon__O__Lscala_collection_immutable_List(x$2);
  jsx$13.elem$1 = jsx$12
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype.parse = (function(arg$1) {
  return this.parse__T__Lcom_prealpha_pipe_blocks_Block(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype.com$prealpha$pipe$blocks$BlocksParser$$coalesce = (function(arg$1) {
  return this.com$prealpha$pipe$blocks$BlocksParser$$coalesce__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype.com$prealpha$pipe$blocks$BlocksParser$$insertNode$1 = (function(arg$1, arg$2, arg$3, arg$4) {
  return this.com$prealpha$pipe$blocks$BlocksParser$$insertNode$1__Lcom_prealpha_pipe_blocks_BlockBuilder__T__Ljava_util_Stack__Lscala_runtime_ObjectRef__V(arg$1, arg$2, arg$3, arg$4)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype.com$prealpha$pipe$blocks$BlocksParser$$insertNode$1__Lcom_prealpha_pipe_blocks_BlockBuilder__T__Ljava_util_Stack__Lscala_runtime_ObjectRef__ = (function(block, line, stack$1, last$1) {
  return ScalaJS.bV(this.com$prealpha$pipe$blocks$BlocksParser$$insertNode$1__Lcom_prealpha_pipe_blocks_BlockBuilder__T__Ljava_util_Stack__Lscala_runtime_ObjectRef__V(block, line, stack$1, last$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype.com$prealpha$pipe$blocks$BlocksParser$$coalesce__Lcom_prealpha_pipe_blocks_BlockBuilder__ = (function(root) {
  return this.com$prealpha$pipe$blocks$BlocksParser$$coalesce__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder(root)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype.parse__T__ = (function(chunk) {
  return this.parse__T__Lcom_prealpha_pipe_blocks_Block(chunk)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_BlocksParser$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_BlocksParser$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.BlocksParser")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_BlocksParser$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_BlocksParser$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.BlocksParser;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_BlocksParser$: 0
}, false, "com.prealpha.pipe.blocks.BlocksParser$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_BlocksParser$: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_BlocksParser = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_BlocksParser = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_BlocksParser)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_BlocksParser = new ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_BlocksParser
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.generators$1 = null;
  this.settings$1 = null
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext;
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.generators__Lscala_collection_immutable_List = (function() {
  return this.generators$1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.settings__Lscala_collection_immutable_Map = (function() {
  return this.settings$1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.copy__Lscala_collection_immutable_List__Lscala_collection_immutable_Map__Lcom_prealpha_pipe_blocks_generators_CompileContext = (function(generators, settings) {
  return new ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext().init___Lscala_collection_immutable_List__Lscala_collection_immutable_Map(generators, settings)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.copy$default$1__Lscala_collection_immutable_List = (function() {
  return this.generators__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.copy$default$2__Lscala_collection_immutable_Map = (function() {
  return this.settings__Lscala_collection_immutable_Map()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.productPrefix__T = (function() {
  return "CompileContext"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.generators__Lscala_collection_immutable_List();
        break
      };
    case 1:
      {
        return this.settings__Lscala_collection_immutable_Map();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_blocks_generators_CompileContext(x$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_blocks_generators_CompileContext(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var CompileContext$1 = ScalaJS.as.com_prealpha_pipe_blocks_generators_CompileContext(x$1);
      return ((ScalaJS.anyRefEqEq(this.generators__Lscala_collection_immutable_List(), CompileContext$1.generators__Lscala_collection_immutable_List()) && ScalaJS.anyRefEqEq(this.settings__Lscala_collection_immutable_Map(), CompileContext$1.settings__Lscala_collection_immutable_Map())) && CompileContext$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.init___Lscala_collection_immutable_List__Lscala_collection_immutable_Map = (function(generators, settings) {
  this.generators$1 = generators;
  this.settings$1 = settings;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.generators = (function() {
  return this.generators__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.settings = (function() {
  return this.settings__Lscala_collection_immutable_Map()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.copy = (function(arg$1, arg$2) {
  return this.copy__Lscala_collection_immutable_List__Lscala_collection_immutable_Map__Lcom_prealpha_pipe_blocks_generators_CompileContext(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.copy$default$1 = (function() {
  return this.copy$default$1__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.copy$default$2 = (function() {
  return this.copy$default$2__Lscala_collection_immutable_Map()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.copy$default$2__ = (function() {
  return this.copy$default$2__Lscala_collection_immutable_Map()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.copy__Lscala_collection_immutable_List__Lscala_collection_immutable_Map__ = (function(generators, settings) {
  return this.copy__Lscala_collection_immutable_List__Lscala_collection_immutable_Map__Lcom_prealpha_pipe_blocks_generators_CompileContext(generators, settings)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.settings__ = (function() {
  return this.settings__Lscala_collection_immutable_Map()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.generators__ = (function() {
  return this.generators__Lscala_collection_immutable_List()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_CompileContext = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_CompileContext.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_CompileContext = (function(arg$1, arg$2) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.call(this);
  return this.init___Lscala_collection_immutable_List__Lscala_collection_immutable_Map(arg$1, arg$2)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_CompileContext.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_CompileContext = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_CompileContext)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_CompileContext = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_CompileContext(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.CompileContext")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_CompileContext = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_CompileContext)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_CompileContext = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_CompileContext(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.CompileContext;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_CompileContext = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_CompileContext: 0
}, false, "com.prealpha.pipe.blocks.generators.CompileContext", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_CompileContext: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_CompileContext;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  var lines = block.childLines__Lscala_collection_immutable_List();
  var x1 = ScalaJS.as.scala_collection_TraversableLike(lines.filter__Lscala_Function1__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$1) {
      return ScalaJS.bZ(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(x$1)).exists__Lscala_Function1__Z(new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1().init___Lcom_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1(this)))
    })
  })()))).partition__Lscala_Function1__Lscala_Tuple2(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$3) {
      return ScalaJS.bZ(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__contains__Lscala_scalajs_runtime_RuntimeString__Ljava_lang_CharSequence__Z(x$3, "="))
    })
  })()));
  matchEnd3: {
    if ((x1 !== null)) {
      var valid = ScalaJS.as.scala_collection_immutable_List(x1._1__O());
      var invalid = ScalaJS.as.scala_collection_immutable_List(x1._2__O());
      var x$4 = new ScalaJS.c.scala_Tuple2().init___O__O(valid, invalid);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var valid$2 = ScalaJS.as.scala_collection_immutable_List(x$4._1__O());
  var invalid$2 = ScalaJS.as.scala_collection_immutable_List(x$4._2__O());
  invalid$2.foreach__Lscala_Function1__V(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(s) {
      ScalaJS.modules.scala_Console().err__Ljava_io_PrintStream().println__T__V(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["Warning! ", " is not a valid setting"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [s]))));
      return ScalaJS.bV(undefined)
    })
  })()));
  var settings = ScalaJS.as.scala_collection_immutable_List(ScalaJS.as.scala_collection_TraversableLike(ScalaJS.as.scala_collection_TraversableLike(ScalaJS.as.scala_collection_TraversableLike(valid$2.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$5) {
      return ScalaJS.as.scala_collection_immutable_List(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__AT(x$5, "="), 1)).toList__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2().init___Lcom_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3(this), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
    })
  })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x0$1) {
      var rc31 = false;
      var x4 = null;
      var x1 = x0$1;
      if (ScalaJS.is.scala_collection_immutable_$colon$colon(x1)) {
        rc31 = true;
        x4 = ScalaJS.as.scala_collection_immutable_$colon$colon(x1);
        var p2 = ScalaJS.as.java_lang_String(x4.hd$1__O());
        var p3 = x4.tl$1__Lscala_collection_immutable_List();
        if (ScalaJS.anyRefEqEq("author", p2)) {
          if (ScalaJS.is.scala_collection_immutable_$colon$colon(p3)) {
            var x6 = ScalaJS.as.scala_collection_immutable_$colon$colon(p3);
            var name = ScalaJS.as.java_lang_String(x6.hd$1__O());
            var p5 = x6.tl$1__Lscala_collection_immutable_List();
            if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_Nil(), p5)) {
              return new ScalaJS.c.scala_Some().init___O((("\\author{" + name) + "}"))
            }
          }
        }
      };
      if (rc31) {
        var p7 = ScalaJS.as.java_lang_String(x4.hd$1__O());
        var p8 = x4.tl$1__Lscala_collection_immutable_List();
        if (ScalaJS.anyRefEqEq("title", p7)) {
          if (ScalaJS.is.scala_collection_immutable_$colon$colon(p8)) {
            var x11 = ScalaJS.as.scala_collection_immutable_$colon$colon(p8);
            var title = ScalaJS.as.java_lang_String(x11.hd$1__O());
            var p10 = x11.tl$1__Lscala_collection_immutable_List();
            if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_Nil(), p10)) {
              return new ScalaJS.c.scala_Some().init___O((("\\title{" + title) + "}"))
            }
          }
        }
      };
      if (rc31) {
        var p12 = ScalaJS.as.java_lang_String(x4.hd$1__O());
        var p13 = x4.tl$1__Lscala_collection_immutable_List();
        if (ScalaJS.anyRefEqEq("date", p12)) {
          if (ScalaJS.is.scala_collection_immutable_$colon$colon(p13)) {
            var x16 = ScalaJS.as.scala_collection_immutable_$colon$colon(p13);
            var date = ScalaJS.as.java_lang_String(x16.hd$1__O());
            var p15 = x16.tl$1__Lscala_collection_immutable_List();
            if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_Nil(), p15)) {
              return new ScalaJS.c.scala_Some().init___O((("\\date{" + date) + "}"))
            }
          }
        }
      };
      if (rc31) {
        var p17 = ScalaJS.as.java_lang_String(x4.hd$1__O());
        var p18 = x4.tl$1__Lscala_collection_immutable_List();
        if (ScalaJS.anyRefEqEq("margin", p17)) {
          if (ScalaJS.is.scala_collection_immutable_$colon$colon(p18)) {
            var x21 = ScalaJS.as.scala_collection_immutable_$colon$colon(p18);
            var size = ScalaJS.as.java_lang_String(x21.hd$1__O());
            var p20 = x21.tl$1__Lscala_collection_immutable_List();
            if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_Nil(), p20)) {
              return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\usepackage[", "]{geometry}"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [size]))))
            }
          }
        }
      };
      return ScalaJS.modules.scala_None()
    })
  })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).filter__Lscala_Function1__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$7) {
      return ScalaJS.bZ(x$7.isDefined__Z())
    })
  })()))).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$8) {
      return ScalaJS.as.java_lang_String(x$8.get__O())
    })
  })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  if (settings.isEmpty__Z()) {
    var postBody = ScalaJS.modules.scala_collection_immutable_Nil()
  } else {
    var postBody = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\maketitle"]), 1)))
  };
  return new ScalaJS.c.scala_Tuple2().init___O__O("", new ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext().init___Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil())), settings.toSet__Lscala_collection_immutable_Set(), postBody.toSet__Lscala_collection_immutable_Set()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), "document")
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_DocumentBlock = this;
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$2, ctx$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$3, ctx$3)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.DocumentBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.DocumentBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_DocumentBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.DocumentBlock$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_DocumentBlock$: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_DocumentBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_DocumentBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_DocumentBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_DocumentBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_DocumentBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.hasLines$1 = false;
  this.sb$1 = null;
  this.executionStart$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.scala$App$$_args$1 = null;
  this.scala$App$$initCode$1 = null
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$;
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.executionStart__J = (function() {
  return this.executionStart$1
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$$_args__AT = (function() {
  return this.scala$App$$_args$1
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$$_args_$eq__AT__V = (function(x$1) {
  this.scala$App$$_args$1 = x$1
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$$initCode__Lscala_collection_mutable_ListBuffer = (function() {
  return this.scala$App$$initCode$1
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$_setter_$executionStart_$eq__J__V = (function(x$1) {
  this.executionStart$1 = x$1
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$_setter_$scala$App$$initCode_$eq__Lscala_collection_mutable_ListBuffer__V = (function(x$1) {
  this.scala$App$$initCode$1 = x$1
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.args__AT = (function() {
  return ScalaJS.impls.scala_App$class__args__Lscala_App__AT(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.delayedInit__Lscala_Function0__V = (function(body) {
  ScalaJS.impls.scala_App$class__delayedInit__Lscala_App__Lscala_Function0__V(this, body)
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.main__AT__V = (function(args) {
  ScalaJS.impls.scala_App$class__main__Lscala_App__AT__V(this, args)
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.hasLines__Z = (function() {
  return this.hasLines$1
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.hasLines_$eq__Z__V = (function(x$1) {
  this.hasLines$1 = x$1
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.sb__Lscala_collection_mutable_StringBuilder = (function() {
  return this.sb$1
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.sb_$eq__Lscala_collection_mutable_StringBuilder__V = (function(x$1) {
  this.sb$1 = x$1
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_EntryPoint = this;
  ScalaJS.impls.scala_App$class__$init$__Lscala_App__V(this);
  this.delayedInit__Lscala_Function0__V(new ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body().init___Lcom_prealpha_pipe_blocks_EntryPoint$(this));
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.hasLines = (function() {
  return this.hasLines__Z()
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.hasLines_$eq = (function(arg$1) {
  return this.hasLines_$eq__Z__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.sb = (function() {
  return this.sb__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.executionStart = (function() {
  return this.executionStart__J()
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$$_args = (function() {
  return this.scala$App$$_args__AT()
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$$_args_$eq = (function(arg$1) {
  return this.scala$App$$_args_$eq__AT__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$$initCode = (function() {
  return this.scala$App$$initCode__Lscala_collection_mutable_ListBuffer()
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$_setter_$executionStart_$eq = (function(arg$1) {
  return this.scala$App$_setter_$executionStart_$eq__J__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$_setter_$scala$App$$initCode_$eq = (function(arg$1) {
  return this.scala$App$_setter_$scala$App$$initCode_$eq__Lscala_collection_mutable_ListBuffer__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.args = (function() {
  return this.args__AT()
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.delayedInit = (function(arg$1) {
  return this.delayedInit__Lscala_Function0__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.main = (function(arg$1) {
  return this.main__AT__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.main__AT__ = (function(args) {
  return ScalaJS.bV(this.main__AT__V(args))
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.delayedInit__Lscala_Function0__ = (function(body) {
  return ScalaJS.bV(this.delayedInit__Lscala_Function0__V(body))
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.args__ = (function() {
  return this.args__AT()
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$_setter_$scala$App$$initCode_$eq__Lscala_collection_mutable_ListBuffer__ = (function(x$1) {
  return ScalaJS.bV(this.scala$App$_setter_$scala$App$$initCode_$eq__Lscala_collection_mutable_ListBuffer__V(x$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$_setter_$executionStart_$eq__J__ = (function(x$1$2) {
  return ScalaJS.bV(this.scala$App$_setter_$executionStart_$eq__J__V(x$1$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$$initCode__ = (function() {
  return this.scala$App$$initCode__Lscala_collection_mutable_ListBuffer()
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$$_args_$eq__AT__ = (function(x$1$3) {
  return ScalaJS.bV(this.scala$App$$_args_$eq__AT__V(x$1$3))
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.scala$App$$_args__ = (function() {
  return this.scala$App$$_args__AT()
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.executionStart__ = (function() {
  return ScalaJS.bJ(this.executionStart__J())
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.sb_$eq__Lscala_collection_mutable_StringBuilder__ = (function(x$1$4) {
  return ScalaJS.bV(this.sb_$eq__Lscala_collection_mutable_StringBuilder__V(x$1$4))
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.sb__ = (function() {
  return this.sb__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.hasLines_$eq__Z__ = (function(x$1$5) {
  return ScalaJS.bV(this.hasLines_$eq__Z__V(x$1$5))
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.hasLines__ = (function() {
  return ScalaJS.bZ(this.hasLines__Z())
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_EntryPoint$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_EntryPoint$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_EntryPoint$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_EntryPoint$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_EntryPoint$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_EntryPoint$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_EntryPoint$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_EntryPoint$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.EntryPoint")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_EntryPoint$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_EntryPoint$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_EntryPoint$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_EntryPoint$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.EntryPoint;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_EntryPoint$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_EntryPoint$: 0
}, false, "com.prealpha.pipe.blocks.EntryPoint$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_EntryPoint$: 1,
  scala_App: 1,
  scala_DelayedInit: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_EntryPoint$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_EntryPoint = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_EntryPoint = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_EntryPoint)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_EntryPoint = new ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_EntryPoint
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.processAlign__Lscala_collection_Seq__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_Seq = (function(maths, alignTo) {
  return ScalaJS.as.scala_collection_Seq(maths.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(alignTo$1) {
    return (function(a) {
      return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_EquationBlock().processAlignOne__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(a, alignTo$1)
    })
  })(alignTo)), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.processAlignOne__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr = (function(math, alignTo) {
  var x1 = math;
  if (ScalaJS.anyRefEqEq(x1, alignTo)) {
    return new ScalaJS.c.com_prealpha_pipe_math_Align().init___Lcom_prealpha_pipe_math_MathExpr(x1)
  };
  if (ScalaJS.is.com_prealpha_pipe_math_Paren(x1)) {
    var x2 = ScalaJS.as.com_prealpha_pipe_math_Paren(x1);
    var xs = x2.c__Lscala_collection_Seq();
    return new ScalaJS.c.com_prealpha_pipe_math_Paren().init___Lscala_collection_Seq(this.processAlign__Lscala_collection_Seq__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_Seq(xs, alignTo))
  };
  if (ScalaJS.is.com_prealpha_pipe_math_Macro(x1)) {
    var x3 = ScalaJS.as.com_prealpha_pipe_math_Macro(x1);
    var n = x3.name__T();
    var o = x3.c__Lscala_collection_Seq();
    if (ScalaJS.is.scala_collection_Seq(o)) {
      var x5 = o;
      return new ScalaJS.c.com_prealpha_pipe_math_Macro().init___T__Lscala_collection_Seq(n, ScalaJS.as.scala_collection_Seq(x5.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(alignTo$2) {
        return (function(a) {
          return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_EquationBlock().processAlign__Lscala_collection_Seq__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_Seq(ScalaJS.as.scala_collection_Seq(a), alignTo$2)
        })
      })(alignTo)), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())))
    }
  };
  if (ScalaJS.is.com_prealpha_pipe_math_SuperMacro(x1)) {
    var x4 = ScalaJS.as.com_prealpha_pipe_math_SuperMacro(x1);
    var n$2 = x4.name__T();
    var o$2 = x4.c__Lscala_collection_Seq();
    if (ScalaJS.is.scala_collection_Seq(o$2)) {
      var x6 = o$2;
      return new ScalaJS.c.com_prealpha_pipe_math_SuperMacro().init___T__Lscala_collection_Seq(n$2, ScalaJS.as.scala_collection_Seq(x6.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2().init___Lcom_prealpha_pipe_math_MathExpr(alignTo), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())))
    }
  };
  return x1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), "equation")
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  var args = ScalaJS.as.scala_collection_immutable_List(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__AT(block.argLine__T(), "\\s+"), 1)).toList__Lscala_collection_immutable_List().filter__Lscala_Function1__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$2) {
      return ScalaJS.bZ((!ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__isEmpty__Lscala_scalajs_runtime_RuntimeString__Z(x$2)))
    })
  })())));
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var numbered = args.contains__O__Z("numbered");
  var jsx$3 = sb;
  if (numbered) {
    var jsx$2 = "\\begin{align}"
  } else {
    var jsx$2 = "\\begin{align*}"
  };
  var jsx$1 = jsx$3.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(jsx$2);
  jsx$1.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("\n");
  if (args.isEmpty__Z()) {
    var alignOn = ScalaJS.modules.com_prealpha_pipe_math_Never()
  } else {
    var alignOn = ScalaJS.as.com_prealpha_pipe_math_MathExpr(ScalaJS.as.scala_collection_SeqLike(ScalaJS.modules.com_prealpha_pipe_math_MathParser().tryParse__T__Lscala_util_Try(ScalaJS.as.java_lang_String(args.apply__I__O(0))).getOrElse__Lscala_Function0__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
      return (function() {
        return ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_collection_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.com_prealpha_pipe_math_Never$.getArrayOf(), [ScalaJS.modules.com_prealpha_pipe_math_Never()]), 1))))
      })
    })()))).apply__I__O(0))
  };
  var alignedLines = ScalaJS.as.scala_collection_immutable_List(ScalaJS.as.scala_collection_TraversableLike(block.childLines__Lscala_collection_immutable_List().withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(rawLine) {
      return ScalaJS.bZ(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(rawLine)).exists__Lscala_Function1__Z(new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2().init___Lcom_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3(this)))
    })
  })())).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(rawLine) {
      var compLine = ScalaJS.as.scala_collection_Seq(ScalaJS.modules.com_prealpha_pipe_math_MathParser().tryParse__T__Lscala_util_Try(rawLine).get__O());
      return new ScalaJS.c.scala_Tuple2().init___O__O(rawLine, compLine)
    })
  })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(alignOn$1) {
    return (function(x$4) {
      var x1 = x$4;
      if ((x1 !== null)) {
        var compLine = ScalaJS.as.scala_collection_Seq(x1._2__O());
        return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_EquationBlock().processAlign__Lscala_collection_Seq__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_Seq(compLine, alignOn$1)
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })(alignOn)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  var compiledLines = ScalaJS.as.scala_collection_immutable_List(alignedLines.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(line) {
      return ScalaJS.modules.com_prealpha_pipe_math_CodeGen().genEntire__Lscala_collection_Seq__T(line)
    })
  })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  sb.append__T__Lscala_collection_mutable_StringBuilder(compiledLines.mkString__T__T(" \\\\\n"));
  sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("\n");
  var jsx$5 = sb;
  if (numbered) {
    var jsx$4 = "\\end{align}"
  } else {
    var jsx$4 = "\\end{align*}"
  };
  jsx$5.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(jsx$4);
  return new ScalaJS.c.scala_Tuple2().init___O__O(sb.toString__T(), new ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext().init___Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["amsmath"]), 1)))), ScalaJS.modules.com_prealpha_pipe_blocks_generators_ResultContext().apply$default$2__Lscala_collection_immutable_Set(), ScalaJS.modules.com_prealpha_pipe_blocks_generators_ResultContext().apply$default$3__Lscala_collection_immutable_Set()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_EquationBlock = this;
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.processAlign = (function(arg$1, arg$2) {
  return this.processAlign__Lscala_collection_Seq__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_Seq(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.processAlignOne = (function(arg$1, arg$2) {
  return this.processAlignOne__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$2, ctx$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$3, ctx$3))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.processAlignOne__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__ = (function(math, alignTo) {
  return this.processAlignOne__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr__Lcom_prealpha_pipe_math_MathExpr(math, alignTo)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.processAlign__Lscala_collection_Seq__Lcom_prealpha_pipe_math_MathExpr__ = (function(maths, alignTo$2) {
  return this.processAlign__Lscala_collection_Seq__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_Seq(maths, alignTo$2)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_EquationBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_EquationBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_EquationBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_EquationBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_EquationBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_EquationBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.EquationBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_EquationBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_EquationBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_EquationBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_EquationBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.EquationBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_EquationBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_EquationBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.EquationBlock$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_EquationBlock$: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_EquationBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_EquationBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_EquationBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_EquationBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_EquationBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_EquationBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  sb.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\", "{"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.envName__T()]))));
  var x1 = this.merge__Lscala_collection_Seq__Lscala_Tuple2(ScalaJS.as.scala_collection_Seq(block.childBlocks__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(arg$outer, ctx$1) {
    return (function(block) {
      return arg$outer.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx$1)
    })
  })(this, ctx)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())));
  matchEnd3: {
    if ((x1 !== null)) {
      var inner = ScalaJS.as.java_lang_String(x1._1__O());
      var ret = ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x1._2__O());
      var x$1 = new ScalaJS.c.scala_Tuple2().init___O__O(inner, ret);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var inner$2 = ScalaJS.as.java_lang_String(x$1._1__O());
  var ret$2 = ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x$1._2__O());
  sb.append__T__Lscala_collection_mutable_StringBuilder(block.argLine__T());
  sb.append__T__Lscala_collection_mutable_StringBuilder(inner$2);
  sb.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["}"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_collection_immutable_Nil()));
  return new ScalaJS.c.scala_Tuple2().init___O__O(sb.toString__T(), ret$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), this.fullName__T())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.fullName = (function() {
  return this.fullName__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.envName = (function() {
  return this.envName__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$2, ctx$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$3, ctx$3)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.envName__ = (function() {
  return this.envName__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.fullName__ = (function() {
  return this.fullName__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_FontBlock = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_FontBlock = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_FontBlock = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_FontBlock)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_FontBlock = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_FontBlock(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.FontBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_FontBlock = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_FontBlock)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_FontBlock = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_FontBlock(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.FontBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_FontBlock = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_FontBlock: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.FontBlock", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_FontBlock: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_FontBlock;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.whiteSpace$1 = null;
  this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar$1 = null;
  this.Success$module$1 = null;
  this.bitmap$0$1 = false;
  this.NoSuccess$module$1 = null;
  this.Failure$module$1 = null;
  this.Error$module$1 = null;
  this.$$tilde$module$1 = null
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$;
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.whiteSpace__Lscala_util_matching_Regex = (function() {
  return this.whiteSpace$1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$RegexParsers$$super$positioned__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__positioned__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$RegexParsers$$super$phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__phrase__Lscala_util_parsing_combinator_Parsers__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$RegexParsers$_setter_$whiteSpace_$eq__Lscala_util_matching_Regex__V = (function(x$1) {
  this.whiteSpace$1 = x$1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.handleWhiteSpace__Ljava_lang_CharSequence__I__I = (function(source, offset) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__handleWhiteSpace__Lscala_util_parsing_combinator_RegexParsers__Ljava_lang_CharSequence__I__I(this, source, offset)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.literal__T__Lscala_util_parsing_combinator_Parsers$Parser = (function(s) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__literal__Lscala_util_parsing_combinator_RegexParsers__T__Lscala_util_parsing_combinator_Parsers$Parser(this, s)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser = (function(r) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__regex__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(this, r)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.positioned__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__positioned__Lscala_util_parsing_combinator_RegexParsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__phrase__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parse__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(p, in$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__parse__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(this, p, in$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(p, in$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__parse__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult(this, p, in$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(p, in$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__parse__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(this, p, in$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(p, in$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__parseAll__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(this, p, in$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(p, in$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__parseAll__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(this, p, in$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(p, in$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__parseAll__Lscala_util_parsing_combinator_RegexParsers__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult(this, p, in$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Success$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$Success$ = (function() {
  if ((this.Success$module$1 === null)) {
    this.Success$module$1 = new ScalaJS.c.scala_util_parsing_combinator_Parsers$Success$().init___Lscala_util_parsing_combinator_Parsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Success$module$1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Success__Lscala_util_parsing_combinator_Parsers$Success$ = (function() {
  if ((this.Success$module$1 === null)) {
    return this.Success$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$Success$()
  } else {
    return this.Success$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar$lzycompute__p1__Lscala_util_DynamicVariable = (function() {
  if ((!this.bitmap$0$1)) {
    this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar$1 = ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__scala$util$parsing$combinator$Parsers$$lastNoSuccessVar__Lscala_util_parsing_combinator_Parsers__Lscala_util_DynamicVariable(this);
    this.bitmap$0$1 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar$1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar__Lscala_util_DynamicVariable = (function() {
  if ((!this.bitmap$0$1)) {
    return this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar$lzycompute__p1__Lscala_util_DynamicVariable()
  } else {
    return this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar$1
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.NoSuccess$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$NoSuccess$ = (function() {
  if ((this.NoSuccess$module$1 === null)) {
    this.NoSuccess$module$1 = new ScalaJS.c.scala_util_parsing_combinator_Parsers$NoSuccess$().init___Lscala_util_parsing_combinator_Parsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.NoSuccess$module$1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.NoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess$ = (function() {
  if ((this.NoSuccess$module$1 === null)) {
    return this.NoSuccess$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$NoSuccess$()
  } else {
    return this.NoSuccess$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Failure$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$Failure$ = (function() {
  if ((this.Failure$module$1 === null)) {
    this.Failure$module$1 = new ScalaJS.c.scala_util_parsing_combinator_Parsers$Failure$().init___Lscala_util_parsing_combinator_Parsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Failure$module$1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Failure__Lscala_util_parsing_combinator_Parsers$Failure$ = (function() {
  if ((this.Failure$module$1 === null)) {
    return this.Failure$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$Failure$()
  } else {
    return this.Failure$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Error$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$Error$ = (function() {
  if ((this.Error$module$1 === null)) {
    this.Error$module$1 = new ScalaJS.c.scala_util_parsing_combinator_Parsers$Error$().init___Lscala_util_parsing_combinator_Parsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Error$module$1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Error__Lscala_util_parsing_combinator_Parsers$Error$ = (function() {
  if ((this.Error$module$1 === null)) {
    return this.Error$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$Error$()
  } else {
    return this.Error$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.$$tilde$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$$tilde$ = (function() {
  if ((this.$$tilde$module$1 === null)) {
    this.$$tilde$module$1 = new ScalaJS.c.scala_util_parsing_combinator_Parsers$$tilde$().init___Lscala_util_parsing_combinator_Parsers(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.$$tilde$module$1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.$$tilde__Lscala_util_parsing_combinator_Parsers$$tilde$ = (function() {
  if ((this.$$tilde$module$1 === null)) {
    return this.$$tilde$lzycompute__p1__Lscala_util_parsing_combinator_Parsers$$tilde$()
  } else {
    return this.$$tilde$module$1
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.lastNoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess = (function() {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__lastNoSuccess__Lscala_util_parsing_combinator_Parsers__Lscala_util_parsing_combinator_Parsers$NoSuccess(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.lastNoSuccess_$eq__Lscala_util_parsing_combinator_Parsers$NoSuccess__V = (function(x) {
  ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__lastNoSuccess_$eq__Lscala_util_parsing_combinator_Parsers__Lscala_util_parsing_combinator_Parsers$NoSuccess__V(this, x)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Parser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser = (function(f) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__Parser__Lscala_util_parsing_combinator_Parsers__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(this, f)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.OnceParser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$OnceParser = (function(f) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__OnceParser__Lscala_util_parsing_combinator_Parsers__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$OnceParser(this, f)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.commit__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__commit__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.elem__T__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser = (function(kind, p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__elem__Lscala_util_parsing_combinator_Parsers__T__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(this, kind, p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.elem__O__Lscala_util_parsing_combinator_Parsers$Parser = (function(e) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__elem__Lscala_util_parsing_combinator_Parsers__O__Lscala_util_parsing_combinator_Parsers$Parser(this, e)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.accept__O__Lscala_util_parsing_combinator_Parsers$Parser = (function(e) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__accept__Lscala_util_parsing_combinator_Parsers__O__Lscala_util_parsing_combinator_Parsers$Parser(this, e)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.accept__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser = (function(es, evidence$1) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__accept__Lscala_util_parsing_combinator_Parsers__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(this, es, evidence$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.accept__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser = (function(expected, f) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__accept__Lscala_util_parsing_combinator_Parsers__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser(this, expected, f)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.acceptIf__Lscala_Function1__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser = (function(p, err) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__acceptIf__Lscala_util_parsing_combinator_Parsers__Lscala_Function1__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(this, p, err)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.acceptMatch__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser = (function(expected, f) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__acceptMatch__Lscala_util_parsing_combinator_Parsers__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser(this, expected, f)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.acceptSeq__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser = (function(es, evidence$2) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__acceptSeq__Lscala_util_parsing_combinator_Parsers__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(this, es, evidence$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.failure__T__Lscala_util_parsing_combinator_Parsers$Parser = (function(msg) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__failure__Lscala_util_parsing_combinator_Parsers__T__Lscala_util_parsing_combinator_Parsers$Parser(this, msg)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.err__T__Lscala_util_parsing_combinator_Parsers$Parser = (function(msg) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__err__Lscala_util_parsing_combinator_Parsers__T__Lscala_util_parsing_combinator_Parsers$Parser(this, msg)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.success__O__Lscala_util_parsing_combinator_Parsers$Parser = (function(v) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__success__Lscala_util_parsing_combinator_Parsers__O__Lscala_util_parsing_combinator_Parsers$Parser(this, v)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.log__Lscala_Function0__T__Lscala_util_parsing_combinator_Parsers$Parser = (function(p, name) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__log__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__T__Lscala_util_parsing_combinator_Parsers$Parser(this, p, name)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.rep__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__rep__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.repsep__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p, q) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__repsep__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p, q)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.rep1__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__rep1__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.rep1__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(first, p0) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__rep1__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, first, p0)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.repN__I__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(num, p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__repN__Lscala_util_parsing_combinator_Parsers__I__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, num, p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.rep1sep__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p, q) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__rep1sep__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p, q)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.chainl1__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p, q) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__chainl1__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p, q)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.chainl1__Lscala_Function0__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(first, p, q) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__chainl1__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, first, p, q)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.chainr1__Lscala_Function0__Lscala_Function0__Lscala_Function2__O__Lscala_util_parsing_combinator_Parsers$Parser = (function(p, q, combine, first) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__chainr1__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_Function0__Lscala_Function2__O__Lscala_util_parsing_combinator_Parsers$Parser(this, p, q, combine, first)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.opt__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__opt__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.not__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__not__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.guard__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser = (function(p) {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__guard__Lscala_util_parsing_combinator_Parsers__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(this, p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.mkList__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__mkList__Lscala_util_parsing_combinator_Parsers__Lscala_Function1(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.apply__T__Lscala_util_Try = (function(input) {
  if (ScalaJS.anyRefEqEq(input, "")) {
    return new ScalaJS.c.scala_util_Success().init___O("")
  } else {
    var x1 = this.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult(this.content__Lscala_util_parsing_combinator_Parsers$Parser(), input);
    if (ScalaJS.is.scala_util_parsing_combinator_Parsers$Success(x1)) {
      var x2 = ScalaJS.as.scala_util_parsing_combinator_Parsers$Success(x1);
      var result = ScalaJS.as.java_lang_String(x2.result__O());
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
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.apply__Lcom_prealpha_pipe_blocks_Block__Lscala_util_Try = (function(block) {
  try {
    var parsedArgLine = ScalaJS.as.java_lang_String(ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().apply__T__Lscala_util_Try(block.argLine__T()).get__O());
    if (ScalaJS.anyRefEqEq(block.instance__T(), "_text")) {
      var parsedChildLines = ScalaJS.as.scala_collection_immutable_List(ScalaJS.as.scala_collection_TraversableLike(block.childLines__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
        return (function(input) {
          return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().apply__T__Lscala_util_Try(input)
        })
      })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
        return (function(x$1) {
          return ScalaJS.as.java_lang_String(x$1.get__O())
        })
      })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
    } else {
      var parsedChildLines = block.childLines__Lscala_collection_immutable_List()
    };
    var parsedChildBlocks = ScalaJS.as.scala_collection_immutable_List(ScalaJS.as.scala_collection_TraversableLike(block.childBlocks__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
      return (function(block) {
        return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().apply__Lcom_prealpha_pipe_blocks_Block__Lscala_util_Try(block)
      })
    })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
      return (function(x$2) {
        return ScalaJS.as.com_prealpha_pipe_blocks_Block(x$2.get__O())
      })
    })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
    var parsedBlock = new ScalaJS.c.com_prealpha_pipe_blocks_Block().init___T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List(block.instance__T(), parsedArgLine, block.level__I(), block.lineNum__I(), parsedChildLines, parsedChildBlocks);
    return new ScalaJS.c.scala_util_Success().init___O(parsedBlock)
  } catch ($jsexc$) {
    if (ScalaJS.is.com_prealpha_pipe_math_ParseException($jsexc$)) {
      var px = $jsexc$;
      return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(px)
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.skipWhitespace__Z = (function() {
  return false
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.content__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return this.phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(this.elem__Lscala_util_parsing_combinator_Parsers$Parser().$$plus__Lscala_util_parsing_combinator_Parsers$Parser()).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$3) {
      return x$3.mkString__T()
    })
  })()))
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.elem__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return this.mathElem__Lscala_util_parsing_combinator_Parsers$Parser().$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().inlineElem__Lscala_util_parsing_combinator_Parsers$Parser()
    })
  })())).$$bar__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().normalElem__Lscala_util_parsing_combinator_Parsers$Parser()
    })
  })()))
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.mathElem__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return new ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1().init___()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.inlineElem__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return new ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2().init___()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.normalElem__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return this.not__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("(|")
    })
  })())).$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().not__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11().init___Lcom_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2(this))
    })
  })())).$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().not__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12().init___Lcom_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3(this))
    })
  })())).$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(".")).r__Lscala_util_matching_Regex())
    })
  })())).$$plus__Lscala_util_parsing_combinator_Parsers$Parser().$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$7) {
      return x$7.mkString__T()
    })
  })()))
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_InlineParser = this;
  ScalaJS.impls.scala_util_parsing_combinator_Parsers$class__$init$__Lscala_util_parsing_combinator_Parsers__V(this);
  ScalaJS.impls.scala_util_parsing_combinator_RegexParsers$class__$init$__Lscala_util_parsing_combinator_RegexParsers__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "string")) {
    return this.apply__T__Lscala_util_Try(arg$1)
  } else {
    if (ScalaJS.is.com_prealpha_pipe_blocks_Block(arg$1)) {
      return this.apply__Lcom_prealpha_pipe_blocks_Block__Lscala_util_Try(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.skipWhitespace = (function() {
  return this.skipWhitespace__Z()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.content = (function() {
  return this.content__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.elem = (function(arg$1, arg$2) {
  switch (arguments.length) {
    case 0:
      return this.elem__Lscala_util_parsing_combinator_Parsers$Parser();
    case 1:
      return this.elem__O__Lscala_util_parsing_combinator_Parsers$Parser(arg$1);
    case 2:
      return this.elem__T__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2);
    default:
      throw "No matching overload";
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.mathElem = (function() {
  return this.mathElem__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.inlineElem = (function() {
  return this.inlineElem__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.normalElem = (function() {
  return this.normalElem__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.whiteSpace = (function() {
  return this.whiteSpace__Lscala_util_matching_Regex()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$RegexParsers$$super$positioned = (function(arg$1) {
  return this.scala$util$parsing$combinator$RegexParsers$$super$positioned__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$RegexParsers$$super$phrase = (function(arg$1) {
  return this.scala$util$parsing$combinator$RegexParsers$$super$phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$RegexParsers$_setter_$whiteSpace_$eq = (function(arg$1) {
  return this.scala$util$parsing$combinator$RegexParsers$_setter_$whiteSpace_$eq__Lscala_util_matching_Regex__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.handleWhiteSpace = (function(arg$1, arg$2) {
  return this.handleWhiteSpace__Ljava_lang_CharSequence__I__I(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.literal = (function(arg$1) {
  return this.literal__T__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.regex = (function(arg$1) {
  return this.regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.positioned = (function(arg$1) {
  return this.positioned__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.phrase = (function(arg$1) {
  return this.phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parse = (function(arg$1, arg$2) {
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
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parseAll = (function(arg$1, arg$2) {
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
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Success = (function() {
  return this.Success__Lscala_util_parsing_combinator_Parsers$Success$()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar = (function() {
  return this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar__Lscala_util_DynamicVariable()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.NoSuccess = (function() {
  return this.NoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess$()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Failure = (function() {
  return this.Failure__Lscala_util_parsing_combinator_Parsers$Failure$()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Error = (function() {
  return this.Error__Lscala_util_parsing_combinator_Parsers$Error$()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.$tilde = (function() {
  return this.$$tilde__Lscala_util_parsing_combinator_Parsers$$tilde$()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.lastNoSuccess = (function() {
  return this.lastNoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.lastNoSuccess_$eq = (function(arg$1) {
  return this.lastNoSuccess_$eq__Lscala_util_parsing_combinator_Parsers$NoSuccess__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Parser = (function(arg$1) {
  return this.Parser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.OnceParser = (function(arg$1) {
  return this.OnceParser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$OnceParser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.commit = (function(arg$1) {
  return this.commit__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.accept = (function(arg$1, arg$2) {
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
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.acceptIf = (function(arg$1, arg$2) {
  return this.acceptIf__Lscala_Function1__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.acceptMatch = (function(arg$1, arg$2) {
  return this.acceptMatch__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.acceptSeq = (function(arg$1, arg$2) {
  return this.acceptSeq__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.failure = (function(arg$1) {
  return this.failure__T__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.err = (function(arg$1) {
  return this.err__T__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.success = (function(arg$1) {
  return this.success__O__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.log = (function(arg$1, arg$2) {
  return this.log__Lscala_Function0__T__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.rep = (function(arg$1) {
  return this.rep__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.repsep = (function(arg$1, arg$2) {
  return this.repsep__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.rep1 = (function(arg$1, arg$2) {
  switch (arguments.length) {
    case 1:
      return this.rep1__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1);
    case 2:
      return this.rep1__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2);
    default:
      throw "No matching overload";
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.repN = (function(arg$1, arg$2) {
  return this.repN__I__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.rep1sep = (function(arg$1, arg$2) {
  return this.rep1sep__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.chainl1 = (function(arg$1, arg$2, arg$3) {
  switch (arguments.length) {
    case 2:
      return this.chainl1__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2);
    case 3:
      return this.chainl1__Lscala_Function0__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2, arg$3);
    default:
      throw "No matching overload";
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.chainr1 = (function(arg$1, arg$2, arg$3, arg$4) {
  return this.chainr1__Lscala_Function0__Lscala_Function0__Lscala_Function2__O__Lscala_util_parsing_combinator_Parsers$Parser(arg$1, arg$2, arg$3, arg$4)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.opt = (function(arg$1) {
  return this.opt__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.not = (function(arg$1) {
  return this.not__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.guard = (function(arg$1) {
  return this.guard__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.mkList = (function() {
  return this.mkList__Lscala_Function1()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.mkList__ = (function() {
  return this.mkList__Lscala_Function1()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.guard__Lscala_Function0__ = (function(p) {
  return this.guard__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.not__Lscala_Function0__ = (function(p$2) {
  return this.not__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.opt__Lscala_Function0__ = (function(p$3) {
  return this.opt__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$3)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.chainr1__Lscala_Function0__Lscala_Function0__Lscala_Function2__O__ = (function(p$4, q, combine, first) {
  return this.chainr1__Lscala_Function0__Lscala_Function0__Lscala_Function2__O__Lscala_util_parsing_combinator_Parsers$Parser(p$4, q, combine, first)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.chainl1__Lscala_Function0__Lscala_Function0__Lscala_Function0__ = (function(first$2, p$5, q$2) {
  return this.chainl1__Lscala_Function0__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(first$2, p$5, q$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.chainl1__Lscala_Function0__Lscala_Function0__ = (function(p$6, q$3) {
  return this.chainl1__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$6, q$3)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.rep1sep__Lscala_Function0__Lscala_Function0__ = (function(p$7, q$4) {
  return this.rep1sep__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$7, q$4)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.repN__I__Lscala_Function0__ = (function(num, p$8) {
  return this.repN__I__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(num, p$8)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.rep1__Lscala_Function0__Lscala_Function0__ = (function(first$3, p0) {
  return this.rep1__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(first$3, p0)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.rep1__Lscala_Function0__ = (function(p$9) {
  return this.rep1__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$9)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.repsep__Lscala_Function0__Lscala_Function0__ = (function(p$10, q$5) {
  return this.repsep__Lscala_Function0__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$10, q$5)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.rep__Lscala_Function0__ = (function(p$11) {
  return this.rep__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$11)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.log__Lscala_Function0__T__ = (function(p$12, name) {
  return this.log__Lscala_Function0__T__Lscala_util_parsing_combinator_Parsers$Parser(p$12, name)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.success__O__ = (function(v) {
  return this.success__O__Lscala_util_parsing_combinator_Parsers$Parser(v)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.err__T__ = (function(msg) {
  return this.err__T__Lscala_util_parsing_combinator_Parsers$Parser(msg)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.failure__T__ = (function(msg$2) {
  return this.failure__T__Lscala_util_parsing_combinator_Parsers$Parser(msg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.acceptSeq__O__Lscala_Function1__ = (function(es, evidence$2) {
  return this.acceptSeq__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(es, evidence$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.acceptMatch__T__Lscala_PartialFunction__ = (function(expected, f) {
  return this.acceptMatch__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser(expected, f)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.acceptIf__Lscala_Function1__Lscala_Function1__ = (function(p$13, err) {
  return this.acceptIf__Lscala_Function1__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(p$13, err)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.accept__T__Lscala_PartialFunction__ = (function(expected$2, f$2) {
  return this.accept__T__Lscala_PartialFunction__Lscala_util_parsing_combinator_Parsers$Parser(expected$2, f$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.accept__O__Lscala_Function1__ = (function(es$2, evidence$1) {
  return this.accept__O__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(es$2, evidence$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.accept__O__ = (function(e) {
  return this.accept__O__Lscala_util_parsing_combinator_Parsers$Parser(e)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.elem__O__ = (function(e$2) {
  return this.elem__O__Lscala_util_parsing_combinator_Parsers$Parser(e$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.elem__T__Lscala_Function1__ = (function(kind, p$14) {
  return this.elem__T__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(kind, p$14)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.commit__Lscala_Function0__ = (function(p$15) {
  return this.commit__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$15)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.OnceParser__Lscala_Function1__ = (function(f$3) {
  return this.OnceParser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$OnceParser(f$3)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Parser__Lscala_Function1__ = (function(f$4) {
  return this.Parser__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(f$4)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.lastNoSuccess_$eq__Lscala_util_parsing_combinator_Parsers$NoSuccess__ = (function(x) {
  return ScalaJS.bV(this.lastNoSuccess_$eq__Lscala_util_parsing_combinator_Parsers$NoSuccess__V(x))
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.lastNoSuccess__ = (function() {
  return this.lastNoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.$$tilde__ = (function() {
  return this.$$tilde__Lscala_util_parsing_combinator_Parsers$$tilde$()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Error__ = (function() {
  return this.Error__Lscala_util_parsing_combinator_Parsers$Error$()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Failure__ = (function() {
  return this.Failure__Lscala_util_parsing_combinator_Parsers$Failure$()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.NoSuccess__ = (function() {
  return this.NoSuccess__Lscala_util_parsing_combinator_Parsers$NoSuccess$()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar__ = (function() {
  return this.scala$util$parsing$combinator$Parsers$$lastNoSuccessVar__Lscala_util_DynamicVariable()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.Success__ = (function() {
  return this.Success__Lscala_util_parsing_combinator_Parsers$Success$()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__ = (function(p$16, in$2) {
  return this.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult(p$16, in$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__ = (function(p$17, in$3) {
  return this.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(p$17, in$3)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__ = (function(p$18, in$4) {
  return this.parseAll__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(p$18, in$4)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__ = (function(p$19, in$5) {
  return this.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_io_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(p$19, in$5)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__ = (function(p$20, in$6) {
  return this.parse__Lscala_util_parsing_combinator_Parsers$Parser__Ljava_lang_CharSequence__Lscala_util_parsing_combinator_Parsers$ParseResult(p$20, in$6)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.parse__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__ = (function(p$21, in$7) {
  return this.parse__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(p$21, in$7)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.phrase__Lscala_util_parsing_combinator_Parsers$Parser__ = (function(p$22) {
  return this.phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(p$22)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.positioned__Lscala_Function0__ = (function(p$23) {
  return this.positioned__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$23)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.regex__Lscala_util_matching_Regex__ = (function(r) {
  return this.regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(r)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.literal__T__ = (function(s) {
  return this.literal__T__Lscala_util_parsing_combinator_Parsers$Parser(s)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.handleWhiteSpace__Ljava_lang_CharSequence__I__ = (function(source, offset) {
  return ScalaJS.bI(this.handleWhiteSpace__Ljava_lang_CharSequence__I__I(source, offset))
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$RegexParsers$_setter_$whiteSpace_$eq__Lscala_util_matching_Regex__ = (function(x$1) {
  return ScalaJS.bV(this.scala$util$parsing$combinator$RegexParsers$_setter_$whiteSpace_$eq__Lscala_util_matching_Regex__V(x$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$RegexParsers$$super$phrase__Lscala_util_parsing_combinator_Parsers$Parser__ = (function(p$24) {
  return this.scala$util$parsing$combinator$RegexParsers$$super$phrase__Lscala_util_parsing_combinator_Parsers$Parser__Lscala_util_parsing_combinator_Parsers$Parser(p$24)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.scala$util$parsing$combinator$RegexParsers$$super$positioned__Lscala_Function0__ = (function(p$25) {
  return this.scala$util$parsing$combinator$RegexParsers$$super$positioned__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(p$25)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.whiteSpace__ = (function() {
  return this.whiteSpace__Lscala_util_matching_Regex()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.normalElem__ = (function() {
  return this.normalElem__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.inlineElem__ = (function() {
  return this.inlineElem__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.mathElem__ = (function() {
  return this.mathElem__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.elem__ = (function() {
  return this.elem__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.content__ = (function() {
  return this.content__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.skipWhitespace__ = (function() {
  return ScalaJS.bZ(this.skipWhitespace__Z())
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.apply__Lcom_prealpha_pipe_blocks_Block__ = (function(block) {
  return this.apply__Lcom_prealpha_pipe_blocks_Block__Lscala_util_Try(block)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.apply__T__ = (function(input) {
  return this.apply__T__Lscala_util_Try(input)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_InlineParser$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_InlineParser$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.InlineParser")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_InlineParser$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_InlineParser$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.InlineParser;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_InlineParser$: 0
}, false, "com.prealpha.pipe.blocks.InlineParser$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_InlineParser$: 1,
  scala_util_parsing_combinator_RegexParsers: 1,
  scala_util_parsing_combinator_Parsers: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_InlineParser = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_InlineParser)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_InlineParser = new ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_InlineParser
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var lines = block.childLines__Lscala_collection_immutable_List();
  var trimmed = ScalaJS.as.scala_collection_immutable_List(lines.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(block$1) {
    return (function(l) {
      if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(l) <= block$1.level__I())) {
        return ""
      } else {
        return ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(l)).drop__I__O((block$1.level__I() + 1)))
      }
    })
  })(block)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  sb.append__T__Lscala_collection_mutable_StringBuilder(trimmed.mkString__T__T("\n"));
  return new ScalaJS.c.scala_Tuple2().init___O__O(sb.toString__T(), ScalaJS.modules.com_prealpha_pipe_blocks_generators_EmptyResultContext())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), "latex")
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexBlock = this;
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$2, ctx$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$3, ctx$3)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_LatexBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_LatexBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_LatexBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_LatexBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_LatexBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_LatexBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.LatexBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_LatexBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_LatexBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_LatexBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_LatexBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.LatexBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_LatexBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_LatexBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.LatexBlock$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_LatexBlock$: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_LatexBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_LatexBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype.topLevel__Lscala_collection_immutable_List = (function() {
  var x$13 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_ListBlock();
  var x$12 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_SectionBlock();
  var x$11 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock();
  var x$10 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_RawTextBlock();
  var x$9 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_BoldBlock();
  var x$8 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_ItalicBlock();
  var x$7 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_PreBlock();
  var x$6 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_LatexBlock();
  var x$5 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_EquationBlock();
  var x$4 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_DocumentBlock();
  var x$3 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_MathBlock();
  var x$2 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock();
  var x$1 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock();
  var jsx$12 = ScalaJS.modules.scala_collection_immutable_Nil().$$colon$colon__O__Lscala_collection_immutable_List(x$1);
  var jsx$11 = jsx$12.$$colon$colon__O__Lscala_collection_immutable_List(x$2);
  var jsx$10 = jsx$11.$$colon$colon__O__Lscala_collection_immutable_List(x$3);
  var jsx$9 = jsx$10.$$colon$colon__O__Lscala_collection_immutable_List(x$4);
  var jsx$8 = jsx$9.$$colon$colon__O__Lscala_collection_immutable_List(x$5);
  var jsx$7 = jsx$8.$$colon$colon__O__Lscala_collection_immutable_List(x$6);
  var jsx$6 = jsx$7.$$colon$colon__O__Lscala_collection_immutable_List(x$7);
  var jsx$5 = jsx$6.$$colon$colon__O__Lscala_collection_immutable_List(x$8);
  var jsx$4 = jsx$5.$$colon$colon__O__Lscala_collection_immutable_List(x$9);
  var jsx$3 = jsx$4.$$colon$colon__O__Lscala_collection_immutable_List(x$10);
  var jsx$2 = jsx$3.$$colon$colon__O__Lscala_collection_immutable_List(x$11);
  var jsx$1 = jsx$2.$$colon$colon__O__Lscala_collection_immutable_List(x$12);
  return jsx$1.$$colon$colon__O__Lscala_collection_immutable_List(x$13)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype.compile__T__T = (function(markup) {
  var parsed = ScalaJS.as.com_prealpha_pipe_blocks_Block(ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().apply__Lcom_prealpha_pipe_blocks_Block__Lscala_util_Try(ScalaJS.modules.com_prealpha_pipe_blocks_BlocksParser().parse__T__Lcom_prealpha_pipe_blocks_Block(markup)).get__O());
  var totalSb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var importsSb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var configSb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var insideBodySb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var rb = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_RootBlock();
  var x1 = rb.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(parsed, new ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext().init___Lscala_collection_immutable_List__Lscala_collection_immutable_Map(this.topLevel__Lscala_collection_immutable_List(), ScalaJS.modules.com_prealpha_pipe_blocks_generators_CompileContext().apply$default$2__Lscala_collection_immutable_Map()));
  matchEnd3: {
    if ((x1 !== null)) {
      var output = ScalaJS.as.java_lang_String(x1._1__O());
      var result = ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x1._2__O());
      var x$14 = new ScalaJS.c.scala_Tuple2().init___O__O(output, result);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var output$2 = ScalaJS.as.java_lang_String(x$14._1__O());
  var result$2 = ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x$14._2__O());
  result$2.imports__Lscala_collection_immutable_Set().foreach__Lscala_Function1__V(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(importsSb$1) {
    return (function(s) {
      return importsSb$1.append__T__Lscala_collection_mutable_StringBuilder("\\usepackage{").append__T__Lscala_collection_mutable_StringBuilder(s).append__T__Lscala_collection_mutable_StringBuilder("}\n")
    })
  })(importsSb)));
  result$2.settings__Lscala_collection_immutable_Set().foreach__Lscala_Function1__V(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(configSb$1) {
    return (function(s) {
      return configSb$1.append__T__Lscala_collection_mutable_StringBuilder(s).append__T__Lscala_collection_mutable_StringBuilder("\n")
    })
  })(configSb)));
  result$2.insideDoc__Lscala_collection_immutable_Set().foreach__Lscala_Function1__V(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(insideBodySb$1) {
    return (function(s) {
      return insideBodySb$1.append__T__Lscala_collection_mutable_StringBuilder(s)
    })
  })(insideBodySb)));
  totalSb.append__T__Lscala_collection_mutable_StringBuilder("\\documentclass[a4paper]{article}\n");
  totalSb.append__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(importsSb);
  totalSb.append__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(configSb);
  totalSb.append__T__Lscala_collection_mutable_StringBuilder("\\begin{document}\n");
  totalSb.append__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(insideBodySb);
  totalSb.append__T__Lscala_collection_mutable_StringBuilder(output$2);
  totalSb.append__T__Lscala_collection_mutable_StringBuilder("\n\\end{document}");
  return totalSb.toString__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype.main__AT__V = (function(args) {
  var markup = ScalaJS.modules.scala_io_Source().fromInputStream__Ljava_io_InputStream__Lscala_io_Codec__Lscala_io_BufferedSource(ScalaJS.modules.java_lang_System().$in__Ljava_io_InputStream(), ScalaJS.modules.scala_io_Codec().fallbackSystemCodec__Lscala_io_Codec()).getLines__Lscala_collection_Iterator().mkString__T__T("\n");
  var latex = this.compile__T__T(markup);
  ScalaJS.modules.java_lang_System().out__Ljava_io_PrintStream().println__T__V(latex)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype.topLevel = (function() {
  return this.topLevel__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype.compile = (function(arg$1) {
  return this.compile__T__T(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype.main = (function(arg$1) {
  return this.main__AT__V(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype.main__AT__ = (function(args) {
  return ScalaJS.bV(this.main__AT__V(args))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype.compile__T__ = (function(markup) {
  return this.compile__T__T(markup)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype.topLevel__ = (function() {
  return this.topLevel__Lscala_collection_immutable_List()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_LatexDocument$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_LatexDocument$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_LatexDocument$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_LatexDocument$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_LatexDocument$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_LatexDocument$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.LatexDocument")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_LatexDocument$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_LatexDocument$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_LatexDocument$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_LatexDocument$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.LatexDocument;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_LatexDocument$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_LatexDocument$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.LatexDocument$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_LatexDocument$: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_LatexDocument$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexDocument = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_LatexDocument = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexDocument)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexDocument = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexDocument$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexDocument
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block$4, ctx$4) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block$4, ctx$4)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var lines = block.childLines__Lscala_collection_immutable_List();
  var args = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__AT(block.argLine__T(), "\\s");
  if (ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(args, 1)).isEmpty__Z()) {
    throw new ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException().init___Lcom_prealpha_pipe_blocks_Block__T(block, "latex-env must provide an environment argument")
  };
  if (new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(args.underlying[0])).exists__Lscala_Function1__Z(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$1) {
      x$1 = ScalaJS.uC(x$1);
      return ScalaJS.bZ((!ScalaJS.modules.scala_runtime_RichChar().isLetter$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(x$1))))
    })
  })()))) {
    throw new ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException().init___Lcom_prealpha_pipe_blocks_Block__T(block, "the environment argument must only contain alphabetic characters")
  };
  var trimmed = ScalaJS.as.scala_collection_immutable_List(lines.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(block$2) {
    return (function(l) {
      if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(l) <= block$2.level__I())) {
        return ""
      } else {
        return ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(l)).drop__I__O((block$2.level__I() + 1)))
      }
    })
  })(block)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("\\begin{").$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(args.underlying[0]).$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}\n");
  sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(trimmed.mkString__T__T("\n"));
  sb.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("\n\\end{").$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(args.underlying[0]).$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder("}");
  return new ScalaJS.c.scala_Tuple2().init___O__O(sb.toString__T(), ScalaJS.modules.com_prealpha_pipe_blocks_generators_EmptyResultContext())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), "latex-env")
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock = this;
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$2, ctx$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$3, ctx$3)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.LatexEnvBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.LatexEnvBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.LatexEnvBlock$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_LatexEnvBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block$4, ctx$4) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block$4, ctx$4)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var numberType = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(block.argLine__T());
  if ((ScalaJS.anyRefEqEq(numberType, "") || ScalaJS.anyRefEqEq(numberType, "*"))) {
    var env = "itemize"
  } else {
    var env = "enumerate"
  };
  sb.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\begin{", "}"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [env]))));
  if (ScalaJS.anyRefEqEq(env, "enumerate")) {
    sb.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["[", "]\\n"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [numberType]))))
  } else {
    sb.append__T__Lscala_collection_mutable_StringBuilder("\n")
  };
  var lib = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock().init___Lcom_prealpha_pipe_blocks_generators_CompileContext(ctx);
  var results = ScalaJS.as.scala_collection_immutable_List(block.childBlocks__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(ctx$1, lib$1) {
    return (function(b) {
      var jsx$6 = lib$1;
      var jsx$5 = b;
      var jsx$4 = ctx$1;
      var x$3 = lib$1;
      var x$2 = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_ListBlock();
      var jsx$3 = ScalaJS.modules.scala_collection_immutable_Nil().$$colon$colon__O__Lscala_collection_immutable_List(x$2);
      var jsx$2 = jsx$3.$$colon$colon__O__Lscala_collection_immutable_List(x$3);
      var jsx$1 = jsx$4.copy__Lscala_collection_immutable_List__Lscala_collection_immutable_Map__Lcom_prealpha_pipe_blocks_generators_CompileContext(jsx$2, ctx$1.copy$default$2__Lscala_collection_immutable_Map());
      return jsx$6.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(jsx$5, jsx$1)
    })
  })(ctx, lib)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  var merged = this.merge__Lscala_collection_Seq__Lscala_Tuple2(results);
  sb.append__T__Lscala_collection_mutable_StringBuilder(ScalaJS.as.java_lang_String(merged._1__O()));
  sb.append__T__Lscala_collection_mutable_StringBuilder("\n");
  sb.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\end{", "}"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [env]))));
  return new ScalaJS.c.scala_Tuple2().init___O__O(sb.toString__T(), ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(merged._2__O()).$$plus$plus__Lcom_prealpha_pipe_blocks_generators_ResultContext__Lcom_prealpha_pipe_blocks_generators_ResultContext(new ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext().init___Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["enumerate"]), 1)))), ScalaJS.modules.com_prealpha_pipe_blocks_generators_ResultContext().apply$default$2__Lscala_collection_immutable_Set(), ScalaJS.modules.com_prealpha_pipe_blocks_generators_ResultContext().apply$default$3__Lscala_collection_immutable_Set())))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), "list")
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ListBlock = this;
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$2, ctx$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$3, ctx$3)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_ListBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_ListBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_ListBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_ListBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_ListBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_ListBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.ListBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_ListBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_ListBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_ListBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_ListBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.ListBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_ListBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_ListBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.ListBlock$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_ListBlock$: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_ListBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ListBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_ListBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ListBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ListBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ListBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.com$prealpha$pipe$blocks$generators$latex$ListItemBlock$$oldContext$f = null
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  var x1 = block.argLine__T();
  matchEnd4: {
    if (ScalaJS.anyRefEqEq("", x1)) {
      var header = "\\item\n";
      break matchEnd4
    };
    var header = ("\\item " + x1);
    break matchEnd4
  };
  var x1$3 = block.childBlocks__Lscala_collection_immutable_List();
  matchEnd4$2: {
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_Nil(), x1$3)) {
      var x1$2 = new ScalaJS.c.scala_Tuple2().init___O__O("", ScalaJS.modules.com_prealpha_pipe_blocks_generators_EmptyResultContext());
      break matchEnd4$2
    };
    var x1$2 = this.merge__Lscala_collection_Seq__Lscala_Tuple2(ScalaJS.as.scala_collection_Seq(x1$3.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(arg$outer) {
      return (function(b) {
        return arg$outer.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(b, arg$outer.com$prealpha$pipe$blocks$generators$latex$ListItemBlock$$oldContext$f)
      })
    })(this)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())));
    break matchEnd4$2
  };
  matchEnd3: {
    if ((x1$2 !== null)) {
      var body = ScalaJS.as.java_lang_String(x1$2._1__O());
      var rctx2 = ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x1$2._2__O());
      var x$1 = new ScalaJS.c.scala_Tuple2().init___O__O(body, rctx2);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
  };
  var body$2 = ScalaJS.as.java_lang_String(x$1._1__O());
  var rctx2$2 = ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x$1._2__O());
  return new ScalaJS.c.scala_Tuple2().init___O__O((("" + header) + body$2), rctx2$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), "item")
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.init___Lcom_prealpha_pipe_blocks_generators_CompileContext = (function(oldContext) {
  this.com$prealpha$pipe$blocks$generators$latex$ListItemBlock$$oldContext$f = oldContext;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$2, ctx$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$3, ctx$3)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_ListItemBlock = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_ListItemBlock = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_generators_CompileContext(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_ListItemBlock = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_ListItemBlock)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_ListItemBlock = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_ListItemBlock(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.ListItemBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_ListItemBlock = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_ListItemBlock)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_ListItemBlock = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_ListItemBlock(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.ListItemBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_ListItemBlock = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_ListItemBlock: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.ListItemBlock", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_ListItemBlock: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ListItemBlock.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_ListItemBlock;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block$4, ctx$4) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block$4, ctx$4)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), "math")
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(block.argLine__T())) !== 0)) {
    var argline = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [this.com$prealpha$pipe$blocks$generators$latex$MathBlock$$parseInline$1__T__Lscala_Tuple2(block.argLine__T())]), 1)))
  } else {
    var argline = ScalaJS.modules.scala_collection_immutable_Nil()
  };
  var children = ScalaJS.as.scala_collection_immutable_List(block.childBlocks__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(ctx$1) {
    return (function(x0$1) {
      var x1 = x0$1;
      if ((x1 !== null)) {
        var p2 = x1.instance__T();
        if (ScalaJS.anyRefEqEq("_text", p2)) {
          return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_MathBlock().merge__Lscala_collection_Seq__Lscala_Tuple2(ScalaJS.as.scala_collection_Seq(x1.childLines__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3().init___Lcom_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7(this), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())))
        }
      };
      if ((x1 !== null)) {
        var p8 = x1.instance__T();
        if (ScalaJS.anyRefEqEq("equation", p8)) {
          return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_MathBlock().compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(x1, ctx$1)
        }
      };
      throw new ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException().init___Lcom_prealpha_pipe_blocks_Block__T(x1, "The |equation is allowd inside of |math")
    })
  })(ctx)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(ScalaJS.as.scala_collection_Seq(argline.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(children, ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.com$prealpha$pipe$blocks$generators$latex$MathBlock$$parseInline$1__T__Lscala_Tuple2 = (function(s) {
  var isb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  isb.append__T__Lscala_collection_mutable_StringBuilder("$").append__T__Lscala_collection_mutable_StringBuilder(ScalaJS.modules.com_prealpha_pipe_math_CodeGen().genEntire__Lscala_collection_Seq__T(ScalaJS.as.scala_collection_Seq(ScalaJS.modules.com_prealpha_pipe_math_MathParser().tryParse__T__Lscala_util_Try(s).get__O()))).append__T__Lscala_collection_mutable_StringBuilder("$");
  return new ScalaJS.c.scala_Tuple2().init___O__O(isb.toString__T(), new ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext().init___Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["amsmath"]), 1)))), ScalaJS.modules.com_prealpha_pipe_blocks_generators_ResultContext().apply$default$2__Lscala_collection_immutable_Set(), ScalaJS.modules.com_prealpha_pipe_blocks_generators_ResultContext().apply$default$3__Lscala_collection_immutable_Set()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_MathBlock = this;
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.com$prealpha$pipe$blocks$generators$latex$MathBlock$$parseInline$1 = (function(arg$1) {
  return this.com$prealpha$pipe$blocks$generators$latex$MathBlock$$parseInline$1__T__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.com$prealpha$pipe$blocks$generators$latex$MathBlock$$parseInline$1__T__ = (function(s) {
  return this.com$prealpha$pipe$blocks$generators$latex$MathBlock$$parseInline$1__T__Lscala_Tuple2(s)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$2, ctx$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$3, ctx$3))
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_MathBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_MathBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_MathBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_MathBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_MathBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_MathBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.MathBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_MathBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_MathBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_MathBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_MathBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.MathBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_MathBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_MathBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.MathBlock$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_MathBlock$: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_MathBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_MathBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_MathBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_MathBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_MathBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_MathBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  sb.append__T__Lscala_collection_mutable_StringBuilder("\\begin{verbatim}\n");
  var lines = block.childLines__Lscala_collection_immutable_List();
  var trimmed = ScalaJS.as.scala_collection_immutable_List(lines.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(block$1) {
    return (function(l) {
      if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(l) <= block$1.level__I())) {
        return ""
      } else {
        return ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(l)).drop__I__O((block$1.level__I() + 1)))
      }
    })
  })(block)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  sb.append__T__Lscala_collection_mutable_StringBuilder(trimmed.mkString__T__T("\n"));
  sb.append__T__Lscala_collection_mutable_StringBuilder("\n\\end{verbatim}");
  return new ScalaJS.c.scala_Tuple2().init___O__O(sb.toString__T(), ScalaJS.modules.com_prealpha_pipe_blocks_generators_EmptyResultContext())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), "raw")
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_PreBlock = this;
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$2, ctx$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$3, ctx$3)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_PreBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_PreBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_PreBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_PreBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_PreBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_PreBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.PreBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_PreBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_PreBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_PreBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_PreBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.PreBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_PreBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_PreBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.PreBlock$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_PreBlock$: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_PreBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_PreBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_PreBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_PreBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_PreBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_PreBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_PreBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  var strippedLines = ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.as.scala_collection_TraversableLike(block.childLines__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$1) {
      return ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(x$1)).dropWhile__Lscala_Function1__O(new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1().init___Lcom_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1(this)))
    })
  })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).filter__Lscala_Function1__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$3) {
      return ScalaJS.bZ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(x$3) > 0))
    })
  })()))).mkString__T__T("\n");
  return new ScalaJS.c.scala_Tuple2().init___O__O(("\n" + strippedLines), ScalaJS.modules.com_prealpha_pipe_blocks_generators_EmptyResultContext())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), "_text")
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_RawTextBlock = this;
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$2, ctx$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$3, ctx$3)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.RawTextBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.RawTextBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_RawTextBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.RawTextBlock$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_RawTextBlock$: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_RawTextBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_RawTextBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_RawTextBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_RawTextBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_RawTextBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.imports$1 = null;
  this.settings$1 = null;
  this.insideDoc$1 = null
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext;
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.imports__Lscala_collection_immutable_Set = (function() {
  return this.imports$1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.settings__Lscala_collection_immutable_Set = (function() {
  return this.settings$1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.insideDoc__Lscala_collection_immutable_Set = (function() {
  return this.insideDoc$1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.$$plus$plus__Lcom_prealpha_pipe_blocks_generators_ResultContext__Lcom_prealpha_pipe_blocks_generators_ResultContext = (function(other) {
  return new ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext().init___Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(ScalaJS.as.scala_collection_immutable_Set(this.imports__Lscala_collection_immutable_Set().$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(other.imports__Lscala_collection_immutable_Set())), ScalaJS.as.scala_collection_immutable_Set(this.settings__Lscala_collection_immutable_Set().$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(other.settings__Lscala_collection_immutable_Set())), ScalaJS.as.scala_collection_immutable_Set(this.insideDoc__Lscala_collection_immutable_Set().$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(other.insideDoc__Lscala_collection_immutable_Set())))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.copy__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lcom_prealpha_pipe_blocks_generators_ResultContext = (function(imports, settings, insideDoc) {
  return new ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext().init___Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(imports, settings, insideDoc)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.copy$default$1__Lscala_collection_immutable_Set = (function() {
  return this.imports__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.copy$default$2__Lscala_collection_immutable_Set = (function() {
  return this.settings__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.copy$default$3__Lscala_collection_immutable_Set = (function() {
  return this.insideDoc__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.productPrefix__T = (function() {
  return "ResultContext"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.productArity__I = (function() {
  return 3
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.imports__Lscala_collection_immutable_Set();
        break
      };
    case 1:
      {
        return this.settings__Lscala_collection_immutable_Set();
        break
      };
    case 2:
      {
        return this.insideDoc__Lscala_collection_immutable_Set();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_blocks_generators_ResultContext(x$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._toString__Lscala_Product__T(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_blocks_generators_ResultContext(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var ResultContext$1 = ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x$1);
      return (((ScalaJS.anyRefEqEq(this.imports__Lscala_collection_immutable_Set(), ResultContext$1.imports__Lscala_collection_immutable_Set()) && ScalaJS.anyRefEqEq(this.settings__Lscala_collection_immutable_Set(), ResultContext$1.settings__Lscala_collection_immutable_Set())) && ScalaJS.anyRefEqEq(this.insideDoc__Lscala_collection_immutable_Set(), ResultContext$1.insideDoc__Lscala_collection_immutable_Set())) && ResultContext$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.init___Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set = (function(imports, settings, insideDoc) {
  this.imports$1 = imports;
  this.settings$1 = settings;
  this.insideDoc$1 = insideDoc;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.imports = (function() {
  return this.imports__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.settings = (function() {
  return this.settings__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.insideDoc = (function() {
  return this.insideDoc__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.$plus$plus = (function(arg$1) {
  return this.$$plus$plus__Lcom_prealpha_pipe_blocks_generators_ResultContext__Lcom_prealpha_pipe_blocks_generators_ResultContext(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.copy = (function(arg$1, arg$2, arg$3) {
  return this.copy__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lcom_prealpha_pipe_blocks_generators_ResultContext(arg$1, arg$2, arg$3)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.copy$default$1 = (function() {
  return this.copy$default$1__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.copy$default$2 = (function() {
  return this.copy$default$2__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.copy$default$3 = (function() {
  return this.copy$default$3__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.copy$default$3__ = (function() {
  return this.copy$default$3__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.copy$default$2__ = (function() {
  return this.copy$default$2__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.copy__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__ = (function(imports, settings, insideDoc) {
  return this.copy__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lcom_prealpha_pipe_blocks_generators_ResultContext(imports, settings, insideDoc)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.$$plus$plus__Lcom_prealpha_pipe_blocks_generators_ResultContext__ = (function(other) {
  return this.$$plus$plus__Lcom_prealpha_pipe_blocks_generators_ResultContext__Lcom_prealpha_pipe_blocks_generators_ResultContext(other)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.insideDoc__ = (function() {
  return this.insideDoc__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.settings__ = (function() {
  return this.settings__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.imports__ = (function() {
  return this.imports__Lscala_collection_immutable_Set()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_ResultContext = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_ResultContext.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_ResultContext = (function(arg$1, arg$2, arg$3) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.call(this);
  return this.init___Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(arg$1, arg$2, arg$3)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_ResultContext.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_ResultContext = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_ResultContext)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_ResultContext(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.ResultContext")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_ResultContext = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_ResultContext)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_ResultContext = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_ResultContext(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.ResultContext;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_ResultContext = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_ResultContext: 0
}, false, "com.prealpha.pipe.blocks.generators.ResultContext", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_ResultContext: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_ResultContext;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(ScalaJS.as.scala_collection_Seq(block.childBlocks__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(ctx$1) {
    return (function(block) {
      return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_RootBlock().compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx$1)
    })
  })(ctx)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.force__Lcom_prealpha_pipe_blocks_Block__T = (function(block) {
  return ScalaJS.as.java_lang_String(this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, new ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext().init___Lscala_collection_immutable_List__Lscala_collection_immutable_Map(ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_LatexDocument().topLevel__Lscala_collection_immutable_List(), ScalaJS.modules.com_prealpha_pipe_blocks_generators_CompileContext().apply$default$2__Lscala_collection_immutable_Map()))._1__O())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return false
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_RootBlock = this;
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.force = (function(arg$1) {
  return this.force__Lcom_prealpha_pipe_blocks_Block__T(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$2, ctx$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.force__Lcom_prealpha_pipe_blocks_Block__ = (function(block$3) {
  return this.force__Lcom_prealpha_pipe_blocks_Block__T(block$3)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$4, ctx$3) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$4, ctx$3)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_RootBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_RootBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_RootBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_RootBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_RootBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_RootBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.RootBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_RootBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_RootBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_RootBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_RootBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.RootBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_RootBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_RootBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.RootBlock$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_RootBlock$: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_RootBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_RootBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_RootBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_RootBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_RootBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RootBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_RootBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  sb.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\section*{", "}"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [block.argLine__T()]))));
  var x1 = this.merge__Lscala_collection_Seq__Lscala_Tuple2(ScalaJS.as.scala_collection_Seq(block.childBlocks__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(ctx$1) {
    return (function(block$5) {
      return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_SectionBlock().compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$5, ctx$1)
    })
  })(ctx)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())));
  matchEnd3: {
    if ((x1 !== null)) {
      var str = ScalaJS.as.java_lang_String(x1._1__O());
      var res = ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x1._2__O());
      var x$1 = new ScalaJS.c.scala_Tuple2().init___O__O(str, res);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var str$2 = ScalaJS.as.java_lang_String(x$1._1__O());
  var res$2 = ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x$1._2__O());
  sb.append__T__Lscala_collection_mutable_StringBuilder(str$2);
  return new ScalaJS.c.scala_Tuple2().init___O__O(sb.toString__T(), res$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), "section")
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_SectionBlock = this;
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$2, ctx$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$3, ctx$3)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_SectionBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_SectionBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_SectionBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_SectionBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_SectionBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_SectionBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.SectionBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_SectionBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_SectionBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_SectionBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_SectionBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.SectionBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_SectionBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_SectionBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.SectionBlock$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_SectionBlock$: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_SectionBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_SectionBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_SectionBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_SectionBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_SectionBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SectionBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_SectionBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  sb.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\subsection*{", "}"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [block.argLine__T()]))));
  var x1 = this.merge__Lscala_collection_Seq__Lscala_Tuple2(ScalaJS.as.scala_collection_Seq(block.childBlocks__Lscala_collection_immutable_List().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(ctx$1) {
    return (function(block$4) {
      return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock().compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$4, ctx$1)
    })
  })(ctx)), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())));
  matchEnd3: {
    if ((x1 !== null)) {
      var str = ScalaJS.as.java_lang_String(x1._1__O());
      var res = ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x1._2__O());
      var x$1 = new ScalaJS.c.scala_Tuple2().init___O__O(str, res);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var str$2 = ScalaJS.as.java_lang_String(x$1._1__O());
  var res$2 = ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext(x$1._2__O());
  sb.append__T__Lscala_collection_mutable_StringBuilder(str$2);
  return new ScalaJS.c.scala_Tuple2().init___O__O(sb.toString__T(), res$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), "subsection")
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock = this;
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$2, ctx$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$3, ctx$3)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.SubsectionBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.SubsectionBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.SubsectionBlock$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_SubsectionBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__compile__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(this, block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.merge__Lscala_collection_Seq__Lscala_Tuple2 = (function(results) {
  return ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__merge__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__Lscala_collection_Seq__Lscala_Tuple2(this, results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z = (function(block, ctx) {
  return ScalaJS.anyRefEqEq(block.instance__T(), "table")
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2 = (function(block, ctx) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var alignLine = ScalaJS.as.java_lang_String(block.childLines__Lscala_collection_immutable_List().head__O());
  var contentLines = ScalaJS.as.scala_collection_immutable_List(ScalaJS.as.scala_collection_TraversableLike(block.childLines__Lscala_collection_immutable_List().tail__O()).filter__Lscala_Function1__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$1) {
      return ScalaJS.bZ((!ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__isEmpty__Lscala_scalajs_runtime_RuntimeString__Z(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(x$1))))
    })
  })())));
  var separators = this.com$prealpha$pipe$blocks$generators$latex$TableBlock$$getColumnSeparators__T__Lscala_collection_immutable_List(alignLine);
  contentLines.foreach__Lscala_Function1__V(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(separators$1) {
    return (function(x0$1) {
      var x1 = x0$1;
      matchEnd3: {
        var lineSeparators = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock().com$prealpha$pipe$blocks$generators$latex$TableBlock$$getColumnSeparators__T__Lscala_collection_immutable_List(x1);
        if ((!ScalaJS.as.scala_collection_GenSetLike(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(separators$1)).subsetOf__Lscala_collection_GenSet__Z(ScalaJS.as.scala_collection_GenSet(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(lineSeparators))))) {
          throw new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException().init___T(x1)
        } else {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd3
        }
      };
      return ScalaJS.bV(undefined)
    })
  })(separators)));
  var alignments = this.getColumnAlignment__p1__T__Lscala_collection_immutable_List__Lscala_collection_immutable_List(alignLine, ScalaJS.as.scala_collection_immutable_List(separators.unzip__Lscala_Function1__Lscala_Tuple2(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less())._1__O()));
  var alignStr = (("" + ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.as.scala_collection_TraversableLike(ScalaJS.as.scala_collection_IterableLike(separators.unzip__Lscala_Function1__Lscala_Tuple2(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less())._2__O()).zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.as.scala_collection_GenIterable(alignments.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$2) {
      return ScalaJS.bC(x$2.$char__C())
    })
  })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x0$2) {
      var x1 = x0$2;
      if ((x1 !== null)) {
        var s = ScalaJS.as.java_lang_String(x1._1__O());
        var c = x1._2$mcC$sp__C();
        return (("" + s) + ScalaJS.bC(c))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).mkString__T()) + ScalaJS.as.scala_Tuple2(separators.last__O())._2__O());
  sb.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["\\\\begin{tabularx}{\\\\linewidth}{", "}\\n"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [alignStr]))));
  if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__contains__Lscala_scalajs_runtime_RuntimeString__Ljava_lang_CharSequence__Z(alignLine, "-")) {
    sb.append__T__Lscala_collection_mutable_StringBuilder("\\hline\n")
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  contentLines.foreach__Lscala_Function1__V(new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2().init___Lscala_collection_mutable_StringBuilder__Lscala_collection_immutable_List(sb, separators));
  sb.append__T__Lscala_collection_mutable_StringBuilder("\\end{tabularx}");
  return new ScalaJS.c.scala_Tuple2().init___O__O(sb.toString__T(), new ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext().init___Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["tabularx"]), 1)))), ScalaJS.modules.com_prealpha_pipe_blocks_generators_ResultContext().apply$default$2__Lscala_collection_immutable_Set(), ScalaJS.modules.com_prealpha_pipe_blocks_generators_ResultContext().apply$default$3__Lscala_collection_immutable_Set()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.getColumnAlignment__p1__T__Lscala_collection_immutable_List__Lscala_collection_immutable_List = (function(alignLine, separators) {
  var x1 = separators;
  if (ScalaJS.is.scala_collection_immutable_$colon$colon(x1)) {
    var x3 = ScalaJS.as.scala_collection_immutable_$colon$colon(x1);
    var start = ScalaJS.uI(x3.hd$1__O());
    var p2 = x3.tl$1__Lscala_collection_immutable_List();
    if (ScalaJS.is.scala_collection_immutable_$colon$colon(p2)) {
      var x4 = ScalaJS.as.scala_collection_immutable_$colon$colon(p2);
      var end = ScalaJS.uI(x4.hd$1__O());
      var tail = x4.tl$1__Lscala_collection_immutable_List();
      var alignStr = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(alignLine, (start + 2), (end - 1));
      if (((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(alignStr) > 2) && ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__matches__Lscala_scalajs_runtime_RuntimeString__T__Z(alignStr, "\\++"))) {
        var ourAlign = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign()
      } else {
        if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(alignStr, "+") && ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__endsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(alignStr, "+"))) {
          var ourAlign = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign()
        } else {
          if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__endsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(alignStr, "+")) {
            var ourAlign = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign()
          } else {
            var ourAlign = ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign()
          }
        }
      };
      var x$4 = ourAlign;
      var jsx$3 = alignLine;
      var x$3 = end;
      var jsx$2 = tail.$$colon$colon__O__Lscala_collection_immutable_List(ScalaJS.bI(x$3));
      var jsx$1 = this.getColumnAlignment__p1__T__Lscala_collection_immutable_List__Lscala_collection_immutable_List(jsx$3, jsx$2);
      return jsx$1.$$colon$colon__O__Lscala_collection_immutable_List(x$4)
    }
  };
  return ScalaJS.modules.scala_collection_immutable_Nil()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.com$prealpha$pipe$blocks$generators$latex$TableBlock$$getColumnSeparators__T__Lscala_collection_immutable_List = (function(line) {
  return ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.as.scala_collection_TraversableLike(ScalaJS.as.scala_collection_TraversableLike(ScalaJS.as.scala_collection_TraversableLike(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(line)).zipWithIndex__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_Predef().fallbackStringCanBuildFrom__Lscala_collection_generic_CanBuildFrom())).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x0$4) {
      var x1 = x0$4;
      if ((x1 !== null)) {
        var p2 = x1._1$mcC$sp__C();
        var i = x1._2$mcI$sp__I();
        if ((124 === p2)) {
          return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bI(i), new ScalaJS.c.scala_Some().init___O("|"))
        }
      };
      if ((x1 !== null)) {
        var p3 = x1._1$mcC$sp__C();
        var i$2 = x1._2$mcI$sp__I();
        if ((58 === p3)) {
          return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bI(i$2), new ScalaJS.c.scala_Some().init___O(""))
        }
      };
      if ((x1 !== null)) {
        var i$3 = x1._2$mcI$sp__I();
        return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bI(i$3), ScalaJS.modules.scala_None())
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })()), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).filter__Lscala_Function1__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x$5) {
      return ScalaJS.bZ(ScalaJS.as.scala_Option(x$5._2__O()).isDefined__Z())
    })
  })()))).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
    return (function(x0$5) {
      var x1 = x0$5;
      if ((x1 !== null)) {
        var i = x1._1$mcI$sp__I();
        var opt = ScalaJS.as.scala_Option(x1._2__O());
        return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bI(i), opt.get__O())
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })()), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toList__Lscala_collection_immutable_List()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock = this;
  ScalaJS.impls.com_prealpha_pipe_blocks_generators_BlockGenerator$class__$init$__Lcom_prealpha_pipe_blocks_generators_BlockGenerator__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.captures = (function(arg$1, arg$2) {
  return this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.produce = (function(arg$1, arg$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.com$prealpha$pipe$blocks$generators$latex$TableBlock$$getColumnSeparators = (function(arg$1) {
  return this.com$prealpha$pipe$blocks$generators$latex$TableBlock$$getColumnSeparators__T__Lscala_collection_immutable_List(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.compile = (function(arg$1, arg$2) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.merge = (function(arg$1) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.merge__Lscala_collection_Seq__ = (function(results) {
  return this.merge__Lscala_collection_Seq__Lscala_Tuple2(results)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block, ctx) {
  return this.compile__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block, ctx)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.com$prealpha$pipe$blocks$generators$latex$TableBlock$$getColumnSeparators__T__ = (function(line) {
  return this.com$prealpha$pipe$blocks$generators$latex$TableBlock$$getColumnSeparators__T__Lscala_collection_immutable_List(line)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$2, ctx$2) {
  return this.produce__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Tuple2(block$2, ctx$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(block$3, ctx$3) {
  return ScalaJS.bZ(this.captures__Lcom_prealpha_pipe_blocks_Block__Lcom_prealpha_pipe_blocks_generators_CompileContext__Z(block$3, ctx$3))
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_TableBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.TableBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.TableBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_TableBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.TableBlock$", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_TableBlock$: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.char$1 = 0
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype.$char__C = (function() {
  return this.char$1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype.init___C = (function(char$2) {
  this.char$1 = char$2;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype.$char = (function() {
  return this.$char__C()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype.$char__ = (function() {
  return ScalaJS.bC(this.$char__C())
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.call(this);
  return this.init___C(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.TableBlock$ColumnAlignment")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.TableBlock$ColumnAlignment;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.TableBlock$ColumnAlignment", ScalaJS.data.java_lang_Object, {
  com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_Block$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction6.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction6();
ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_Block$;
ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype.toString__T = (function() {
  return "Block"
});
ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype.apply__T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lcom_prealpha_pipe_blocks_Block = (function(instance, argLine, level, lineNum, childLines, childBlocks) {
  return new ScalaJS.c.com_prealpha_pipe_blocks_Block().init___T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List(instance, argLine, level, lineNum, childLines, childBlocks)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype.unapply__Lcom_prealpha_pipe_blocks_Block__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple6().init___O__O__O__O__O__O(x$0.instance__T(), x$0.argLine__T(), ScalaJS.bI(x$0.level__I()), ScalaJS.bI(x$0.lineNum__I()), x$0.childLines__Lscala_collection_immutable_List(), x$0.childBlocks__Lscala_collection_immutable_List()))
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_Block()
});
ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype.apply__O__O__O__O__O__O__O = (function(v1, v2, v3, v4, v5, v6) {
  return this.apply__T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lcom_prealpha_pipe_blocks_Block(ScalaJS.as.java_lang_String(v1), ScalaJS.as.java_lang_String(v2), ScalaJS.uI(v3), ScalaJS.uI(v4), ScalaJS.as.scala_collection_immutable_List(v5), ScalaJS.as.scala_collection_immutable_List(v6))
});
ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype.apply = (function(arg$1, arg$2, arg$3, arg$4, arg$5, arg$6) {
  if ((typeof(arg$1) === "string")) {
    return this.apply__T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lcom_prealpha_pipe_blocks_Block(arg$1, arg$2, arg$3, arg$4, arg$5, arg$6)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O__O__O__O__O__O(arg$1, arg$2, arg$3, arg$4, arg$5, arg$6)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_blocks_Block__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype.unapply__Lcom_prealpha_pipe_blocks_Block__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_blocks_Block__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype.apply__T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List__ = (function(instance, argLine, level, lineNum, childLines, childBlocks) {
  return this.apply__T__T__I__I__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lcom_prealpha_pipe_blocks_Block(instance, argLine, level, lineNum, childLines, childBlocks)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_Block$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_Block$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_Block$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_Block$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_Block$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_Block$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_Block$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_Block$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_Block$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.Block")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_Block$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_Block$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_Block$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_Block$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.Block;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_Block$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_Block$: 0
}, false, "com.prealpha.pipe.blocks.Block$", ScalaJS.data.scala_runtime_AbstractFunction6, {
  com_prealpha_pipe_blocks_Block$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction6: 1,
  scala_Function6: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_Block$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_Block$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_Block = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_Block = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_Block)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_Block = new ScalaJS.c.com_prealpha_pipe_blocks_Block$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_Block
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype.toString__T = (function() {
  return "BlockException"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype.apply__Lcom_prealpha_pipe_blocks_Block__T__Lcom_prealpha_pipe_blocks_generators_BlockException = (function(block, message) {
  return new ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException().init___Lcom_prealpha_pipe_blocks_Block__T(block, message)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype.unapply__Lcom_prealpha_pipe_blocks_generators_BlockException__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.block__Lcom_prealpha_pipe_blocks_Block(), x$0.message__T()))
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_generators_BlockException()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__Lcom_prealpha_pipe_blocks_Block__T__Lcom_prealpha_pipe_blocks_generators_BlockException(ScalaJS.as.com_prealpha_pipe_blocks_Block(v1), ScalaJS.as.java_lang_String(v2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype.apply = (function(arg$1, arg$2) {
  if (ScalaJS.is.com_prealpha_pipe_blocks_Block(arg$1)) {
    return this.apply__Lcom_prealpha_pipe_blocks_Block__T__Lcom_prealpha_pipe_blocks_generators_BlockException(arg$1, arg$2)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O__O(arg$1, arg$2)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_blocks_generators_BlockException__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype.unapply__Lcom_prealpha_pipe_blocks_generators_BlockException__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_blocks_generators_BlockException__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype.apply__Lcom_prealpha_pipe_blocks_Block__T__ = (function(block, message) {
  return this.apply__Lcom_prealpha_pipe_blocks_Block__T__Lcom_prealpha_pipe_blocks_generators_BlockException(block, message)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_BlockException$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_BlockException$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_BlockException$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_BlockException$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_BlockException$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_BlockException$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_BlockException$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_BlockException$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.BlockException")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_BlockException$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_BlockException$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_BlockException$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_BlockException$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.BlockException;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_BlockException$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_BlockException$: 0
}, false, "com.prealpha.pipe.blocks.generators.BlockException$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  com_prealpha_pipe_blocks_generators_BlockException$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_BlockException$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_BlockException = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_BlockException = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_BlockException)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_BlockException = new ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_BlockException
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.eta$0$1$1$2 = null
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1;
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.prototype.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__V = (function(bb) {
  this.eta$0$1$1$2.addChild__Lcom_prealpha_pipe_blocks_BlockBuilder__V(bb)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.prototype.apply__O__O = (function(v1) {
  this.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__V(ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.prototype.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$8__Lcom_prealpha_pipe_blocks_BlockBuilder = (function($$outer, eta$0$1$1) {
  this.eta$0$1$1$2 = eta$0$1$1;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.com_prealpha_pipe_blocks_BlockBuilder(arg$1)) {
    return this.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__V(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.prototype.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__ = (function(bb) {
  return ScalaJS.bV(this.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__V(bb))
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1 = (function(arg$1, arg$2) {
  ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$8__Lcom_prealpha_pipe_blocks_BlockBuilder(arg$1, arg$2)
});
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1)))
});
ScalaJS.as.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$8$$anonfun$apply$1")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.BlocksParser$$anonfun$8$$anonfun$apply$1;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1: 0
}, false, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$8$$anonfun$apply$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$1;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.eta$0$2$1$2 = null
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2;
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.prototype.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__V = (function(bb$2) {
  this.eta$0$2$1$2.addChild__Lcom_prealpha_pipe_blocks_BlockBuilder__V(bb$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.prototype.apply__O__O = (function(v1) {
  this.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__V(ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.prototype.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$8__Lcom_prealpha_pipe_blocks_BlockBuilder = (function($$outer, eta$0$2$1) {
  this.eta$0$2$1$2 = eta$0$2$1;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.com_prealpha_pipe_blocks_BlockBuilder(arg$1)) {
    return this.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__V(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.prototype.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__ = (function(bb) {
  return ScalaJS.bV(this.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__V(bb))
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2 = (function(arg$1, arg$2) {
  ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$8__Lcom_prealpha_pipe_blocks_BlockBuilder(arg$1, arg$2)
});
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2)))
});
ScalaJS.as.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$8$$anonfun$apply$2")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.BlocksParser$$anonfun$8$$anonfun$apply$2;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2: 0
}, false, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$8$$anonfun$apply$2", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$8$$anonfun$apply$2;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1;
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.prototype.apply__C__Z = (function(x$3) {
  return (!ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(x$3)))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__C__Z(ScalaJS.uC(v1)))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.prototype.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "number")) {
    return this.apply__C__Z(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.prototype.apply__C__ = (function(x$3) {
  return ScalaJS.bZ(this.apply__C__Z(x$3))
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1)))
});
ScalaJS.as.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$1")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$1;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1: 0
}, false, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$1;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2;
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.prototype.apply__C__Z = (function(x$4) {
  return (!ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(x$4)))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__C__Z(ScalaJS.uC(v1)))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.prototype.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "number")) {
    return this.apply__C__Z(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.prototype.apply__C__ = (function(x$4) {
  return ScalaJS.bZ(this.apply__C__Z(x$4))
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2)))
});
ScalaJS.as.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$2")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$2;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2: 0
}, false, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$2", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$2;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3;
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.prototype.apply__C__Z = (function(x$5) {
  return ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(x$5))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__C__Z(ScalaJS.uC(v1)))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.prototype.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "number")) {
    return this.apply__C__Z(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.prototype.apply__C__ = (function(x$5) {
  return ScalaJS.bZ(this.apply__C__Z(x$5))
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3)))
});
ScalaJS.as.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$3")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$3;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3: 0
}, false, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$3", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$3;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.lineNum$1$2 = 0;
  this.indentLevel$1$2 = 0
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4;
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.prototype.apply__T__Lcom_prealpha_pipe_blocks_BlockBuilder = (function(p) {
  var bb = new ScalaJS.c.com_prealpha_pipe_blocks_BlockBuilder().init___T__T__I__I(p, "", this.indentLevel$1$2, this.lineNum$1$2);
  return bb
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lcom_prealpha_pipe_blocks_BlockBuilder(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.prototype.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2__I__I = (function($$outer, lineNum$1, indentLevel$1) {
  this.lineNum$1$2 = lineNum$1;
  this.indentLevel$1$2 = indentLevel$1;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "string")) {
    return this.apply__T__Lcom_prealpha_pipe_blocks_BlockBuilder(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.prototype.apply__T__ = (function(p) {
  return this.apply__T__Lcom_prealpha_pipe_blocks_BlockBuilder(p)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4 = (function(arg$1, arg$2, arg$3) {
  ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2__I__I(arg$1, arg$2, arg$3)
});
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4)))
});
ScalaJS.as.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$4")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$4;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4: 0
}, false, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$4", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$4;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5;
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.prototype.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder = (function(prev, cur) {
  prev.addChild__Lcom_prealpha_pipe_blocks_BlockBuilder__V(cur);
  return cur
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder(ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(v1), ScalaJS.as.com_prealpha_pipe_blocks_BlockBuilder(v2))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.prototype.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction2.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.prototype.apply = (function(arg$1, arg$2) {
  if (ScalaJS.is.com_prealpha_pipe_blocks_BlockBuilder(arg$1)) {
    return this.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder(arg$1, arg$2)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O__O(arg$1, arg$2)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.prototype.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder__ = (function(prev, cur) {
  return this.apply__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder__Lcom_prealpha_pipe_blocks_BlockBuilder(prev, cur)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5)))
});
ScalaJS.as.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$5")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$5;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5: 0
}, false, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$5", ScalaJS.data.scala_runtime_AbstractFunction2, {
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$5;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6;
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.prototype.apply__C__Z = (function(x$6) {
  return ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(x$6))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__C__Z(ScalaJS.uC(v1)))
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.prototype.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "number")) {
    return this.apply__C__Z(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.prototype.apply__C__ = (function(x$6) {
  return ScalaJS.bZ(this.apply__C__Z(x$6))
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.prototype = ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6)))
});
ScalaJS.as.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$6")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$6;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6: 0
}, false, "com.prealpha.pipe.blocks.BlocksParser$$anonfun$parse$2$$anonfun$6", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_BlocksParser$$anonfun$parse$2$$anonfun$6;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_BoldBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_BoldBlock$.prototype = new ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_FontBlock();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_BoldBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_BoldBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_BoldBlock$.prototype.fullName__T = (function() {
  return "bold"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_BoldBlock$.prototype.envName__T = (function() {
  return "textbf"
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_BoldBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_BoldBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_BoldBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_BoldBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_BoldBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_BoldBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_BoldBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_BoldBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_BoldBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_BoldBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_BoldBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.BoldBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_BoldBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_BoldBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_BoldBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_BoldBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.BoldBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_BoldBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_BoldBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.BoldBlock$", ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_FontBlock, {
  com_prealpha_pipe_blocks_generators_latex_BoldBlock$: 1,
  com_prealpha_pipe_blocks_generators_latex_FontBlock: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_BoldBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_BoldBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_BoldBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_BoldBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_BoldBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_BoldBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_BoldBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_BoldBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype.toString__T = (function() {
  return "ColumnAlignmentException"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype.apply__T__Lcom_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = (function(line) {
  return new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException().init___T(line)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype.unapply__Lcom_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.line__T())
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lcom_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "string")) {
    return this.apply__T__Lcom_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype.unapply__Lcom_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype.apply__T__ = (function(line) {
  return this.apply__T__Lcom_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException(line)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.ColumnAlignmentException")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.ColumnAlignmentException;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.ColumnAlignmentException$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.toString__T = (function() {
  return "CompileContext"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.apply__Lscala_collection_immutable_List__Lscala_collection_immutable_Map__Lcom_prealpha_pipe_blocks_generators_CompileContext = (function(generators, settings) {
  return new ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext().init___Lscala_collection_immutable_List__Lscala_collection_immutable_Map(generators, settings)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.unapply__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.generators__Lscala_collection_immutable_List(), x$0.settings__Lscala_collection_immutable_Map()))
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.$$lessinit$greater$default$2__Lscala_collection_immutable_Map = (function() {
  return ScalaJS.as.scala_collection_immutable_Map(ScalaJS.modules.scala_Predef().Map__Lscala_collection_immutable_Map$().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.apply$default$2__Lscala_collection_immutable_Map = (function() {
  return ScalaJS.as.scala_collection_immutable_Map(ScalaJS.modules.scala_Predef().Map__Lscala_collection_immutable_Map$().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_generators_CompileContext()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__Lscala_collection_immutable_List__Lscala_collection_immutable_Map__Lcom_prealpha_pipe_blocks_generators_CompileContext(ScalaJS.as.scala_collection_immutable_List(v1), ScalaJS.as.scala_collection_immutable_Map(v2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.apply = (function(arg$1, arg$2) {
  if (ScalaJS.is.scala_collection_immutable_List(arg$1)) {
    return this.apply__Lscala_collection_immutable_List__Lscala_collection_immutable_Map__Lcom_prealpha_pipe_blocks_generators_CompileContext(arg$1, arg$2)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O__O(arg$1, arg$2)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.$lessinit$greater$default$2 = (function() {
  return this.$$lessinit$greater$default$2__Lscala_collection_immutable_Map()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.apply$default$2 = (function() {
  return this.apply$default$2__Lscala_collection_immutable_Map()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.apply$default$2__ = (function() {
  return this.apply$default$2__Lscala_collection_immutable_Map()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.$$lessinit$greater$default$2__ = (function() {
  return this.$$lessinit$greater$default$2__Lscala_collection_immutable_Map()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.unapply__Lcom_prealpha_pipe_blocks_generators_CompileContext__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_blocks_generators_CompileContext__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.apply__Lscala_collection_immutable_List__Lscala_collection_immutable_Map__ = (function(generators, settings) {
  return this.apply__Lscala_collection_immutable_List__Lscala_collection_immutable_Map__Lcom_prealpha_pipe_blocks_generators_CompileContext(generators, settings)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_CompileContext$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_CompileContext$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_CompileContext$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_CompileContext$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_CompileContext$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_CompileContext$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_CompileContext$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_CompileContext$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.CompileContext")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_CompileContext$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_CompileContext$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_CompileContext$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_CompileContext$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.CompileContext;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_CompileContext$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_CompileContext$: 0
}, false, "com.prealpha.pipe.blocks.generators.CompileContext$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  com_prealpha_pipe_blocks_generators_CompileContext$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_CompileContext$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_CompileContext = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_CompileContext = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_CompileContext)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_CompileContext = new ScalaJS.c.com_prealpha_pipe_blocks_generators_CompileContext$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_CompileContext
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.prototype.apply__C__Z = (function(x$2) {
  return (!ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(x$2)))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__C__Z(ScalaJS.uC(v1)))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.prototype.init___Lcom_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "number")) {
    return this.apply__C__Z(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.prototype.apply__C__ = (function(x$2) {
  return ScalaJS.bZ(this.apply__C__Z(x$2))
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.DocumentBlock$$anonfun$1$$anonfun$apply$1")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.DocumentBlock$$anonfun$1$$anonfun$apply$1;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.DocumentBlock$$anonfun$1$$anonfun$apply$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$1$$anonfun$apply$1;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.prototype.apply__T__T = (function(x$6) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(x$6)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.prototype.apply__O__O = (function(v1) {
  return this.apply__T__T(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.prototype.init___Lcom_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "string")) {
    return this.apply__T__T(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.prototype.apply__T__ = (function(x$6) {
  return this.apply__T__T(x$6)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.DocumentBlock$$anonfun$3$$anonfun$apply$2")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.DocumentBlock$$anonfun$3$$anonfun$apply$2;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.DocumentBlock$$anonfun$3$$anonfun$apply$2", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_DocumentBlock$$anonfun$3$$anonfun$apply$2;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_EmptyResultContext$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_EmptyResultContext$.prototype = new ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_ResultContext();
ScalaJS.c.com_prealpha_pipe_blocks_generators_EmptyResultContext$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_EmptyResultContext$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_EmptyResultContext$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_generators_EmptyResultContext()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_EmptyResultContext$.prototype.init___ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext.prototype.init___Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set.call(this, ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil())), ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil())), ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil())));
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_EmptyResultContext = this;
  return this
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_EmptyResultContext$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_EmptyResultContext$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_EmptyResultContext$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_EmptyResultContext$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_EmptyResultContext$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_EmptyResultContext$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_EmptyResultContext$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_EmptyResultContext$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_EmptyResultContext$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_EmptyResultContext$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_EmptyResultContext$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.EmptyResultContext")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_EmptyResultContext$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_EmptyResultContext$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_EmptyResultContext$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_EmptyResultContext$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.EmptyResultContext;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_EmptyResultContext$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_EmptyResultContext$: 0
}, false, "com.prealpha.pipe.blocks.generators.EmptyResultContext$", ScalaJS.data.com_prealpha_pipe_blocks_generators_ResultContext, {
  com_prealpha_pipe_blocks_generators_EmptyResultContext$: 1,
  com_prealpha_pipe_blocks_generators_ResultContext: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_EmptyResultContext$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_EmptyResultContext$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_EmptyResultContext = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_EmptyResultContext = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_EmptyResultContext)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_EmptyResultContext = new ScalaJS.c.com_prealpha_pipe_blocks_generators_EmptyResultContext$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_EmptyResultContext
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body;
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body.prototype.apply__O = (function() {
  this.$$outer$2.hasLines_$eq__Z__V(true);
  this.$$outer$2.sb_$eq__Lscala_collection_mutable_StringBuilder__V(new ScalaJS.c.scala_collection_mutable_StringBuilder().init___());
  while (this.$$outer$2.hasLines__Z()) {
    var line = ScalaJS.modules.scala_Console().readLine__T();
    if (ScalaJS.anyRefEqEq(line, null)) {
      this.$$outer$2.hasLines_$eq__Z__V(false);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      this.$$outer$2.sb__Lscala_collection_mutable_StringBuilder().append__T__Lscala_collection_mutable_StringBuilder(line)
    }
  };
  ScalaJS.modules.scala_Predef().println__O__V(ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_LatexDocument().compile__T__T(this.$$outer$2.sb__Lscala_collection_mutable_StringBuilder().toString__T()));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body.prototype.init___Lcom_prealpha_pipe_blocks_EntryPoint$ = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body.prototype.apply = (function() {
  return this.apply__O()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body.prototype = ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_EntryPoint$(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body.prototype = ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body)))
});
ScalaJS.as.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.EntryPoint$delayedInit$body")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.EntryPoint$delayedInit$body;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_EntryPoint$delayedInit$body: 0
}, false, "com.prealpha.pipe.blocks.EntryPoint$delayedInit$body", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_blocks_EntryPoint$delayedInit$body: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_EntryPoint$delayedInit$body;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.prototype.apply__C__Z = (function(x$3) {
  return (!ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(x$3)))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__C__Z(ScalaJS.uC(v1)))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.prototype.init___Lcom_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "number")) {
    return this.apply__C__Z(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.prototype.apply__C__ = (function(x$3) {
  return ScalaJS.bZ(this.apply__C__Z(x$3))
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.EquationBlock$$anonfun$3$$anonfun$apply$2")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.EquationBlock$$anonfun$3$$anonfun$apply$2;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.EquationBlock$$anonfun$3$$anonfun$apply$2", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$3$$anonfun$apply$2;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.alignTo$2$f = null
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2.prototype.apply__O__Lscala_collection_Seq = (function(x$1) {
  return ScalaJS.as.scala_collection_Seq(ScalaJS.as.scala_collection_TraversableLike(x$1).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(arg$outer) {
    return (function(a) {
      return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_EquationBlock().processAlign__Lscala_collection_Seq__Lcom_prealpha_pipe_math_MathExpr__Lscala_collection_Seq(a, arg$outer.alignTo$2$f)
    })
  })(this)), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2.prototype.apply__O__O = (function(v1) {
  return this.apply__O__Lscala_collection_Seq(v1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2.prototype.init___Lcom_prealpha_pipe_math_MathExpr = (function(alignTo$2) {
  this.alignTo$2$f = alignTo$2;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2.prototype.apply = (function(arg$1) {
  return this.apply__O__Lscala_collection_Seq(arg$1)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2.call(this);
  return this.init___Lcom_prealpha_pipe_math_MathExpr(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.EquationBlock$$anonfun$processAlignOne$2")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.EquationBlock$$anonfun$processAlignOne$2;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.EquationBlock$$anonfun$processAlignOne$2", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_EquationBlock$$anonfun$processAlignOne$2;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1;
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("$")
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1.prototype.init___Lcom_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1)))
});
ScalaJS.as.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1: 0
}, false, "com.prealpha.pipe.blocks.InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2;
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(".")).r__Lscala_util_matching_Regex())
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2.prototype.init___Lcom_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2)))
});
ScalaJS.as.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2: 0
}, false, "com.prealpha.pipe.blocks.InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3;
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.prototype.apply__Lscala_collection_immutable_List__T = (function(x$4) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(x$4.mkString__T())
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_collection_immutable_List__T(ScalaJS.as.scala_collection_immutable_List(v1))
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.prototype.init___Lcom_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.prototype.apply = (function(arg$1) {
  if (ScalaJS.is.scala_collection_immutable_List(arg$1)) {
    return this.apply__Lscala_collection_immutable_List__T(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.prototype.apply__Lscala_collection_immutable_List__ = (function(x$4) {
  return this.apply__Lscala_collection_immutable_List__T(x$4)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3)))
});
ScalaJS.as.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3: 0
}, false, "com.prealpha.pipe.blocks.InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1 = (function() {
  ScalaJS.c.scala_util_parsing_combinator_Parsers$Parser.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1.prototype = new ScalaJS.inheritable.scala_util_parsing_combinator_Parsers$Parser();
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1;
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1.prototype.apply__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(in$2) {
  var x1 = ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("$").$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().not__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$1().init___Lcom_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5(this)).$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$2().init___Lcom_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5(this)).$$plus__Lscala_util_parsing_combinator_Parsers$Parser().$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5$$anonfun$apply$3().init___Lcom_prealpha_pipe_blocks_InlineParser$$anon$1$$anonfun$5(this))
    })
  })())).$$less$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("$")
    })
  })())).apply__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(in$2);
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$Error(x1)) {
    var x2 = ScalaJS.as.scala_util_parsing_combinator_Parsers$Error(x1);
    var msg = x2.msg__T();
    var next = x2.next__Lscala_util_parsing_input_Reader();
    return new ScalaJS.c.scala_util_parsing_combinator_Parsers$Error().init___Lscala_util_parsing_combinator_Parsers__T__Lscala_util_parsing_input_Reader(ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser(), msg, next)
  };
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$Failure(x1)) {
    var x3 = ScalaJS.as.scala_util_parsing_combinator_Parsers$Failure(x1);
    var msg$2 = x3.msg__T();
    var next$2 = x3.next__Lscala_util_parsing_input_Reader();
    return new ScalaJS.c.scala_util_parsing_combinator_Parsers$Failure().init___Lscala_util_parsing_combinator_Parsers__T__Lscala_util_parsing_input_Reader(ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser(), msg$2, next$2)
  };
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$Success(x1)) {
    var x4 = ScalaJS.as.scala_util_parsing_combinator_Parsers$Success(x1);
    var result = ScalaJS.as.java_lang_String(x4.result__O());
    var next$3 = x4.next__Lscala_util_parsing_input_Reader();
    if ((result !== null)) {
      var x5 = result;
      var x1$2 = ScalaJS.modules.com_prealpha_pipe_math_MathParser().tryParse__T__Lscala_util_Try(x5).map__Lscala_Function1__Lscala_util_Try(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
        return (function(exprs) {
          return ScalaJS.modules.com_prealpha_pipe_math_CodeGen().genEntire__Lscala_collection_Seq__T(exprs)
        })
      })()));
      if (ScalaJS.is.scala_util_Success(x1$2)) {
        var x2$2 = ScalaJS.as.scala_util_Success(x1$2);
        var latex = ScalaJS.as.java_lang_String(x2$2.value__O());
        return new ScalaJS.c.scala_util_parsing_combinator_Parsers$Success().init___Lscala_util_parsing_combinator_Parsers__O__Lscala_util_parsing_input_Reader(ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser(), (("$" + latex) + "$"), next$3)
      };
      if (ScalaJS.is.scala_util_Failure(x1$2)) {
        var x3$2 = ScalaJS.as.scala_util_Failure(x1$2);
        var exception = x3$2.exception__Ljava_lang_Throwable();
        return new ScalaJS.c.scala_util_parsing_combinator_Parsers$Failure().init___Lscala_util_parsing_combinator_Parsers__T__Lscala_util_parsing_input_Reader(ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser(), exception.getMessage__T(), next$3)
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
    }
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(ScalaJS.as.scala_util_parsing_input_Reader(v1))
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1.prototype.init___ = (function() {
  ScalaJS.c.scala_util_parsing_combinator_Parsers$Parser.prototype.init___Lscala_util_parsing_combinator_Parsers.call(this, ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser());
  return this
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anon$1.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anon$1 = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anon$1.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_InlineParser$$anon$1)))
});
ScalaJS.as.com_prealpha_pipe_blocks_InlineParser$$anon$1 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.InlineParser$$anon$1")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_InlineParser$$anon$1)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.InlineParser$$anon$1;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anon$1 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_InlineParser$$anon$1: 0
}, false, "com.prealpha.pipe.blocks.InlineParser$$anon$1", ScalaJS.data.scala_util_parsing_combinator_Parsers$Parser, {
  com_prealpha_pipe_blocks_InlineParser$$anon$1: 1,
  scala_util_parsing_combinator_Parsers$Parser: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$1.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anon$1;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6;
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("|)")
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6.prototype.init___Lcom_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6)))
});
ScalaJS.as.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6: 0
}, false, "com.prealpha.pipe.blocks.InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2 = (function() {
  ScalaJS.c.scala_util_parsing_combinator_Parsers$Parser.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2.prototype = new ScalaJS.inheritable.scala_util_parsing_combinator_Parsers$Parser();
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2;
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2.prototype.apply__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult = (function(in$2) {
  var x1 = ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("(|").$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
    return (function() {
      return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("[a-zA-Z0-9$]+")).r__Lscala_util_matching_Regex())
    })
  })())).apply__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(in$2);
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$Error(x1)) {
    var x2 = ScalaJS.as.scala_util_parsing_combinator_Parsers$Error(x1);
    var msg = x2.msg__T();
    var next = x2.next__Lscala_util_parsing_input_Reader();
    return new ScalaJS.c.scala_util_parsing_combinator_Parsers$Error().init___Lscala_util_parsing_combinator_Parsers__T__Lscala_util_parsing_input_Reader(ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser(), msg, next)
  };
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$Failure(x1)) {
    var x3 = ScalaJS.as.scala_util_parsing_combinator_Parsers$Failure(x1);
    var msg$2 = x3.msg__T();
    var next$2 = x3.next__Lscala_util_parsing_input_Reader();
    return new ScalaJS.c.scala_util_parsing_combinator_Parsers$Failure().init___Lscala_util_parsing_combinator_Parsers__T__Lscala_util_parsing_input_Reader(ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser(), msg$2, next$2)
  };
  if (ScalaJS.is.scala_util_parsing_combinator_Parsers$Success(x1)) {
    var x4 = ScalaJS.as.scala_util_parsing_combinator_Parsers$Success(x1);
    var result = ScalaJS.as.java_lang_String(x4.result__O());
    var next$3 = x4.next__Lscala_util_parsing_input_Reader();
    var x1$2 = result;
    if (ScalaJS.anyRefEqEq("latex", x1$2)) {
      return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().not__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
        return (function() {
          return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("(|")
        })
      })())).$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
        return (function() {
          return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().not__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5$$anonfun$apply$6().init___Lcom_prealpha_pipe_blocks_InlineParser$$anon$2$$anonfun$apply$5(this))
        })
      })())).$$tilde$greater__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
        return (function() {
          return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().regex__Lscala_util_matching_Regex__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(".")).r__Lscala_util_matching_Regex())
        })
      })())).$$plus__Lscala_util_parsing_combinator_Parsers$Parser().$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
        return (function(x$5) {
          return x$5.mkString__T()
        })
      })())).$$less$tilde__Lscala_Function0__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction0((function() {
        return (function() {
          return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("|)")
        })
      })())).$$up$up__Lscala_Function1__Lscala_util_parsing_combinator_Parsers$Parser(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
        return (function(x$6) {
          return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(x$6)
        })
      })())).apply__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(next$3)
    };
    return new ScalaJS.c.scala_util_parsing_combinator_Parsers$Failure().init___Lscala_util_parsing_combinator_Parsers__T__Lscala_util_parsing_input_Reader(ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser(), new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["unrecognized inline ", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [result]))), in$2.drop__I__Lscala_util_parsing_input_Reader(2))
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_parsing_input_Reader__Lscala_util_parsing_combinator_Parsers$ParseResult(ScalaJS.as.scala_util_parsing_input_Reader(v1))
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2.prototype.init___ = (function() {
  ScalaJS.c.scala_util_parsing_combinator_Parsers$Parser.prototype.init___Lscala_util_parsing_combinator_Parsers.call(this, ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser());
  return this
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anon$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anon$2 = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anon$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_InlineParser$$anon$2)))
});
ScalaJS.as.com_prealpha_pipe_blocks_InlineParser$$anon$2 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.InlineParser$$anon$2")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_InlineParser$$anon$2)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.InlineParser$$anon$2;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anon$2 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_InlineParser$$anon$2: 0
}, false, "com.prealpha.pipe.blocks.InlineParser$$anon$2", ScalaJS.data.scala_util_parsing_combinator_Parsers$Parser, {
  com_prealpha_pipe_blocks_InlineParser$$anon$2: 1,
  scala_util_parsing_combinator_Parsers$Parser: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anon$2.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anon$2;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11;
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("|)")
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11.prototype.init___Lcom_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11)))
});
ScalaJS.as.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.InlineParser$$anonfun$normalElem$2$$anonfun$apply$11")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.InlineParser$$anonfun$normalElem$2$$anonfun$apply$11;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11: 0
}, false, "com.prealpha.pipe.blocks.InlineParser$$anonfun$normalElem$2$$anonfun$apply$11", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$2$$anonfun$apply$11;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12;
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12.prototype.apply__Lscala_util_parsing_combinator_Parsers$Parser = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().literal__T__Lscala_util_parsing_combinator_Parsers$Parser("$")
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12.prototype.apply__O = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12.prototype.init___Lcom_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12.prototype.apply = (function() {
  return this.apply__Lscala_util_parsing_combinator_Parsers$Parser()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12.prototype = ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12)))
});
ScalaJS.as.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.InlineParser$$anonfun$normalElem$3$$anonfun$apply$12")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.InlineParser$$anonfun$normalElem$3$$anonfun$apply$12;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12: 0
}, false, "com.prealpha.pipe.blocks.InlineParser$$anonfun$normalElem$3$$anonfun$apply$12", ScalaJS.data.scala_runtime_AbstractFunction0, {
  com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_InlineParser$$anonfun$normalElem$3$$anonfun$apply$12;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_FontBlock.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$.prototype = new ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_FontBlock();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$.prototype.fullName__T = (function() {
  return "italic"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$.prototype.envName__T = (function() {
  return "textit"
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.ItalicBlock")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.ItalicBlock;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_ItalicBlock$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.ItalicBlock$", ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_FontBlock, {
  com_prealpha_pipe_blocks_generators_latex_ItalicBlock$: 1,
  com_prealpha_pipe_blocks_generators_latex_FontBlock: 1,
  com_prealpha_pipe_blocks_generators_BlockGenerator: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ItalicBlock = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_ItalicBlock = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ItalicBlock)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ItalicBlock = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ItalicBlock$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_ItalicBlock
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.prototype.apply__T__Lscala_Tuple2 = (function(s) {
  return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_MathBlock().com$prealpha$pipe$blocks$generators$latex$MathBlock$$parseInline$1__T__Lscala_Tuple2(s)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_Tuple2(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.prototype.init___Lcom_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "string")) {
    return this.apply__T__Lscala_Tuple2(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.prototype.apply__T__ = (function(s) {
  return this.apply__T__Lscala_Tuple2(s)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.MathBlock$$anonfun$7$$anonfun$apply$3")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.MathBlock$$anonfun$7$$anonfun$apply$3;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.MathBlock$$anonfun$7$$anonfun$apply$3", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_MathBlock$$anonfun$7$$anonfun$apply$3;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.prototype.apply__C__Z = (function(x$2) {
  return ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(x$2))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__C__Z(ScalaJS.uC(v1)))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.prototype.init___Lcom_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1 = (function($$outer) {
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "number")) {
    return this.apply__C__Z(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.prototype.apply__C__ = (function(x$2) {
  return ScalaJS.bZ(this.apply__C__Z(x$2))
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1 = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.RawTextBlock$$anonfun$1$$anonfun$apply$1")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.RawTextBlock$$anonfun$1$$anonfun$apply$1;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.RawTextBlock$$anonfun$1$$anonfun$apply$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_RawTextBlock$$anonfun$1$$anonfun$apply$1;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction3.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction3();
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.toString__T = (function() {
  return "ResultContext"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lcom_prealpha_pipe_blocks_generators_ResultContext = (function(imports, settings, insideDoc) {
  return new ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext().init___Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(imports, settings, insideDoc)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.unapply__Lcom_prealpha_pipe_blocks_generators_ResultContext__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(x$0.imports__Lscala_collection_immutable_Set(), x$0.settings__Lscala_collection_immutable_Set(), x$0.insideDoc__Lscala_collection_immutable_Set()))
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.$$lessinit$greater$default$1__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.$$lessinit$greater$default$2__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.$$lessinit$greater$default$3__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply$default$1__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply$default$2__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply$default$3__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil()))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_generators_ResultContext()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply__O__O__O__O = (function(v1, v2, v3) {
  return this.apply__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lcom_prealpha_pipe_blocks_generators_ResultContext(ScalaJS.as.scala_collection_immutable_Set(v1), ScalaJS.as.scala_collection_immutable_Set(v2), ScalaJS.as.scala_collection_immutable_Set(v3))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply = (function(arg$1, arg$2, arg$3) {
  if (ScalaJS.is.scala_collection_immutable_Set(arg$1)) {
    return this.apply__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lcom_prealpha_pipe_blocks_generators_ResultContext(arg$1, arg$2, arg$3)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O__O__O(arg$1, arg$2, arg$3)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.unapply = (function(arg$1) {
  return this.unapply__Lcom_prealpha_pipe_blocks_generators_ResultContext__Lscala_Option(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.$lessinit$greater$default$1 = (function() {
  return this.$$lessinit$greater$default$1__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.$lessinit$greater$default$2 = (function() {
  return this.$$lessinit$greater$default$2__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.$lessinit$greater$default$3 = (function() {
  return this.$$lessinit$greater$default$3__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply$default$1 = (function() {
  return this.apply$default$1__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply$default$2 = (function() {
  return this.apply$default$2__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply$default$3 = (function() {
  return this.apply$default$3__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply$default$3__ = (function() {
  return this.apply$default$3__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply$default$2__ = (function() {
  return this.apply$default$2__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply$default$1__ = (function() {
  return this.apply$default$1__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.$$lessinit$greater$default$3__ = (function() {
  return this.$$lessinit$greater$default$3__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.$$lessinit$greater$default$2__ = (function() {
  return this.$$lessinit$greater$default$2__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.$$lessinit$greater$default$1__ = (function() {
  return this.$$lessinit$greater$default$1__Lscala_collection_immutable_Set()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.unapply__Lcom_prealpha_pipe_blocks_generators_ResultContext__ = (function(x$0) {
  return this.unapply__Lcom_prealpha_pipe_blocks_generators_ResultContext__Lscala_Option(x$0)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.apply__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__ = (function(imports, settings, insideDoc) {
  return this.apply__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Lcom_prealpha_pipe_blocks_generators_ResultContext(imports, settings, insideDoc)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_ResultContext$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_ResultContext$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_ResultContext$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_ResultContext$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_ResultContext$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_ResultContext$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_ResultContext$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_ResultContext$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.ResultContext")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_ResultContext$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_ResultContext$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_ResultContext$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_ResultContext$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.ResultContext;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_ResultContext$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_ResultContext$: 0
}, false, "com.prealpha.pipe.blocks.generators.ResultContext$", ScalaJS.data.scala_runtime_AbstractFunction3, {
  com_prealpha_pipe_blocks_generators_ResultContext$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction3: 1,
  scala_Function3: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_ResultContext$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_ResultContext = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_ResultContext = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_ResultContext)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_ResultContext = new ScalaJS.c.com_prealpha_pipe_blocks_generators_ResultContext$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_ResultContext
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.sb$1$2 = null;
  this.separators$1$f = null
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.prototype.apply__T__Lscala_collection_mutable_StringBuilder = (function(line) {
  if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__matches__Lscala_scalajs_runtime_RuntimeString__T__Z(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(line), "[- :|]+") && ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__contains__Lscala_scalajs_runtime_RuntimeString__Ljava_lang_CharSequence__Z(line, "-"))) {
    return this.sb$1$2.append__T__Lscala_collection_mutable_StringBuilder("\\hline\n")
  } else {
    var lb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
    ScalaJS.as.scala_collection_IterableLike(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(line)).zipWithIndex__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_Predef().fallbackStringCanBuildFrom__Lscala_collection_generic_CanBuildFrom())).foreach__Lscala_Function1__V(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function(arg$outer, lb$1) {
      return (function(x0$3) {
        var x1 = x0$3;
        if ((x1 !== null)) {
          var c = x1._1$mcC$sp__C();
          var i = x1._2$mcI$sp__I();
          if ((i === ScalaJS.as.scala_Tuple2(arg$outer.separators$1$f.head__O())._1$mcI$sp__I())) {
            return lb$1.append__T__Lscala_collection_mutable_StringBuilder(" ")
          } else {
            if (ScalaJS.as.scala_collection_LinearSeqOptimized(ScalaJS.as.scala_collection_generic_GenericTraversableTemplate(arg$outer.separators$1$f.tail__O()).unzip__Lscala_Function1__Lscala_Tuple2(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less())._1__O()).contains__O__Z(ScalaJS.bI(i))) {
              return lb$1.append__T__Lscala_collection_mutable_StringBuilder("&")
            } else {
              return lb$1.append__C__Lscala_collection_mutable_StringBuilder(c)
            }
          }
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      })
    })(this, lb)));
    var rawStr = ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(lb.toString__T()))).dropRight__I__O(1));
    var parsedStr = ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__AT(rawStr, "&"), 1)).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.classes.scala_scalajs_js_runtime_AnonFunction1((function() {
      return (function(str) {
        return ScalaJS.as.java_lang_String(ScalaJS.modules.com_prealpha_pipe_blocks_InlineParser().apply__T__Lscala_util_Try(str).get__O())
      })
    })()), ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.java_lang_String.getClassOf()))), 1)).mkString__T__T("&");
    return this.sb$1$2.append__T__Lscala_collection_mutable_StringBuilder((("" + parsedStr) + " \\\\\n"))
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_collection_mutable_StringBuilder(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.prototype.init___Lscala_collection_mutable_StringBuilder__Lscala_collection_immutable_List = (function(sb$1, separators$1) {
  this.sb$1$2 = sb$1;
  this.separators$1$f = separators$1;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.prototype.apply = (function(arg$1) {
  if ((typeof(arg$1) === "string")) {
    return this.apply__T__Lscala_collection_mutable_StringBuilder(arg$1)
  } else {
    if (ScalaJS.is.java_lang_Object(arg$1)) {
      return this.apply__O__O(arg$1)
    } else {
      throw "No matching overload"
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.prototype.apply__T__ = (function(line) {
  return this.apply__T__Lscala_collection_mutable_StringBuilder(line)
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2 = (function(arg$1, arg$2) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.call(this);
  return this.init___Lscala_collection_mutable_StringBuilder__Lscala_collection_immutable_List(arg$1, arg$2)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2 = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.TableBlock$$anonfun$produce$2")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.TableBlock$$anonfun$produce$2;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2 = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.TableBlock$$anonfun$produce$2", ScalaJS.data.scala_runtime_AbstractFunction1, {
  com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$$anonfun$produce$2;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype = new ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.productPrefix__T = (function() {
  return "CenterAlign"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$(x$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.hashCode__I = (function() {
  return -982978672
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.toString__T = (function() {
  return "CenterAlign"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.init___ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype.init___C.call(this, 99);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.TableBlock$CenterAlign")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.TableBlock$CenterAlign;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.TableBlock$CenterAlign$", ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment, {
  com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$CenterAlign
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype = new ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.productPrefix__T = (function() {
  return "FillAlign"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$(x$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.hashCode__I = (function() {
  return 860146466
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.toString__T = (function() {
  return "FillAlign"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.init___ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype.init___C.call(this, 88);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.TableBlock$FillAlign")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.TableBlock$FillAlign;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.TableBlock$FillAlign$", ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment, {
  com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$FillAlign
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype = new ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.productPrefix__T = (function() {
  return "LeftAlign"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$(x$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.hashCode__I = (function() {
  return -576974050
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.toString__T = (function() {
  return "LeftAlign"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.init___ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype.init___C.call(this, 108);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.TableBlock$LeftAlign")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.TableBlock$LeftAlign;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.TableBlock$LeftAlign$", ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment, {
  com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$LeftAlign
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype = new ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.productPrefix__T = (function() {
  return "RightAlign"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$(x$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.hashCode__I = (function() {
  return 577876585
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.toString__T = (function() {
  return "RightAlign"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.init___ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment.prototype.init___C.call(this, 114);
  ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$ = (function() {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.call(this);
  return this.init___()
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$ = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.TableBlock$RightAlign")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.TableBlock$RightAlign;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$ = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.TableBlock$RightAlign$", ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment, {
  com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  com_prealpha_pipe_blocks_generators_latex_TableBlock$ColumnAlignment: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$;
ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign = undefined;
ScalaJS.modules.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign = (function() {
  if ((!ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign)) {
    ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign = new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign$().init___()
  };
  return ScalaJS.moduleInstances.com_prealpha_pipe_blocks_generators_latex_TableBlock$RightAlign
});

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException = (function() {
  ScalaJS.c.java_lang_Exception.call(this);
  this.block$3 = null;
  this.message$3 = null
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException;
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.block__Lcom_prealpha_pipe_blocks_Block = (function() {
  return this.block$3
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.message__T = (function() {
  return this.message$3
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.copy__Lcom_prealpha_pipe_blocks_Block__T__Lcom_prealpha_pipe_blocks_generators_BlockException = (function(block, message) {
  return new ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException().init___Lcom_prealpha_pipe_blocks_Block__T(block, message)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.copy$default$1__Lcom_prealpha_pipe_blocks_Block = (function() {
  return this.block__Lcom_prealpha_pipe_blocks_Block()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.copy$default$2__T = (function() {
  return this.message__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.productPrefix__T = (function() {
  return "BlockException"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.block__Lcom_prealpha_pipe_blocks_Block();
        break
      };
    case 1:
      {
        return this.message__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_blocks_generators_BlockException(x$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_blocks_generators_BlockException(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var BlockException$1 = ScalaJS.as.com_prealpha_pipe_blocks_generators_BlockException(x$1);
      return ((ScalaJS.anyRefEqEq(this.block__Lcom_prealpha_pipe_blocks_Block(), BlockException$1.block__Lcom_prealpha_pipe_blocks_Block()) && ScalaJS.anyRefEqEq(this.message__T(), BlockException$1.message__T())) && BlockException$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.init___Lcom_prealpha_pipe_blocks_Block__T = (function(block, message) {
  this.block$3 = block;
  this.message$3 = message;
  ScalaJS.c.java_lang_Exception.prototype.init___T.call(this, new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["Error inside block ", "} at line ", ": \\n ", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [block.instance__T(), ScalaJS.bI(block.lineNum__I()), message]))));
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.block = (function() {
  return this.block__Lcom_prealpha_pipe_blocks_Block()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.message = (function() {
  return this.message__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.copy = (function(arg$1, arg$2) {
  return this.copy__Lcom_prealpha_pipe_blocks_Block__T__Lcom_prealpha_pipe_blocks_generators_BlockException(arg$1, arg$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.copy$default$1 = (function() {
  return this.copy$default$1__Lcom_prealpha_pipe_blocks_Block()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.copy$default$2 = (function() {
  return this.copy$default$2__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.copy$default$2__ = (function() {
  return this.copy$default$2__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__Lcom_prealpha_pipe_blocks_Block()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.copy__Lcom_prealpha_pipe_blocks_Block__T__ = (function(block, message) {
  return this.copy__Lcom_prealpha_pipe_blocks_Block__T__Lcom_prealpha_pipe_blocks_generators_BlockException(block, message)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.message__ = (function() {
  return this.message__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.block__ = (function() {
  return this.block__Lcom_prealpha_pipe_blocks_Block()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_BlockException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_BlockException.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_BlockException = (function(arg$1, arg$2) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.call(this);
  return this.init___Lcom_prealpha_pipe_blocks_Block__T(arg$1, arg$2)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_BlockException.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_BlockException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_BlockException)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_BlockException = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_BlockException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.BlockException")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_BlockException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_BlockException)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_BlockException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_BlockException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.BlockException;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_BlockException = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_BlockException: 0
}, false, "com.prealpha.pipe.blocks.generators.BlockException", ScalaJS.data.java_lang_Exception, {
  com_prealpha_pipe_blocks_generators_BlockException: 1,
  scala_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_BlockException.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_BlockException;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = (function() {
  ScalaJS.c.java_lang_Exception.call(this);
  this.line$3 = null
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException;
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.line__T = (function() {
  return this.line$3
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.copy__T__Lcom_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = (function(line) {
  return new ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException().init___T(line)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.copy$default$1__T = (function() {
  return this.line__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.productPrefix__T = (function() {
  return "ColumnAlignmentException"
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.line__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException(x$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime()._hashCode__Lscala_Product__I(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var ColumnAlignmentException$1 = ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException(x$1);
      return (ScalaJS.anyRefEqEq(this.line__T(), ColumnAlignmentException$1.line__T()) && ColumnAlignmentException$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.init___T = (function(line) {
  this.line$3 = line;
  ScalaJS.c.java_lang_Exception.prototype.init___T.call(this, new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["columns mis-aligned on the following line:\\n", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [line]))));
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.line = (function() {
  return this.line__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.copy = (function(arg$1) {
  return this.copy__T__Lcom_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.copy$default$1 = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.productPrefix = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.productArity = (function() {
  return this.productArity__I()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.productElement = (function(arg$1) {
  return this.productElement__I__O(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.productIterator = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.canEqual = (function(arg$1) {
  return this.canEqual__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.equals = (function(arg$1) {
  return this.equals__O__Z(arg$1)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.copy$default$1__ = (function() {
  return this.copy$default$1__T()
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.copy__T__ = (function(line) {
  return this.copy__T__Lcom_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException(line)
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.line__ = (function() {
  return this.line__T()
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = (function(arg$1) {
  ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.call(this);
  return this.init___T(arg$1)
});
ScalaJS.classes.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype = ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException)))
});
ScalaJS.as.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.generators.latex.ColumnAlignmentException")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.generators.latex.ColumnAlignmentException;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException: 0
}, false, "com.prealpha.pipe.blocks.generators.latex.ColumnAlignmentException", ScalaJS.data.java_lang_Exception, {
  com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException: 1,
  scala_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_generators_latex_ColumnAlignmentException;

/** @constructor */
ScalaJS.c.com_prealpha_pipe_blocks_ParseError = (function() {
  ScalaJS.c.java_lang_Exception.call(this)
});
ScalaJS.c.com_prealpha_pipe_blocks_ParseError.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.com_prealpha_pipe_blocks_ParseError.prototype.constructor = ScalaJS.c.com_prealpha_pipe_blocks_ParseError;
ScalaJS.c.com_prealpha_pipe_blocks_ParseError.prototype.init___I__T__T = (function(lineNumber, line, msg) {
  ScalaJS.c.java_lang_Exception.prototype.init___T.call(this, new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["Parse error on line ", " (", "):\\n", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(lineNumber), line, msg]))));
  return this
});
/** @constructor */
ScalaJS.inheritable.com_prealpha_pipe_blocks_ParseError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_prealpha_pipe_blocks_ParseError.prototype = ScalaJS.c.com_prealpha_pipe_blocks_ParseError.prototype;
/** @constructor */
ScalaJS.classes.com_prealpha_pipe_blocks_ParseError = (function(arg$1, arg$2, arg$3) {
  ScalaJS.c.com_prealpha_pipe_blocks_ParseError.call(this);
  return this.init___I__T__T(arg$1, arg$2, arg$3)
});
ScalaJS.classes.com_prealpha_pipe_blocks_ParseError.prototype = ScalaJS.c.com_prealpha_pipe_blocks_ParseError.prototype;
ScalaJS.is.com_prealpha_pipe_blocks_ParseError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_prealpha_pipe_blocks_ParseError)))
});
ScalaJS.as.com_prealpha_pipe_blocks_ParseError = (function(obj) {
  if ((ScalaJS.is.com_prealpha_pipe_blocks_ParseError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.prealpha.pipe.blocks.ParseError")
  }
});
ScalaJS.isArrayOf.com_prealpha_pipe_blocks_ParseError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_prealpha_pipe_blocks_ParseError)))
});
ScalaJS.asArrayOf.com_prealpha_pipe_blocks_ParseError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_prealpha_pipe_blocks_ParseError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.prealpha.pipe.blocks.ParseError;", depth)
  }
});
ScalaJS.data.com_prealpha_pipe_blocks_ParseError = new ScalaJS.ClassTypeData({
  com_prealpha_pipe_blocks_ParseError: 0
}, false, "com.prealpha.pipe.blocks.ParseError", ScalaJS.data.java_lang_Exception, {
  com_prealpha_pipe_blocks_ParseError: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.com_prealpha_pipe_blocks_ParseError.prototype.$classData = ScalaJS.data.com_prealpha_pipe_blocks_ParseError;

//@ sourceMappingURL=blocks.js.map
