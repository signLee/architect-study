// 交叉属性是将多个类型转成一个类型 取的是两个类型的并集
interface Bird {
  name:string
  fly():void
}

interface Man{
  name:string
  say():void
}
type BirdMan = Bird & Man
// 两个接口的属性和方法都要有
let birdMan:BirdMan={
  name:'sign',
  fly(){},
  say(){}
}

// 兼容检查仅在函数传参的时候变量属性可以多，但是在赋值的时候不行
interface People {
  name:string
  age:number
}
let p:People = {
  name:'sign',
  age:18,
  // gender:'male'// 会报错因为People里没有定义
} 

// 解决方法：typeof

let p1 = {
  name:'sign',
  age:18,
  gender:'male'
} 
type People1 = typeof p1
let p3 = {
  name:'sign'
}

// keyof:取对象里的Key
interface Person11{
  name:string,
  age:number,
  gender:'male'|'female'
}

function getValueByKey(p:Person11,key:keyof Person11){
  return p[key]
}
let p11:Person11 = {
  name:'sign',
  age:18,
  gender:'male'
}
getValueByKey(p11,'age')//这里只能输入在p11里存在的key

//映射类型 in
interface Person12{
  name:string,
  age:number,
  gender:'male'|'female'
}
type PartPerson ={
  [key in keyof Person12]?:Person12[key]//这里等同于下面代码
  // name?:string,
  // age?:number,
  // gender?:'male'|'female'
}
let p12 = {
  name:'sign'
}

// 其它方法：
// Partial:将传入的属性由必选变成可选
// Required:将传入的属性由可选变为必选
// ReadOnly 只读
// Pick 选取对象中的某一项返回
// Exclude 排除
// Extract 提取
// NonNull 排除null和undefined
//  ReturnType 获取函数返回值的类型
// InstanceType 获取实例的类型

// 定义条件分支
interface Fish{
  name1:string
}
interface Water{
  name2:string
}
interface Bird1{
  name3:string
}
interface Sky{
  name4:string
}
type Condition<T> = T extends Fish?Water:Sky
let con:Condition<Fish> = {name2:'water'}


