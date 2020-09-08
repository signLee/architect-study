// 1.interface用来描述对象的结构
interface UserInterface {
  name:string
  age:number
}
//必须和上面的数据结构和类型保持一致 多了或者少了都不行会报错
let user:UserInterface={
  age:18,
  name:'sign'
}

interface Flyable{
  fly():void
}
class Bird implements Flyable{
  fly(){
    console.log('飞起来')
  }
}
//2.interface可以用来表示行为的抽象
interface Eatable{
  eat():void
}
interface Speakable{
  name:string,
  speak():void
}


//implements 实现  一个类可以实现多个接口，一个接口也可以被多个类实现,一个子类只能有一个父类，一个父类可以有多个子类，这就是单继承
class Person5 implements Eatable,Speakable{
  name:string;
  eat(){}
  speak(){}
}

class Duck implements Eatable{
  eat(){}
}

// 对于一些不可预知的属性定义可以用[propName:string]:any
interface Person6 {
  readonly id:number;
  name:string;
  [propName:string]:any//表示未知的其它任意属性
}

let p6:Person6={
  id:1,
  name:'sign',
  age:18
}

// 接口继承 接口继承后实现接口的时候需要实现子类和父类的方法和属性合集
interface Speakable1 {
  name:string
  speak():void
}
interface ChineseSpeak extends Speakable1{
  speakChinese():void
}
class ChinesePerson implements ChineseSpeak {
  name:string
  speakChinese(){}
  speak(){}
}

//接口可以用来约束函数
interface Discount {
  (price:number):number
}
 function discount(price:number):number{
   return price*0.8
 }
let d:Discount = discount

// 可索引接口可以对对象和数组进行约束
//约束对象
interface UserInterface1 {
  [index:number]:string
}
let user1:UserInterface1 = ['a','b','c']//数组的默认index为number

//约束数组  这里的index也可以写其他的 没有规定index
interface UserInterface2 {
  [index:string]:string
}
let user2:UserInterface2 = {name:'sign'}

//类的约束
class Animal2{
  constructor(public name:string){

  }
}

interface WithNameClass{
  new(name:string):Animal2
}

function createAnimal(clzz:WithNameClass,name:string){
  return new clzz(name)
}
let a = createAnimal(Animal2,'sign')