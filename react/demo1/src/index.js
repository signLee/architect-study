import React from "react"
import ReactDOM from "react-dom"
import UserNameInput from "./components/high/UserNameInput"
import EmailInput from "./components/high/EmailInput"

ReactDOM.render(
  <>
    <UserNameInput />
    <EmailInput />
  </>,
  document.querySelector("#root")
)
