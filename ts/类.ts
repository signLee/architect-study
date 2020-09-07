// 定义一个类
class Person {
  name:string;
  getName():void{
    console.log(this.name)
  }
}
class Person2 {
  myName:string;
  constructor(myName:string){
    this.myName = myName
  }
  get name(){
    return this.myName
  }
  set name(val){
    this.myName = val
  }
}
let p2 = new Person2('sign')
console.log(p2.name)//调用get方法
p2.name = 'sign_lee'//调用set方法


//上面代码可以简化如下
class Person3 {
  // public定义公用的属性
  constructor(public myName:string){
  }
}

class Person4 {
  // readonly定义只读属性
  readonly id:number;
  constructor(id:number){
    this.id = id
  }
}
let p4 = new Person4(2)
console.log(p4.id)
// p4.id = 1 // 不可修改，会报错

//访问控制修饰符  public   private  protected

class Parent{
  public name:string;//public 共有属性  都可以访问，也可以通过new出来的实例访问
  protected age:number;//受限制的属性，只能在自己和自己的子类中访问
  private money:number;//只能自己访问，子类也不能访问
  constructor(name:string,age:number,money:number){
    this.name = name
    this.age = age
    this.money = money
  }
  getName(){
    console.log('父类'+this.name)
  }
  getAge(){
    console.log('父类'+this.age)
  }
  getMoney(){
    console.log('父类'+this.money)
  }
}
class Child extends Parent{
  getName(){
    console.log('子类'+this.name)
  }
  getAge(){
    console.log('父类'+this.age)
  }
  getMoney(){
    // console.log('子类'+this.money)  // 访问this.money报错 只能在父类里访问
  }
}
let c = new Child('sign',18,1111)
c.getName()
c.name;
c.getAge()
// c.age//报错 受保护的属性只能在父类以及子类里使用

//抽象类  无法被实例化 只能被继承
// 函数的重写
abstract class Animal{
  name:string;
  abstract speak()
}
class Cat extends Animal{
  speak(){
    console.log('喵喵喵')
  }
}
class Dog extends Animal{
  speak(){
    console.log('汪汪汪')
  }
}