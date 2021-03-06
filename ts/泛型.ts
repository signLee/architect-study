//<T>泛型：在定义方法的时候不指定数据类型，而是在调用的时候指定具体数据类型，泛型只能在函数内部使用
function createArray<T>(length:number,val:T):T[]{
  let arr:T[] = []
  for(let i =0;i<length;i++){
    arr[i] = val
  }
  return arr
}

createArray<string>(3,'x')


//类数组IArguments
function sum2(...args:number[]){
  let res:number = 0 ;
  let arg:IArguments = arguments
  for(let i =0;i<arg.length;i++){
    res+= arg[i]
  }
  return res
}
sum2(1,2,3)

//泛型类，在类中使用泛型
class MyArray<T>{
  list:T[]=[]
  add(val:T){
    this.list.push(val)
  }
  getFirst():T{
    return this.list[0]
  }
}
let myArray = new MyArray<number>()
myArray.add(1);myArray.add(2);myArray.add(3);
console.log(myArray.getFirst())

// 指定泛型的默认值 跟函数默认值一直，不传的时候取默认值，传了就取传的值
class MyArray1<T=number>{
  list:T[]=[]
  add(val:T){
    this.list.push(val)
  }
  getFirst():T{
    return this.list[0]
  }
}
let myArray1 = new MyArray1()
myArray1.add(1);myArray1.add(2);myArray1.add(3);
console.log(myArray1.getFirst())

//泛型接口
interface Sum3<T>{
  (a:T,b:T):T
}
let sum3:Sum3<number>=function(a:number,b:number):number{
  return a+b
}
sum3(1,2)

//多个泛型

function swap<A,B>(tuple:[A,B]):[B,A]{
  return [tuple[1],tuple[0]]
}
swap<string,number>(['1',1])

//泛型约束  定义的时候并不知道泛型的数据类型
interface LengthWise{
  length:number
}
function logger<T extends LengthWise>(val:T){
  console.log(val.length)
}
logger('sdf')

// 泛型类型的别名
type Cart<T> = {list:T[]}|T[]
let car:Cart<string> = ['a','3','c']
let car1:Cart<string>= {list: ['a','3','c']}

// 泛型接口与泛型类型别名的区别与联系
// 1.接口会创建一个新的名称，别名不会
// 2.别名不能被继承和实现，别名一般用于多个类型的联合取值（A|B）
interface A{}
interface B{}

type A1 = A|B
type A2 = A
// type A3 extends A //报错
class Aperson implements A,B{}
// class Aperson1 implements A1{}// 不能被实现