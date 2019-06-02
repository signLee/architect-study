import React, { Component } from "react"
//PureComponent实现原理：pureComponent是通过props,和state的浅比较来实现sholdComponentUpdate的
class PureComponent extends Component {
  isPureComponent = true
  shouldComponentUpdate(nextProps, nextState) {
    // state或者props只有有一个有变化了就需要更新
    return (
      !shalldowEqual(this.props, nextProps) ||
      !shalldowEqual(this.state, nextState)
    )
  }
}

//浅比较 比较obj1和obj2是否相等，只比较第一层
function shalldowEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true
  }
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false
  }
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (let key of keys1) {
    //浅比较
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false
    }
    //深比较
    // if (!obj2.hasOwnProperty(key)) {
    //   return false
    // } else {
    //   if (typeof obj1 == "object" && typeof obj2 == "object") {
    //     return shalldowEqual(obj1[key], obj2[key])
    //   } else {
    //     return obj1[key] === obj2[key]
    //   }
    // }
  }
  return true
}
// let obj1 = { attr: { name: "sign" } }
// let obj2 = { attr: { name: "sign" } }
// console.log(shalldowEqual(obj1, obj2)) //浅比较的时候为false

export default PureComponent
