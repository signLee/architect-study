// 接口的兼容性
interface Animal7{
  name:string
  age:number
  gender:number
}
let a7:Animal7={
  name:'sign',
  age:10,
  gender:2
}
interface Person7{
  name:string
  age:number
}
function getName7(p:Person7):string{
  return p.name
}
//检查参数类型的时候并不是真正的比较接口类型，而是比较具体的属性是否兼容（接口定义了的属性是否都有，有多了不要紧）
getName7(a7)

// 基本数据类型的兼容性
let num:string|number
let str:string
num = str//可以 string在Num拥有的类型里
let num2:{
  tostring():string
}
let str2:string
num = str2// 可以  因为string有tostring方法

// 类的兼容性  能不能赋值主要是看要的属性有没有

class Parent7{
  name:string
}
class Child7 extends Parent7{
  age:number
}

let p7:Parent7 = new Parent7()//可以
let p77:Parent7 = new Child7()//可以  子类也有name属性
let c7:Child7 = new Child7()//可以
// let c77:Child7 = new Parent7()//不可以 父类中没有age属性


// 函数的兼容性  比较函数的时候先比较函数上的参数，再比较返回值，参数可以省略，也可以少传但是不能多传

type SunFunc = (a:number,b:number)=>number
let sum4:SunFunc;
sum4 = function(a:number,b:number):number{
  return a+b
}

sum4 = function(a:number):number{
  return a
}

sum4 = function():number{
  return 0
}
// sum4 = function(a:number,b:number,c:number):number{ //不行，会报错
//   return a+b
// }

// 返回值的比较

type GetPerson = ()=>{name:string,age:number}//这里不是箭头函数  右边是一整个返回的对象
let getPerson:GetPerson;
getPerson = function (){
  return {name:'sign',age:18}
}

getPerson = function (){
  return {name:'sign',age:18,enName:"sign_lee"}//返回参数有多  可以
}

// getPerson = function (){
//   return {name:'sign'}//返回参数参数少了  报错
// }


// 双向协定：函数的参数中目标兼容源，或者源兼容目标都可以，有一个满足就行
type LogFun =(val:number|string)=>void
let logFun =function(val:number){console.log(val)}
let logFun1 =function(val:number|string|boolean){console.log(val)}//也可以


// 泛型在进行兼容性的时候，会先判断具体类型，再进行兼容性的判断（用到了再判断）
interface Empty<T>{}
let x1:Empty<string>;
let y1:Empty<number>;
x1 = y1//可以  因为没有用到T

interface NotEmpty<T>{
  data:T
}
let x2:NotEmpty<string>;
let y2:NotEmpty<number>;
// x2 = y2//bu可以  因为有用到T