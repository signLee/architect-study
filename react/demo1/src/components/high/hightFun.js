// 高阶函数  执行完一个函数后返回另一个函数  函数可以作为方法的参数和返回值
function calclute(cb) {
  return function(a, b) {
    return cb(a, b)
  }
}

function sum(a, b) {
  return a + b
}

let newFun = calclute(sum)
let result = newFun(2, 3)
console.log(result)
