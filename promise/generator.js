//generator可以使用yield多次返回
//第一个next传递参数没有效果
//第二次next传递的参数是第一次yield的返回值
function * fib(max){
    let a=0;let b=1;let n=0;
    while(n<max){
        n++
        [a,b]=[b,b+a]
        let step=yield a
        console.log(step)//第一次执行的时候step不会被打印
    }
    return a//用return返回最终的执行结果
}
var f=fib(5)
console.log(f.next('100'))//{ value: 1, done: false }
console.log(f.next('200'))//{ value: 1, done: false }   step:200
console.log(f.next('300'))//{ value: 2, done: false }   step:300
console.log(f.next('400'))//{ value: 3, done: false }   step:400
console.log(f.next('500'))//{ value: 5, done: false }   step:500
console.log(f.next('600'))//{ value: a, done: true }    step:600