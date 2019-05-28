import React, { Component } from "react"

class LifeCycle extends Component {
  //不建议在constructor里掉用异步请求，这里只用来初始化，如果异步在这里出错了会导致组件都无法渲染
  constructor(props) {
    super(props)
    this.state = { num: 0 }
    console.log("1.initaliation 设置属性和state")
  }
  add = () => {
    this.setState({ num: this.state.num + 1 })
  }
  render() {
    console.log("3.render 渲染")
    return (
      <div>
        <p>
          {this.state.num}
          <button onClick={this.add}>+</button>
        </p>
        <SubCounter num={this.state.num} />
      </div>
    )
  }
}

class SubCounter extends Component {
  constructor() {
    super()
    this.state = { number: 0 }
  }
  // 根据新的属性对象派生状态对象 新的属性对象 旧的状态对象
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromPorps")
    return { date: Date.now() }
  }
  render() {
    console.log("subCounter 2.render")
    return (
      <div>
        <p>
          {this.state.number}:{this.state.date}
        </p>
      </div>
    )
  }
}

export default LifeCycle
