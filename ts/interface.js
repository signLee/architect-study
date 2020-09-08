var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a7 = {
    name: 'sign',
    age: 10,
    gender: 2
};
function getName7(p) {
    return p.name;
}
//检查参数类型的时候并不是真正的比较接口类型，而是比较具体的属性是否兼容（接口定义了的属性是否都有，有多了不要紧）
getName7(a7);
// 基本数据类型的兼容性
var num;
var str;
num = str; //可以 string在Num拥有的类型里
var num2;
var str2;
num = str2; // 可以  因为string有tostring方法
// 类的兼容性  能不能赋值主要是看要的属性有没有
var Parent7 = /** @class */ (function () {
    function Parent7() {
    }
    return Parent7;
}());
var Child7 = /** @class */ (function (_super) {
    __extends(Child7, _super);
    function Child7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child7;
}(Parent7));
var p7 = new Parent7(); //可以
var p77 = new Child7(); //可以  子类也有name属性
var c7 = new Child7(); //可以
var sum4;
sum4 = function (a, b) {
    return a + b;
};
sum4 = function (a) {
    return a;
};
sum4 = function () {
    return 0;
};
var getPerson;
getPerson = function () {
    return { name: 'sign', age: 18 };
};
getPerson = function () {
    return { name: 'sign', age: 18, enName: "sign_lee" }; //返回参数有多  可以
};
var logFun = function (val) { console.log(val); };
var logFun1 = function (val) { console.log(val); }; //也可以
var x1;
var y1;
x1 = y1; //可以  因为没有用到T
var x2;
var y2;
// x2 = y2//bu可以  因为有用到T
