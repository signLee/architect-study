import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'
import Protected from './components/Protected'
import Login from './components/Login'
import MenuLink from './components/MenuLink'
import NavHeader from './components/NavHeader'

ReactDOM.render(
  <Router>
    {/* router里必须只有一个子节点 */}
     <>
     <nav>
       <NavHeader/>
       {/* react样式的写法有以下三种
        1.行间  style={{marginRight:'10px'}}
        2.页内样式，写在index.html里
        3.外联样式 通过import的方式引入xxx.css
        4.stype-components scope类似于模板字符串的方式
        5.import styles from 'xxx.css'  使用的时候 className = "styles.myClass" scope=true 引用对应的类名就行,加上scope=true防止变成全局，需要配置webpack.config
      */}
       <MenuLink exact={true} to='/' style={{marginRight:'10px'}}>首页</MenuLink>
       <MenuLink to='/user' style={{marginRight:'10px'}}>用户管理</MenuLink>
       <MenuLink to='/login' style={{marginRight:'10px'}}>登录</MenuLink>
       <MenuLink to='/profile' style={{marginRight:'10px'}}>个人中心</MenuLink>
       {/* <Link to={{pathname:'/',state:{title:'首页'}}} style={{marginRight:'10px'}}>首页</Link>
       <Link to="/user" style={{marginRight:'10px'}}>用户管理</Link>
       <Link to="/login" style={{marginRight:'10px'}}>登录</Link>
       <Link to={{pathname:'/profile',state:{title:'个人中心'}}} style={{marginRight:'10px'}}>个人中心</Link> */}
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
