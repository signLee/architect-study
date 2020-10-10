import * as types from "../action-types"
// 类似于vuex中的actionsTypes
export default {
  increment() {
    return { type: types.INCREMENT }
  },
  decrement() {
    return { type: types.DECREMENT }
  },
  asyncIncrement(){
    return function(dispatch,getState){
      setTimeout(()=>{
        dispatch({ type: types.INCREMENT })
      },1000)
    }
  }
}
