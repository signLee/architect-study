import React, { Component } from "react"

class LifeCycle extends Component {
  static defaultProps = { name: "计数器" }
  //不建议在constructor里掉用异步请求，这里只用来初始化，如果异步在这里出错了会导致组件都无法渲染
  constructor(props) {
    super(props)
    this.state = { num: 0 }
    console.log("1.initaliation 设置属性和state")
  }
  // 执行过程中可能会执行多次
  componentWillMount() {
    console.log("2.componentWillMount 组件将要挂载")
  }
  //一般异步调用写在这里
  componentDidMount() {
    console.log("4.componentDidMount 组件挂载完成")
  }
  // 这里由用户来决定是否触发组件更新
  shouldComponentUpdate() {
    console.log("5.shouldComponentUpdate 询问组件是否需要更新")
    return this.state.num % 2 === 0 ? true : false
  }
  componentDidUpdate() {
    console.log("6.componentDidUpdate 组件更新完毕")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount 组件卸载")
  }

  add = () => {
    this.setState({ num: this.state.num + 1 })
  }
  render() {
    console.log("3.render 渲染")
    return (
      <div>
        <p>
          {this.props.name}:{this.state.num}
          <button onClick={this.add}>+</button>
        </p>
        {this.state.num % 2 == 0 && <SubCounter num={this.state.num} />}
      </div>
    )
  }
}

class SubCounter extends LifeCycle {
  componentWillReceiveProps(nextProps, nextState) {
    console.log(nextProps)
    console.log(nextState)
    console.log("subCounter 1.compontWillReceiveProps")
  }
  render() {
    console.log("subCounter 2.render")
    return (
      <div>
        <p>{this.props.num}</p>
      </div>
    )
  }
}

export default LifeCycle
