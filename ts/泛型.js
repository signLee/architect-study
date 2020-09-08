//<T>泛型：在定义方法的时候不指定数据类型，而是在调用的时候指定具体数据类型，泛型只能在函数内部使用
function createArray(length, val) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = val;
    }
    return arr;
}
createArray(3, 'x');
//类数组IArguments
function sum2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var res = 0;
    var arg = arguments;
    for (var i = 0; i < arg.length; i++) {
        res += arg[i];
    }
    return res;
}
sum2(1, 2, 3);
//泛型类，在类中使用泛型
var MyArray = /** @class */ (function () {
    function MyArray() {
        this.list = [];
    }
    MyArray.prototype.add = function (val) {
        this.list.push(val);
    };
    MyArray.prototype.getFirst = function () {
        return this.list[0];
    };
    return MyArray;
}());
var myArray = new MyArray();
myArray.add(1);
myArray.add(2);
myArray.add(3);
console.log(myArray.getFirst());
// 指定泛型的默认值 跟函数默认值一直，不传的时候取默认值，传了就取传的值
var MyArray1 = /** @class */ (function () {
    function MyArray1() {
        this.list = [];
    }
    MyArray1.prototype.add = function (val) {
        this.list.push(val);
    };
    MyArray1.prototype.getFirst = function () {
        return this.list[0];
    };
    return MyArray1;
}());
var myArray1 = new MyArray1();
myArray1.add(1);
myArray1.add(2);
myArray1.add(3);
console.log(myArray1.getFirst());
var sum3 = function (a, b) {
    return a + b;
};
sum3(1, 2);
//多个泛型
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap(['1', 1]);
function logger(val) {
    console.log(val.length);
}
logger('sdf');
var car = ['a', '3', 'c'];
var car1 = { list: ['a', '3', 'c'] };
// type A3 extends A //报错
var Aperson = /** @class */ (function () {
    function Aperson() {
    }
    return Aperson;
}());
// class Aperson1 implements A1{}// 不能被实现
