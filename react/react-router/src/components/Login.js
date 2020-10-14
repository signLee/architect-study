import React, { Component } from 'react';

class Login extends Component {
  handleLogin=()=>{
    localStorage.setItem('login',true)
    if(this.props.location.state){
      this.props.history.push(this.props.location.state.from)
    }else{
      this.props.history.push("/")
    }
  }
  render() {
    return (
      <div onClick={this.handleLogin}>
        登录
      </div>
    );
  }
}

export default Login;
