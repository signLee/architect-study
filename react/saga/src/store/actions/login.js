// import * as types from '../action-types'
import * as types from '../action-types'
export default {
  login(username,password){
    return {type:types.LOGIN,payload:{username,password}}//action接受到指令后派发动作，saga会监听到这里的派发
  },
  logout(){
    return {type:types.LOGOUT}
  }
}