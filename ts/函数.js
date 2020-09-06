// 函数声明
function sum1(a, b) {
    return a + b;
}
sum1(1, 2);
var getName = function (firstName, lastName) {
    return firstName + lastName;
};
//可选参数 ?:
var items = [1, 2, 3];
var fun1 = function (item) {
    console.log(item);
};
items.forEach(fun1);
//默认参数:string='GET'
function ajax(url, methods) {
    if (methods === void 0) { methods = 'GET'; }
    console.log(url, methods);
}
ajax('./1.js');
// 剩余参数
function sum2(perfix) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return perfix + args.reduce(function (val, item) { return val += item; }, 0);
}
var r = sum2('$', 1, 2, 3, 4);
console.log(r);
function double(val) {
    if (typeof val === 'string') {
        return val + val;
    }
    else if (typeof val === 'number') {
        return val * val;
    }
    else if (typeof val === 'boolean') {
        return !val;
    }
}
double('sign');
double(12);
double(true);
// double([1,2,3] //报错
