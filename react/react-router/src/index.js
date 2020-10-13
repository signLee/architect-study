import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link,Redirect} from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'

ReactDOM.render(
  <Router>
    {/* router里必须只有一个子节点 */}
     <>
     <nav>
       <Link to={{pathname:'/',state:{title:'首页'}}}>首页</Link>
       <Link to="/user">用户管理</Link>
       <Link to={{pathname:'/profile',state:{title:'个人中心'}}}>个人中心</Link>
     </nav>
     <Route path="/" component={Home} exact/>
     {/* 不加exact的话不管访问哪个路径默认都会匹配/ 所以home组件都会显示出来 加了exact后需要完全相等才能匹配上*/}
     <Route path="/user" component={User}/>
     <Route path="/profile" component={Profile}/>
     <Redirect to="/user"></Redirect>
     </>
  </Router>,
  document.getElementById('root')
);
