import * as types from "../action-types"
//state初始状态  action要执行的方法(必须要有一个不为undefined type属性来表示动作类型)
export default function reducer(state = 0, action) {
  switch (action.type) {
    case types.INCREMENT1:
      return state + 1
    case types.DECREMENT1:
      return state - 1
    default:
      return state //初始状态直接返回初始的state
  }
}
