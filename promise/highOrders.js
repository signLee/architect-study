// 高阶函数---判断数据类型

let utils = {}
let type = ['String','Object','Null','Function','Array','Boolen']

type.forEach((item)=>{
    utils[`is`+item] = isType(item)
})

//用于在utisl上挂着对应的方法 所以函数执行的结果应该是返回一个函数
function isType (type) {
    return function (content) {
        let str = Object.prototype.toString.call(content).replace(/\[object\s|\]/g,'')
        return str === type
    }
}

let isString = utils.isString('hello')//true
let isObject = utils.isObject([])//false Array型
let isArray = utils.isArray([])//true 
console.log(isString)
console.log(isObject)
console.log(isArray)