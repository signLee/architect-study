//必须和上面的数据结构和类型保持一致 多了或者少了都不行会报错
var user = {
    age: 18,
    name: 'sign'
};
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log('飞起来');
    };
    return Bird;
}());
//implements 实现  一个类可以实现多个接口，一个接口也可以被多个类实现,一个子类只能有一个父类，一个父类可以有多个子类，这就是单继承
var Person5 = /** @class */ (function () {
    function Person5() {
    }
    Person5.prototype.eat = function () { };
    Person5.prototype.speak = function () { };
    return Person5;
}());
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.eat = function () { };
    return Duck;
}());
var p6 = {
    id: 1,
    name: 'sign',
    age: 18
};
var ChinesePerson = /** @class */ (function () {
    function ChinesePerson() {
    }
    ChinesePerson.prototype.speakChinese = function () { };
    ChinesePerson.prototype.speak = function () { };
    return ChinesePerson;
}());
function discount(price) {
    return price * 0.8;
}
var d = discount;
var user1 = ['a', 'b', 'c']; //数组的默认index为number
var user2 = { name: 'sign' };
//类的约束
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    return Animal2;
}());
function createAnimal(clzz, name) {
    return new clzz(name);
}
var a = createAnimal(Animal2, 'sign');
