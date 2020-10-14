import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'
import Protected from './components/Protected'
import Login from './components/Login'

ReactDOM.render(
  <Router>
    {/* router里必须只有一个子节点 */}
     <>
     <nav>
       <Link to={{pathname:'/',state:{title:'首页'}}} style={{marginRight:'10px'}}>首页</Link>
       <Link to="/user" style={{marginRight:'10px'}}>用户管理</Link>
       <Link to="/login" style={{marginRight:'10px'}}>登录</Link>
       <Link to={{pathname:'/profile',state:{title:'个人中心'}}} style={{marginRight:'10px'}}>个人中心</Link>
     </nav>
     <Route path="/" component={Home} exact/>
     {/* 不加exact的话不管访问哪个路径默认都会匹配/ 所以home组件都会显示出来 加了exact后需要完全相等才能匹配上*/}
     <Route path="/user" component={User}/>
     <Route path="/login" component={Login}/>
     <Protected path="/profile" exact={true} component={Profile}/>
     {/* <Redirect to="/user"></Redirect> */}
     </>
  </Router>,
  document.getElementById('root')
);
