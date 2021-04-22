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

