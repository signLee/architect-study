// PropsTypes常见使用场景

import React, { Component } from "react"
import PropTypes from "prop-types"
export default class Parent extends Component {
  constructor() {
    super()
    this.state = {
      name: "sign", //要求为字符串 必填
      age: 20, //要求为数字 并且大于18
      gender: "男", //要求只能为 男或者女
      isMarried: false, //要求只能为true 或者false
      hobby: ["somking", "drinking"], //要求为数组，并且数组中的为string
      position: { x: 100, y: 200 } //要为obj,并且必须有x和y
    }
  }
  render() {
    return <Person {...this.state} />
  }
}
class Person extends Component {
  static defaultProps = {
    isMarried: false
  }
  // 这里只能叫propTypes
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.oneOf(["男", "女"]),
    isMarried: PropTypes.bool,
    hobby: PropTypes.arrayOf(PropTypes.string),
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    age(props, propName, componentName) {
      if (props[propName] < 18) {
        return new Error(`${propName}不能小于18岁 错误来自${componentName}组件`)
      }
    }
  }
  render() {
    return <div>{this.props.age}</div>
  }
}
