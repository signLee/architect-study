// 组件通讯
import React from "react"
import propTypes from "prop-types"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="header">
        <h3>{this.props.titleHead}</h3>
      </div>
    )
  }
}
