import {createStore,applyMiddleware} from 'redux'
import reduces from './reduces';
import {routerMiddleware} from 'connected-react-router';
import history from './history'

import { persistStore, persistReducer } from 'redux-persist'//redux-persist的原理是每一次修改了store后同步到storage里去
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reduces)
let store = createStore(persistedReducer,applyMiddleware(routerMiddleware(history)))
// 上面的写法等同于如下
// let store = applyMiddleware(routerMiddleware(history))(createStore)(reduces)
window.store = store
let persistor = persistStore(store)
export {
  store,
  persistor
}