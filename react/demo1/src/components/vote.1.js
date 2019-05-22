/* 组件通讯
1.通过属性的方式传值：
   父-->子的方式 然后通过属性的方式获取，祖父级的需要一层层的往下传
  子集修改父级数据可以通过以属性的方式传一个函数来实现 
2.通过上下文的方式修改
  
*/
import React from "react"
import propTypes from "prop-types"
import Header from "./header.1"
import Footer from "./footer.1"
import Body from "./body.1"

export default class Vote extends React.Component {
  // 在祖先组件设置后代元素可以使用的上下文
  static childContextTypes = {
    n: propTypes.number,
    m: propTypes.number,
    test: propTypes.number,
    addOne: propTypes.func
  }
  getChildContext() {
    //供后代元素使用的上下文信息
    return {
      n: this.state.n,
      m: this.state.m,
      test: this.state.test,
      addOne: this.addOne
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      n: 1,
      m: 0,
      test: 2
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
        <Body />
        <Footer />
      </div>
    )
  }
}
