import React, { Component } from "react"
import PropTypes from "prop-types"

class ContextOld extends Component {
  render() {
    return (
      <div>
        <Page />
      </div>
    )
  }
}

class Page extends Component {
  constructor() {
    super()
    this.state = { color: "gray" } //自己定义的属性
  }
  //定义后代组件要用到的属性名和类型
  static childContextTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    setColor: PropTypes.func
  }
  //这里才是设置后代拿到的数据的值
  getChildContext() {
    return {
      color: this.state.color,
      setColor: this.setColor,
      name: "sign"
    }
  }
  setColor = color => {
    this.setState({ color: color })
  }

  render() {
    return (
      <div style={{ border: "5px solid red", padding: "5px" }}>
        Page
        <Header />
        <Main />
      </div>
    )
  }
}
class Header extends Component {
  //定义后代组件要用到的属性名和类型
  static childContextTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  }
  //这里才是设置后代拿到的数据的值
  getChildContext() {
    return {
      age: 18,
      name: "zero"
    }
  }
  render() {
    return (
      <div style={{ border: "5px solid blue", padding: "5px" }}>
        Header
        <Title />
      </div>
    )
  }
}
class Title extends Component {
  // 表示当前组件要获取哪些上下文对象  注意这里是contextTypes不是childContextTypes  如果父级和祖父级组件都有传同一个值，则默认取最近的
  static contextTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    age: PropTypes.number
  }
  render() {
    console.log(this.context)
    return (
      <div
        style={{
          border: "5px solid pink",
          padding: "5px",
          color: this.context.color
        }}
      >
        Title:{this.context.age}
        {this.context.name}
      </div>
    )
  }
}
class Main extends Component {
  render() {
    return (
      <div style={{ border: "5px solid orange", padding: "5px" }}>
        Main
        <Content />
      </div>
    )
  }
}
class Content extends Component {
  static contextTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func
  }
  render() {
    return (
      <div
        style={{
          border: "5px solid yellow",
          padding: "5px",
          color: this.context.color
        }}
      >
        Content1
        <button onClick={() => this.context.setColor("green")}>green</button>
        <button onClick={() => this.context.setColor("red")}>red</button>
      </div>
    )
  }
}
export default ContextOld
