
import * as types from '../action-types'
import {put,takeEvery,call,take} from 'redux-saga/effects'
import {delay} from '../utils'
import Api from './api'

function* login(username,password){
  try {
    const token = yield call(Api.login,username,password)
    return token
  } catch (error) {
    alert(error)    
    yield put({type:types.LOGIN_ERROR,error})
  }
}
export default function* (){
  while(true){
    let {payload:{username,password}} =yield take(types.LOGIN)//监听action的派发后执行
    const token = yield call(login,username,password)
    if(token){
      yield put({type:types.LOGIN_SUCCESS,payload:token})
      // 登录成功了就监听登出的动作
      yield take(types.LOGOUT)
      // 派发退出成功动作 删除token
      yield put({type:types.LOGOUT_SUCCESS})
    }
  }
}