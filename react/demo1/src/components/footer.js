// 组件通讯
import React from "react"
import propTypes from "prop-types"

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="footer">
        <button>支持</button>
        <button>反对</button>
      </div>
    )
  }
}
