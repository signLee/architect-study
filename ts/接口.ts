// 用来描述对象的结构
interface UserInterface {
  name:string
  age:number
}
//必须和上面的数据结构和类型保持一致 否则会报错
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