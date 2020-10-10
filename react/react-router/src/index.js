import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'

ReactDOM.render(
  <HashRouter>
    {/* router里必须只有一个子节点 */}
     <>
     <Route path="/" component={Home} exact/>
     {/* 不加exact的话不管访问哪个路径默认都会匹配/ 所以home组件都会显示出来 */}
     <Route path="/user" component={User}/>
     <Route path="/profile" component={Profile}/>
     </>
  </HashRouter>,
  document.getElementById('root')
);
