// 高阶组件
import React, { Component } from "react"
export default function(Component, key) {
  // 函数执行完后返回一个组件 各个组件的钩子分别执行
  return class extends Component {
    constructor() {
      super()
      this.state = { value: "" }
    }
    componentDidMount() {
      this.setState({
        value: localStorage.getItem(key)
      })
    }
    render() {
      return <Component {...this.props} value={this.state.value} />
    }
  }
}
