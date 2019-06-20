import * as types from "./action-types"
// 类似于vuex中的actionsTypes
export default {
  increment() {
    return { type: types.INCREMENT }
  },
  decrement() {
    return { type: types.DECREMENT }
  }
}
