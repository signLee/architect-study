import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class NavHeader extends Component {
  render() {
    return (
      <div onClick={()=>this.props.history.push('/')}>
        NavHeader
      </div>
    );
  }
}
// 如果不是用Router包裹的组件想要用路由的方法，需要用withRouter将组件包裹一层
export default withRouter(NavHeader);
