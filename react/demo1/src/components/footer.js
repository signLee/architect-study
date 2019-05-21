// 组件通讯
import React from "react"
import propTypes from "prop-types"

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { addOne } = this.props
    return (
      <div className="footer">
        <button
          onClick={() => {
            addOne("add")
          }}
        >
          支持
        </button>
        <button
          onClick={() => {
            addOne("reduce")
          }}
        >
          反对
        </button>
      </div>
    )
  }
}
