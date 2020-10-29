import * as types from '../action-types'
let initState = {username:null}
export default function(state=initState,action){
    switch(action.type){
      case types.LOGIN_SUCCESS:
        return {token:action.payload}
      case types.LOGIN_ERROR:
        return {error:action.error}
      case types.LOGOUT_SUCCESS:
        return {}
      default:
        return state
    }
}