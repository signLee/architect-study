import React from "react"
import ReactDOM from "react-dom"
import Vote from "./components/vote"

ReactDOM.render(
  <div>
    <Vote title="法国 VS 克罗地亚" />
    <Vote title="德国 VS 韩国" />
  </div>,
  document.querySelector("#root")
)
