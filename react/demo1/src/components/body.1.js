// 组件通讯
import React from "react"
import propTypes from "prop-types"

export default class Body extends React.Component {
  // 后代中要用到的上下文信息引入
  static contextTypes = {
    n: propTypes.number,
    m: propTypes.number
  }
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this)
    return (
      <div className="body">
        支持人数：{this.context.m}
        <br />
        反对人数：{this.context.n}
      </div>
    )
  }
}
