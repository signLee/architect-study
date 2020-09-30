import React, { Component } from "react"
import actions from "../store/actions/counter"
import {connect} from 'react-redux'

 class Counter extends Component {
  render() {
    return (
      <>
        <p>{this.props.number}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </>
    )
  }
}
const mapStateToProps = state=>({number:state.number*10})//之所以做一层中转的原因：1状态可能很大，需要用到的属性比较少  2.可能需要对属性做一些其它操作处理数据3.为了性能优化，可能会有其它非本组件的属性的变更导致当前组件的重新计算渲染
const mapDispatchToProps = actions
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)