// 错误边界---可用于防止由于部分组件内部错误导致整个页面渲染失败的问题，可以将错误限定在组件局部
import React, { Component } from "react"

class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = { hasError: false }
  }
  //这里可以用来捕获错误信息
  componentDidCatch(error, info) {
    if (error) {
      this.setState({ hasError: true })
    }
  }
  render() {
    if (this.state.hasError) {
      return <div>子组件发生未知错误，无法正常显示</div>
    }
    return this.props.children
  }
}

class Clock extends Component {
  render() {
    console.log(null.toString()) //报错后不会影响全局
    return (
      <div style={{ border: "5px solid red", padding: "5px" }}>
        {Date.now()}
      </div>
    )
  }
}

class Counter extends Component {
  render() {
    return (
      <div style={{ border: "5px solid green", padding: "5px" }}>计数器</div>
    )
  }
}

export default class Page extends Component {
  render() {
    return (
      <div style={{ border: "5px solid blue", padding: "5px" }}>
        <ErrorBoundary>
          <Clock />
        </ErrorBoundary>
        <Counter />
      </div>
    )
  }
}
