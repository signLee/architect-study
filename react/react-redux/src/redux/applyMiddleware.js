
import compose from './compose'
export default function applyMiddleware(...middlewares){
  return function (createStore){
    return function(reducer){
      let store = createStore(reducer)//原始的仓库
      let dispatch = ()=>{throw Error('现在还不能用')}
      let middlewareApi = {
        getState : store.getState,
        dispatch: (...args)=>dispatch(...args)
      }
      const chain = middlewares.map(middleware=>middleware(middlewareApi)) 
      dispatch = compose(...chain)(store.dispatch)//传入老的dispatch进行包装后返回，对应logger的第一个返回的函数
      return {
        ...store,
        dispatch
      }
    }
  }
}