function add1(str){
  return '1' + str 
}
function add2(str){
  return '2' + str 
}
function add3(str){
  return '3' + str 
}
function compose(...funcs){
  if (funcs.length===0){
    return args=>args
  }
  if (funcs.length===1){
    return funcs[0]
  }
  return funcs.reduce((a,b)=>(...args)=>a(b(...args)))

  // 执行顺序
  // 第一次： add1 和 add2 执行完成后返回 (...args)=>add1(add2(...args))
  // 第二次  add3和(...args)=>add1(add2(...args)) 执行完成后返回 (...args)=>(...args)=>add1(add2(...args))(add3(...args))
  // compose第一次执行完成后返回的一个函数(...args)=>a(b(...args))这里的a为 (...args)=>add1(add2(...args)) b为add3
  // compose第二次执行时传参，执行顺序为：先执行b即add3并传入参数，返回结果为3sign，然后执行a,这里的a是(...args)=>add1(add2(...args))所以先执行add2并且把3sign传参，返回结果为23sign然后在执行add1传参23sign，最终的返回结果为123sign
}
let result = compose(add1,add2,add3)('sign')// 123sign
console.log(result)