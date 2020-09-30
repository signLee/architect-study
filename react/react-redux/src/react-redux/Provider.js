import React, { Component } from 'react';
import ReduxContext from './context'
// react-redux的实现是通过context实现的 
class Provider extends Component {
  render() {
    return (
      // 这里取的是从Provider传过来的值
      <ReduxContext.Provider value={{store:this.props.store}}>
        {this.props.children}
        {/* 渲染的是子节点。Provider只负责传值 */}
      </ReduxContext.Provider>
    );
  }
}

export default Provider;