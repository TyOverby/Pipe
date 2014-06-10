var init = function () {
    var QUEUE = MathJax.Hub.queue;  // shorthand for the queue
    var math = null, box = null;    // the element jax for the math output, and the box it's in

    //
    //  Hide and show the box (so it doesn't flicker as much)
    //
    var HIDEBOX = function () {box.style.visibility = "hidden";};
    var SHOWBOX = function () {box.style.visibility = "visible";};

    //
    //  Get the element jax when MathJax has produced it.
    //
    QUEUE.Push(function () {
        math = MathJax.Hub.getAllJax("MathOutput")[0];
        box = document.getElementById("tex");
        SHOWBOX(); // box is initially hidden so the braces don't show
    });

    //
    //  The onchange event handler that typesets the math entered
    //  by the user.  Hide the box, then typeset, then show it again
    //  so we don't see a flash as the math is cleared and replaced.
    //
    window.UpdateMath = function (TeX) {
        QUEUE.Push(HIDEBOX,["Text",math,"\\displaystyle{"+TeX+"}"],SHOWBOX);
    };

    var input = document.getElementById("input");
    var c = MathCompiler();
    input.onkeyup = function(e) {
        output.value = c.compile(input.value).ms;
        window.UpdateMath(output.value);
    };
    setTimeout(function() {input.onkeyup();}, 1000);
};

var try_init = function(){
    if (window.MathJax === undefined || window.MathCompiler === undefined) {
        setTimeout(try_init, 100);
    } else {
        init();
    }
};
try_init();
