import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import UserAdd from './UserAdd'
import UserList from './UserList'
class User extends Component {
  render() {
    return (
      <div>
         <Router>
           <>
           <nav>
            <Link to="/user/list">用户列表</Link>
            <Link to={{pathname:'/user/add',state:{title:'用户添加'}}}>用户添加</Link>
          </nav>
          {/* 不加exact的话不管访问哪个路径默认都会匹配/ 所以home组件都会显示出来 加了exact后需要完全相等才能匹配上*/}
          <Switch>
            <Route path="/user/list" component={UserList}/>
            <Route path="/user/add" component={UserAdd}/>
            <Redirect to="/user/list"></Redirect>
            {/* Redirect重定向 */}
          </Switch>
          {/* 使用了switch后只会选择其中之一匹配，如果不用switch，则符合条件的都会被渲染出来 */}
          {/* 访问链接传过来的params可以使用this.props.match.params.xxx */}
           </>
         </Router>
      </div>
    );
  }
}

export default User;
