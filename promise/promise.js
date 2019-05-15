//自己实现一个promise
let Promise = require('./myPromise')

let promise = new Promise((resolve,reject)=>{
    resolve('买')
})
promise.then((data)=>{
    console.log('data',data)
},(err)=>{
    console.log('err',err)
})

promise.then((data)=>{
    console.log('data',data)
},(err)=>{
    console.log('err',err)
})

promise.then((data)=>{
    console.log('data',data)
},(err)=>{
    console.log('err',err)
})
