import React from "react"
import ReactDom from "react-dom"
import Counter from "./components/Counter"
import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"

ReactDom.render(
  <>
    <Counter />
    <Counter1 />
    <Counter2 />
  </>,
  document.getElementById("root")
)
