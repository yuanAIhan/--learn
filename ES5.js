//表达式和运算符杂谈：
var martix = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
var sparseArray = [1, , , , , 3];//中间的全部赋值为：undefined

var p = {
    x: 2,
    y: -1.2
};

var rectangle = {
    upperLeft: {
        x: 2,
        y: 3
    },
    lowerRight: {
        x: 4,
        y: 5
    }
};

var square = function (x) {
    return x * x;
}


{ //p84
    var a = 1 + 3; //4;
    var b = "1" + "3"; // "4"
    var c = "1" + 2; //"12"
    var d = 1 + {}; //"1[object object]"
    var e = true + true // 2
    var f = 2 + null; //2 首先将null转换为0
    var g = 2 + undefined // NaN unfefined -> NaN后做的加法
}

{
    var point = { x: 1, y: 1 };
    var a = "x" in point;
    var b = "z" in point;
}
{
    // p96中的eval()
    var a = void (0);
}
{
    // void,instanceof, typeof,
}

var empty = {};
var point = {
    x: 0,
    y: 0
};
var point2 = {
    x: point.x,
    y: point.y
};
var book = {
    "main title": "javascript",
    "sub-title": "The guide",
    "for": "all audiences",
    author: {
        firstName: "David",
        surName: "Flanagan"
    }
};

var o3 = Object.create(Object.prototype);

function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create) {
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== "object" && t != "function") throw TypeError();
    function f() { };
    f.prototype = p;
    return new f();
}
//只是使用对应的继承而来的函数作为一个参数的传递的，可以防止无意间修改其中的原始对象！

function getValue(portfolio) {
    var total = 0.0;
    for (stack in portfolio) {
        var shares = portfolio[stock];
        var price = getquote(stock);
        total += shares * price;
    }
    return total;
}

var len = undefined;
if (book) {
    if (book["sub-title"]) {
        len = book["sub-title"].length;
    }
}
var len = book && book["sub-title"] && book["sub-title"].length;
//需要全部都是真的时候才有最终的结果返回的！所有其是可以ide！

