// 用发布订阅者模式实现一个异步
let fs = require("fs")

let events = {
    results:[],
    cbs:[],
    on(cb){
        this.cbs.push(cb)
    },
    emit(data){
        this.results.push(data)
        this.cbs.forEach((cb)=>{cb(this.results)})
    }
}

//订阅
events.on(function (data) {
    console.log(data)
})

events.on(function (data) {
    console.log('测试')
})

// 用'./1.txt'的方式访问不到文件 ./方式访问是基于入口文件的路径
fs.readFile(__dirname+'/1.txt', 'utf8',function(err,data){
    events.emit(data);  
});

fs.readFile(__dirname+'/2.txt', 'utf8',function(err,data){
    events.emit(data);  
});


