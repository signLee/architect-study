// 组件通讯
import React from "react"
import propTypes from "prop-types"

export default class Body extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    return (
      <div className="body">
        支持人数：{this.props.m}
        <br />
        反对人数：{this.props.n}
      </div>
    )
  }
}
