// async实现
let fs = require("fs")

function after (times,cb){
    let res = []
    return function (data) {
        res.push(data)
        if(--times===0){
            cb(res)
        }
    }
}

let out = after(2,(data)=>{
    console.log(data)
})

// 用'./1.txt'的方式访问不到文件 ./方式访问是基于入口文件的路径
// fs.readFile(__dirname+'/1.txt', 'utf8',function(err,data){
//     out(data);  
// });

// fs.readFile(__dirname+'/2.txt', 'utf8',function(err,data){
//     out(data);  
// });


//用promise实现

function read (url,encode){
    return new Promise((resolve,reject)=>{
        fs.readFile(__dirname+url, encode='utf8',function(err,data){
            err ? reject(err):void 0
            data ? resolve(data):void 0
        })
    }) 
}
read('/1.txt').then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})
read('/2.txt').then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})
