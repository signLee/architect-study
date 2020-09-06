//类型推论
let name1 = 'sign'//默认没有指定类型的话ts会根据赋予的值进行推断数据类型
// name1 = 12//将number型数据复制给string数据，会报错
console.log(name1)

let x1;//定义的时候没有赋值，默认为let x1:any
x1 = 'sign'
x1= 12

//包装类
//基本数据类型是没有方法的，ts内部会把定义的基本数据类型通过new的方法包装成对象，对象就拥有方法了。
let name3 = 10
console.log(name3.toFixed(2))//  new Number(10).toFixed()

//不能将对象赋值给基本数据类型
let hasGirl:boolean = true
  hasGirl = Boolean(true)//基本数据类型，可以
  //hasGirl = new Boolean(true)// 这里不行


  //联合数据类型（某些数据可能是列出的数据类型中的一种）
  let name4:string|number
  name4 = 'sign'
  name4 = 12

  //类型断言 强行指定数据为某种类型
  function getName2(val:string|boolean|number){
    (val as number).toFixed(2)//强行指定这里的val为string boolean nubmer中的一个如果不指定的话这里会取这里默认类型的共有方法
  }

