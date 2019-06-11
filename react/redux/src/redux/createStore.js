import isPlainObject from "./utils"
import ActionTypes from "./actionTypes"

export default function createStore(reducer, preLoadState) {
  if (typeof reducer != "function") {
    throw new Error("reducer必须是一个函数")
  }
  let currentReducer = reducer //当前处理器
  let currentState = preLoadState //当前状态
  let currentListener = [] //当前的监听函数
  //返回当前状态
  function getState() {
    return currentState
  }

  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error("action必须是一个纯对象")
    }
    if (typeof action.type == "undefined") {
      throw new Error("action的type属性不能为undefined")
    }
    currentState = currentReducer(currentState, action) //更改数据

    //数据更新后通知所有的订阅者
    for (let i = 0; i < currentListener.length; i++) {
      const listener = currentListener[i]
      listener()
    }
    return action
  }
  //订阅者
  function subscribe(listener) {
    currentListener.push(listener)
  }
  dispatch({ type: ActionTypes.INIT }) //初始化的时候执行一次获取state
  return {
    getState,
    subscribe,
    dispatch
  }
}
