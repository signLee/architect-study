/* 组件通讯
1.通过属性的方式传值：
   父-->子的方式 然后通过属性的方式获取，祖父级的需要一层层的往下传
  子集修改父级数据可以通过以属性的方式传一个函数来实现 
2.通过上下文的方式修改
  
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
      n: 1,
      m: 0
    }
  }
  //  这里定义的方法都挂在类的原型上了所以调用的时候要用this.addOne的方式调用
  addOne = type => {
    if (type === "add") {
      this.setState({ n: this.state.n + 1 })
    } else if (type === "reduce") {
      this.setState({ m: this.state.m + 1 })
    }
  }
  render() {
    return (
      <div className="vote">
        <Header titleHead={this.props.title} />
        <Body n={this.state.n} m={this.state.m} />
        <Footer addOne={this.addOne} />
      </div>
    )
  }
}
