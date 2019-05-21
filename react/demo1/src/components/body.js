// 组件通讯
import React from "react"
import propTypes from "prop-types"

export default class Body extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="body">
        支持人数：0
        <br />
        反对人数：0
      </div>
    )
  }
}
