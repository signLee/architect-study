// 函数声明

function sum1(a:number,b:number):number{
  return a + b; 
}
sum1(1,2)

//函数表达式
//type用来定义类型别名
type GetName = (x:string,y:string)=>string//这里定义的x,y分别对应firstName和lastName,这两个地方的类型必须一致，返回值也一样必须类型一致
let getName:GetName = function(firstName:string,lastName:string):string{
  return firstName + lastName
}

//可选参数 ?:
let items:number[] = [1,2,3]
type Fun1 = (item:number,index?:number,arr?:number[])=>void
let fun1:Fun1 = function(item:number){
  console.log(item)
}
items.forEach(fun1)

//默认参数:string='GET'
function ajax(url:string,methods:string='GET'){
  console.log(url,methods)
}
ajax('./1.js')


// 剩余参数
function sum2(perfix:string,...args:number[]){
  return perfix + args.reduce((val,item)=>val+=item,0)
}
let r = sum2('$',1,2,3,4)
console.log(r)

//函数的重载
type myType = string|number|boolean
function double(val:string):string;
function double(val:number):number;
function double(val:boolean):boolean;

function double (val:myType):myType {
  if(typeof val === 'string'){
    return val+val
  }else if(typeof val === 'number'){
    return val*val
  }else if(typeof val === 'boolean'){
    return !val
  }
}
double('sign')
double(12)
double(true)
// double([1,2,3] //报错
