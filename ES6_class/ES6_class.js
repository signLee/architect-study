// 1.静态方法:类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”
class Foo {
  static classMethod() {
    return "hello"
  }
}

Foo.classMethod() // 'hello'

// 1-1.如果静态方法包含this关键字，这个this指的是类，而不是实例
class Foo {
  static bar() {
    this.baz() //这个this指的是类
  }
  static baz() {
    console.log("hello")
  }
  baz() {
    console.log("world")
  }
}

Foo.bar() // hello

var foo = new Foo() //实例无法调用类的静态方法
foo.classMethod()
// TypeError: foo.classMethod is not a function

// 1-2.父类的静态方法，可以被子类继承
class Foo {
  static classMethod() {
    return "hello"
  }
}

class Bar extends Foo {}

Bar.classMethod() // 'hello'继承了父类后可以使用父类的静态方法

// 1-3.静态方法也是可以从super对象上调用的
class Foo {
  static classMethod() {
    return "hello"
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ", too"
  }
}

Bar.classMethod() // "hello, too"

// 2.类不存在变量提升
new Foo() // ReferenceError
class Foo {}

// 3.类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行
class Foo {
  constructor() {
    return Object.create(null)
  }
}
Foo()
// TypeError: Class constructor Foo cannot be invoked without 'new'

// 4 class的继承
// 4-1.子类必须在constructor方法中调用super方法，否则会报错，如果子类没有定义constructor方法，这个方法会被默认添加。也就是说，不管有没有显式定义，任何一个子类都有constructor方法
class Point {
  /* ... */
}

class ColorPoint extends Point {
  constructor() {}
}

let cp = new ColorPoint() // ReferenceError

// 4-2在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例。
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color // ReferenceError
    super(x, y)
    this.color = color // 正确
  }
}

// 5.super关键字
//5-1.super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。并且super只能是constructor里调用
class A {}

class B extends A {
  constructor() {
    super() //super内部的this指的是B的实例，因此super()在这里相当于A.prototype.constructor.call(this),z这里返回的是子类B的实例
  }
}

//5-2.super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。父类实例上的方法或属性(定义在constructor里或者在外层的属性)，是无法通过super调用的
class A {
  p() {
    return 2
  }
}

class B extends A {
  constructor() {
    super()
    console.log(super.p()) // 2
  }
}

let b = new B()

// 5-3.在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例
class A {
  constructor() {
    this.x = 1
  }
  print() {
    console.log(this.x)
  }
}

class B extends A {
  constructor() {
    super()
    this.x = 2
  }
  m() {
    super.print()
  }
}

let b = new B()
b.m() // 2

// 5-4如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象
class Parent {
  static myMethod(msg) {
    console.log("static", msg)
  }

  myMethod(msg) {
    console.log("instance", msg)
  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg)
  }

  myMethod(msg) {
    super.myMethod(msg)
  }
}

Child.myMethod(1) // static 1

var child = new Child()
child.myMethod(2) // instance 2

// 5-5在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例
class A {
  constructor() {
    this.x = 1
  }
  static print() {
    console.log(this.x)
  }
}

class B extends A {
  constructor() {
    super()
    this.x = 2
  }
  static m() {
    super.print()
  }
}

B.x = 3
B.m() // 3
