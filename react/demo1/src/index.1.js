import React from "react"
import ReactDOM from "react-dom"

class Num1 extends React.Component {
  add = () => {
    console.log(this.refs.numA.value)
    this.refs.numC.value = this.refs.numA.value + this.refs.numB.value
  }
  render() {
    return (
      <>
        <input type="text" ref="numA" />
        <input type="text" ref="numB" />
        <button onClick={this.add}>+</button>
        <input type="text" ref="numC" />
      </>
    )
  }
}

class Num2 extends React.Component {
  add = () => {
    this.numC.value = this.numA.value + this.numB.value
  }
  render() {
    return (
      <>
        <input type="text" ref={inst => (this.numA = inst)} />
        <input type="text" ref={inst => (this.numB = inst)} />
        <button onClick={this.add}>+</button>
        <input type="text" ref={inst => (this.numC = inst)} />
      </>
    )
  }
}

//上面两种后期版本中将会被淘汰，推荐使用下面的方式获取Dom
class Num3 extends React.Component {
  constructor(props) {
    super(props)
    this.numA = React.createRef()
    this.numB = React.createRef()
    this.numC = React.createRef()
  }
  add = () => {
    this.numC.current.value = this.numA.current.value + this.numB.current.value
  }
  render() {
    return (
      <>
        <input type="text" ref={this.numA} />
        <input type="text" ref={this.numB} />
        <button onClick={this.add}>+</button>
        <input type="text" ref={this.numC} />
      </>
    )
  }
}

ReactDOM.render(
  <>
    <Num3 />
  </>,
  document.querySelector("#root")
)
