// 合并reducer
// let reducers = combineReducers({
//     counter,
//     counter1,
//     counter2
//   })
export default function combineReducers(reducers) {
  const reducersKeys = Object.keys(reducers) // ['counter','counter1','counter2']
  return function(state = {}, action) {
    //{counter1:0,counter2:0}
    const nextState = {} // 下一个状态对象
    for (let i = 0; i < reducersKeys.length; i++) {
      const key = reducersKeys[i] // 当前reducer的key
      const reducer = reducers[key] // 当前reducer
      const previousStateForkey = state[key] // 前一个状态的值
      const nextStateFrokey = reducer(previousStateForkey, action) // 下一个状态
      nextState[key] = nextStateFrokey
    }
    return nextState
  }
}
