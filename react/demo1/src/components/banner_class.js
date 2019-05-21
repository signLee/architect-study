// 以类继承的方式创建组件
import React from "react"
import propTypes from "prop-types"
//定义一个banner的类 并且继承于React.Component
//每一次调用组件都重新new了一次，创建实例并且把解析出来的参数传递进来  new Banner(props)
//传递进来的属性信息挂载到实例的props属性上，this.props代表的是传递给组件的属性
//不做特殊处理之前，在constructor中的this是没有props属性的，但是到render等生命周期函授的时候就挂载了
//React.Component 和React.pureComponent的区别：pureComponent在功能上和Component是一样的，但是它主要用于一些静态展示的组件，可用来提升性能
export default class Banner extends React.Component {
  //   设置默认值
  static defaultProps = {
    interval: 3000
  }
  // 设置传递属性值的规则 需要安装依赖 prop-types
  static propTypes = {
    interval: propTypes.number.isRequired
  }
  constructor(props) {
    super(props) //React.Component.call(this,props)
    console.log(props)
    console.log(this.props.interval)
    console.log(this.props) //不在super里传递的时候是undefined
  }
  //一定要写render，并且一定要返回当前组件的JSX元素
  render() {
    console.log(this.props)
    return (
      <section>
        我是轮播图
        {React.Children.map(this.props.children, item => {
          return item
        })}
      </section>
    )
  }
}
