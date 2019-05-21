/* 组件通讯
 1.通过属性的方式传值：
   父-->子的方式 然后通过属性的方式获取，祖父级的需要一层层的往下传

*/
import React from "react"
import propTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import Body from "./body"

export default class Vote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      n: 0,
      m: 0
    }
  }
  render() {
    return (
      <div className="vote">
        <Header titleHead={this.props.title} />
        <Body />
        <Footer />
      </div>
    )
  }
}
