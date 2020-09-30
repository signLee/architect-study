import * as types from "../action-types"
//state初始状态  action要执行的方法(必须要有一个不为undefined type属性来表示动作类型)
export default function reducer(state={test:1}, action) {
  switch (action.type) {
    case types.INCREMENT:
    state.test = state.test +1
      return state
    case types.DECREMENT:
    state.test = state.test -1
      return state
    default:
      return state //初始状态直接返回初始的state
  }
}
