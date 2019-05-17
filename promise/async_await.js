//async await配合使用可以将异步的执行改为同步，当前await执行成功了才会执行后面的代码
//async await 捕获异常可以使用try  catch
//async await的原理是generator + co（递归调用next,直到done为true时执行resolve）实现的
//async的返回结果也是一个promise
let fs = require("fs")
function read (url,encode){
    return new Promise((resolve,reject)=>{
        fs.readFile(__dirname+url, encode='utf8',function(err,data){
            err ? reject(err):void 0
            data ? resolve(data):void 0
        })
    }) 
}  

async function readFiles(){
    let data1=await read('/1.txt')
    let data2
    try{
         data2=data1 + await read('/3.txt')
    }catch(e){
        console.log(e)
    }
    return data2
}
readFiles().then((data)=>{
    console.log(data+'success')
},err=>console.log(err))