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
fs.readFile(__dirname+'/1.txt', 'utf8',function(err,data){
    out(data);  
});

fs.readFile(__dirname+'/2.txt', 'utf8',function(err,data){
    out(data);  
});


