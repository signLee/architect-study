import {createStore,applyMiddleware} from 'redux'
import reduces from './reduces';
import {routerMiddleware} from 'connected-react-router';
import history from './history'

let store = createStore(reduces,applyMiddleware(routerMiddleware(history)))
// 上面的写法等同于如下
// let store = applyMiddleware(routerMiddleware(history))(createStore)(reduces)
window.store = store

export default store