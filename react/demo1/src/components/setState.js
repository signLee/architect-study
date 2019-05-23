/*
   // setState
      // 1.部分修改 不会覆盖之前state里的值，用的类似于Object.assign()方式
      // 2.通知组件重新渲染
      // 3.组件重新渲染完成之后执行回调函数
      // 4.setState是异步操作，先修改对应的值，然后执行后面的代码，等组件重新渲染成功后才会执行cb
      // 5.pureComponent里setState无效
*/
import React from "react"

export default class Vote extends React.Component {
  constructor(props) {
    super(props)
    //这里的名字只能是state是定死的
    this.state = {
      m: 0
    }
  }
  //  这里定义的方法挂在类的实例上而不是原型，调用的时候要用this.addOne的方式调用

  addOne = type => {
    // setState的执行类似于一个异步执行队列，只有当所有setState队列里的方法都执行完成后才会触发回调
    // this.setState({ m: this.state.m + 1 })
    // console.log(this.state.m) //0
    // this.setState({ m: this.state.m + 1 })
    // console.log(this.state.m) //0开始执行的时候m的值并未发生改变，相当于同时开了两个异步请求，这时请求的初始值m都还是原来的值
    this.setState({ m: this.state.m + 1 })
    this.setState({ m: this.state.m + 1 }, () => {
      console.log(this.state.m) //1这里的回调是最后执行的
    })
    console.log(this.state.m) //0
    console.log(this.state.m) //0
  }
  render() {
    return (
      <div className="setState">
        {this.state.m}
        <button onClick={this.addOne}>+</button>
      </div>
    )
  }
}
