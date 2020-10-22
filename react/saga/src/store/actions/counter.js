// import * as types from '../action-types'
import * as types from '../action-types'
export default {
  increment(){
    return {type:types.INCREMENT}
  },
  asyncIncrement(){
    return {type:types.ASYNC_INCREMENT}
  }
}