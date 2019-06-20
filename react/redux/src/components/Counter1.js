import React, { Component } from "react"
import bindActionCreators from "../redux/bindActionCreators"
import store from "../store"
import actions from "../store/actions/counter1"

let bindActions = bindActionCreators(actions, store.dispatch) // 所有已包装好的函数

export default class Counter extends Component {
  state = { number: store.getState().counter1 } //初始化的时候用store中的值
  componentDidMount() {
    // 通知订阅函数执行
    this.unSubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().counter1 }) // 操作的是store中的值 设置的时候仍然用store中的值 类似于vuex中使用和操作的都是store中的值  只不过这里用state转了一下
    })
  }
  componentWillUnmount() {
    // 这里如果不取消订阅的话后面如果已经跳出了当前组件  但是仍有可能会接收到订阅的更改  这时的this已经更改了 会导致报错
    this.unSubscribe()
  }

  render() {
    return (
      <>
        <p>{this.state.number}</p>
        <button onClick={bindActions.increment}>+</button>
        <button onClick={bindActions.decrement}>-</button>
      </>
    )
  }
}
