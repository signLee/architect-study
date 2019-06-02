// import React, { Component, PureComponent } from "react"
import React, { Component } from "react"
import PureComponent from "./PureComponent"
//如果用Component类的话，每次父组件更新了子组件也会做更新，但是有些组件的值其实并没有做更改，这时候是不用更新的，可以用PureComponent代替

class Title extends PureComponent {
  render() {
    console.log("title render")
    return <div>{this.props.title}</div>
  }
}

class Count extends PureComponent {
  render() {
    console.log("Count render")
    return <div>{this.props.number}</div>
  }
}

class APP extends PureComponent {
  constructor(props) {
    super(props)
    this.props = props
    this.state = { title: "计数器", number: 0 }
    this.inputRef = React.createRef()
  }
  add = () => {
    this.setState({
      number: this.state.number + parseInt(this.inputRef.current.value)
    })
  }
  render() {
    return (
      <div>
        <Title title={this.state.title} />
        <Count number={this.state.number} />
        <input type="text" ref={this.inputRef} />
        <button
          type="button"
          onClick={() => {
            this.add()
          }}
        >
          +
        </button>
      </div>
    )
  }
}

//函数式组件实现方式
// function TitleStatic(props) {
//   return <div>{props.title}</div>
// }
// TitleStatic = React.memo(TitleStatic)

// //实现一个自己的memo
// function memo(FunctionComponent) {
//   return class extends PureComponent {
//     render() {
//       return <FunctionComponent {...this.props} />
//       //   return FunctionComponent(this.props)//这种也可以
//     }
//   }
// }
export default APP
