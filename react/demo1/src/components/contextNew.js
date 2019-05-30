import React, { Component } from "react"
import PropTypes from "prop-types"
const ThemeContext = React.createContext() //ThemeContext提供了两个方法：Provider,Consumer

class ContextNew extends Component {
  render() {
    return (
      <div>
        <Page />
      </div>
    )
  }
}

class Page extends Component {
  constructor() {
    super()
    this.state = { color: "red" } //自己定义的属性
  }
  setColor = color => {
    this.setState({ color: color })
  }

  render() {
    let ctx = { color: this.state.color, setColor: this.setColor }
    return (
      //方法一
      <ThemeContext.Provider value={ctx}>
        <div style={{ border: "5px solid red", padding: "5px" }}>
          Page
          <Header />
          <Main />
        </div>
      </ThemeContext.Provider>
    )
  }
}
class Header extends Component {
  render() {
    return (
      <div style={{ border: "5px solid blue", padding: "5px" }}>
        Header
        <Title />
      </div>
    )
  }
}
class Title extends Component {
  static contextType = ThemeContext
  render() {
    const value = { color: "red" }

    return (
      <ThemeContext.Consumer>
        {value => (
          <div
            style={{
              border: "5px solid pink",
              padding: "5px",
              color: value.color
            }}
          >
            title
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}
class Main extends Component {
  render() {
    return (
      <div style={{ border: "5px solid orange", padding: "5px" }}>
        Main
        <Content />
      </div>
    )
  }
}
class Content extends Component {
  static contextType = ThemeContext
  render() {
    return (
      <div
        style={{
          border: "5px solid yellow",
          padding: "5px",
          color: this.context.color
        }}
      >
        Content1
        <button onClick={() => this.context.setColor("green")}>green</button>
        <button onClick={() => this.context.setColor("red")}>red</button>
      </div>
    )
  }
}
export default ContextNew
