function init(){
    var result = document.getElementById("result");
    var clean = document.getElementById("clean");
    var equal = document.getElementById("equal");
    var plus = document.getElementById("plus");
    var minus = document.getElementById("minus");
    var multiplication = document.getElementById("multiplication");
    var division = document.getElementById("division");
    var zero = document.getElementById("zero");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
}

//Events
zero.onclick = function(){
    result.value += "0";
}

one.onclick = function(){
    result.value += "1";
}

two.onclick = function(){
    result.value += "2";
}

three.onclick = function(){
    result.value += "3";
}

four.onclick = function(){
    result.value += "4";
}

five.onclick = function(){
    result.value += "5";
}

six.onclick = function(){
    result.value += "6";
}

seven.onclick = function(){
    result.value += "7";
}

eight.onclick = function(){
    result.value += "8";
}

nine.onclick = function(){
    result.value += "9";
}

plus.onclick = function(){
    result.value += "+";
}

minus.onclick = function(){
    result.value += "-";
}

multiplication.onclick = function(){
    result.value += "*";
}

division.onclick = function(){
    result.value += "/";
}

clean.onclick = function(){
    result.value = "";
}

equal.onclick = function(){
    result.value = eval(result.value);
}