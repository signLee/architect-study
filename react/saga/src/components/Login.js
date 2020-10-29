import React, { Component } from 'react';
import {connect} from 'react-redux'
import actions from '../store/actions/login'
class Login extends Component {
  constructor(){
    super()
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef()
  }
  login=()=>{
    console.log(this.props)
    let username = this.usernameRef.current.value
    let password = this.passwordRef.current.value
    this.props.login(username,password)//派发指令到actions里
  }
  logout =()=>{
    this.props.logout()
  }
  render() {
    let loginForm = (
      <>
        <label>用户名</label><input ref={this.usernameRef}/>
        <label>密码</label><input ref={this.passwordRef}/>
        <button onClick={this.login}>登录</button>
      </>
    )
    let logouForm = (
      <>
        <label>用户名</label>{this.props.token}
        <button onClick={this.logout}>退出</button>
      </>
    )
    return (
        this.props.token?logouForm:loginForm
    );
  }
}

export default connect(
  state=>state.user,
  actions
)(Login);
