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
const mapStateToProps = state=>state
const mapDispatchToProps = actions
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)