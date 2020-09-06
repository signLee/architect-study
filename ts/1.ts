//基本数据类型
let name2:string = 'zhufeng'
let age:number = 22
let isOk:boolean =true
let x:null = null
let y:undefined =undefined
name2 = null
name2 = undefined
 //unll 和 undefined属于其它基本类型的子类型

 //定义数组
 let names:string[] = ['1','2','3']//定义一个字符串型的数组 等价于如下写法
 let names2:Array<string> = ['1','2','3']

 //tuple元组  一个长度和类型都确定的数组
 let person:[string,number,string] = ['sign',18,'male']//一一对应

 //枚举类型 枚举出来的值为number型，从0开始
 enum Gender{
   BOY,
   GIRL
 }
 namespace Gender{}
 console.log(Gender.BOY)
 console.log(Gender.GIRL)
 let boy:number = Gender.BOY
 
 //常量枚举
 const enum Colors{
   RED,
   BLUE,
   YELLOW
 }
 let color = [Colors.RED,Colors.BLUE,Colors.YELLOW]//遇到定义的常量会直接将值改成对应的常量的值 

 //any任意类型
 let x2:any
 x2= 111
 x2 = "sign"


 //never作为没有返回值的函数的返回值类型（函数没有返回值，抛错或者死循环走不到最后）

 function getY():never{
   console.log(1)
   throw new Error('抛错了')
   console.log(2)
 }
 getY()

 function sum():never{
   while(true){
    console.log(1)
   }
   console.log(2)
 }
//  sum()

//指定函数返回值的类型需要和函数的返回值一致
function getNum():number{
  return 1
}
//void没有返回值
function getNum1():void{
  console.log(1)
  return null//在空strictNullChecks为false的时候可以为null或者undefined
}
//void 和never的区别：never函数无法正常返回或者终止或者会抛错，void表示函数能执行完，但是没有返回值




