import {createStore} from "redux"
import reducers from "./reducers"
// let store = createStore(reducers)
// let logger = store=>dispatch=>action=>{
//   console.log('老状态',store.getState());
//   dispatch(action)
//   console.log('新状态',store.getState());
// }
let logger = function(store){
  return function(dispatch){
    return function(action){
      console.log('老状态',store.getState());
      dispatch(action)
      console.log('新状态',store.getState());
    }
  }
}

function applyMiddleware(middleware){
  return function (createStore){
    return function(reducer){
      let store = createStore(reducer)//原始的仓库
      let dispatch = ()=>{throw Error('现在还不能用')}
      middleware = middleware(store)
      dispatch = middleware(store.dispatch)//传入老的dispatch进行包装后返回，对应logger的第一个返回的函数
      return {
        ...store,
        dispatch
      }
    }
  }
}
let store = applyMiddleware(logger)(createStore)(reducers)
export default store
