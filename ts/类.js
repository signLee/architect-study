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
// 定义一个类
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    return Person;
}());
var Person2 = /** @class */ (function () {
    function Person2(myName) {
        this.myName = myName;
    }
    Object.defineProperty(Person2.prototype, "name", {
        get: function () {
            return this.myName;
        },
        set: function (val) {
            this.myName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Person2;
}());
var p2 = new Person2('sign');
console.log(p2.name); //调用get方法
p2.name = 'sign_lee'; //调用set方法
//上面代码可以简化如下
var Person3 = /** @class */ (function () {
    // public定义公用的属性
    function Person3(myName) {
        this.myName = myName;
    }
    return Person3;
}());
var Person4 = /** @class */ (function () {
    function Person4(id) {
        this.id = id;
    }
    return Person4;
}());
var p4 = new Person4(2);
console.log(p4.id);
// p4.id = 1 // 不可修改，会报错
//参数的属性  public   private  protected
var Parent = /** @class */ (function () {
    function Parent(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Parent.prototype.getName = function () {
        console.log('父类' + this.name);
    };
    Parent.prototype.getAge = function () {
        console.log('父类' + this.age);
    };
    Parent.prototype.getMoney = function () {
        console.log('父类' + this.money);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.getName = function () {
        console.log('子类' + this.name);
    };
    Child.prototype.getAge = function () {
        console.log('父类' + this.age);
    };
    Child.prototype.getMoney = function () {
        // console.log('子类'+this.money)  // 访问this.money报错 只能在父类里访问
    };
    return Child;
}(Parent));
var c = new Child('sign', 18, 1111);
c.getName();
c.name;
c.getAge();
// c.age//报错 受保护的属性只能在父类以及子类里使用
//抽象类  无法被实例化 只能被继承
// 函数的重写
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.speak = function () {
        console.log('喵喵喵');
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.speak = function () {
        console.log('汪汪汪');
    };
    return Dog;
}(Animal));
