import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import Counter from './components/Counter'
import {Route,Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import {ConnectedRouter} from 'connected-react-router'
// 1.ConnectedRouter可以对路由跳转进行拦截处理，进行跳转。2当路径改变的时候可以把当前的路径信息存放到仓库里去
import history from './store/history';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <hr/>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/counter" component={Counter}></Route>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);