// 组件的状态
import React from "react"

export default class Banner extends React.Component {
  constructor(props) {
    super(props) //React.Component.call(this,props)
    //这里是定死了的只能有state
    this.state = {
      time: new Date().toLocaleString()
    }
  }
  //一定要写render，并且一定要返回当前组件的JSX元素
  render() {
    return (
      <section>
        当前北京时间：
        <h2>{this.state.time}</h2>
      </section>
    )
  }
  // 组件第一次挂载完成
  componentDidMount() {
    setInterval(() => {
      // this.state.time = new Date().toLocaleDateString() // 这么做值是修改了 但是也没没重新渲染 类似于vue里的nextTick的原因
      // console.log(this.state.time)

      // setState
      // 1.部分修改 不会覆盖之前state里的值，用的类似于Object.assign()方式
      // 2.通知组件重新渲染
      // 3.组件重新渲染完成之后执行回调函数
      // 4.setState是异步操作，先修改对应的值，然后执行后面的代码，等组件重新渲染成功后才会执行cb
      // 5.pureComponent里setState无效
      this.setState(
        {
          time: new Date().toLocaleString()
        },
        () => {
          console.log("重新渲染成功")
        }
      )
      console.log(this.state.time) //打印出来的是最新的值
    }, 1000)
  }
}
