//自己实现一个promise
class Promise {
    constructor(executor){
        // 默认的状态
        this.status = 'pending'
        this.value = undefined
         //原因
        this.reason = undefined
        //成功存放的数组
        this.onResolvedCallbacks = []
        //失败存放的数组
        this.onRejectdCallbacks = []
        //成功回调
        let resolve = (value)=>{
            if(this.status==='pending'){
                this.status = 'resolved'
                this.value = value
                this.onResolvedCallbacks.forEach(fn=>fn())
            }
        }
        //失败回调
        let reject = (reason)=>{
            if(this.status==='pending'){
                this.status = 'rejected'
                this.reason = reason
                this.onRejectdCallbacks.forEach(fn=>fn())
            }
        }
        //默认让执行器执行
        try{
            executor(resolve,reject)
        }catch(e){
            reject(e)
        }
    }
    //promise执行完后返回一个新的promise
    then(onFufilled,onRejected){
        //默认成功和失败回调函数不传的情况 
        onFufilled = typeof onFufilled === 'function' ? onFufilled:value=>value;
        onRejected = typeof onRejected === 'function' ? onRejected:err=>{throw err};
        let promise2;
        promise2 = new Promise((resolve,reject)=>{
            if(this.status==='resolved'){
                setTimeout(()=>{
                    try{
                        let x = onFufilled(this.value)
                        reslovePromise(promise2,x,resolve,reject)
                    }catch(e){
                        reject(e)
                    }
                },0)
            }
            if(this.status==='rejected'){
                //异步的异常无法被捕获到所以要在每个里边用try catch捕获一次 用setTimeout的作用是保证代码都是异步执行
                setTimeout(()=>{
                    try{
                        let x = onRejected(this.reason)
                        reslovePromise(promise2,x,resolve,reject)
                    }catch(e){
                        reject(e)
                    }
                },0)
            } 
            if(this.status==='pending'){
                    this.onResolvedCallbacks.push(()=>{
                        setTimeout(()=>{
                            try{
                                let x= onFufilled(this.value)
                                 reslovePromise(promise2,x,resolve,reject)
                            }catch(e){
                                reject(e)
                            }
                        },0)
                   })
                   this.onRejectdCallbacks.push(()=>{
                        setTimeout(()=>{
                            try{
                                let x= onRejected(this.reason)
                                reslovePromise(promise2,x,resolve,reject)
                            }catch(e){
                                reject(e)
                            }
                        },0)
                   }) 
            }
        })
        return promise2
    }
} 

//根据promise执行后的返回值做处理
function reslovePromise(promise2,x,resolve,reject){
    if(promise2 === x){
        return reject(new TypeError('循环引用'))
    }
    let called;
    if(x!=null && (typeof x === 'object' || typeof x ==='function')){
        try{
            let then =x.then
            if(typeof then ==='function'){
                then.call(x,y=>{
                    if (called) return
                    called = true
                    reslovePromise(promise2,y,resolve,reject)
                },r=>{
                    if (called) return
                    called = true
                    reject(r)
                })
            }else{
                resolve(x)
            }
        }catch(e){
            if (called) return
            called = true
            reject(e)
        }
    }else{
        resolve(x)
    }
}

module.exports = Promise

