
import * as types from '../action-types'
import {put,takeEvery,call,take,fork, takeLeading,cancel,cancelled} from 'redux-saga/effects'
import {delay} from '../utils'
import Api from './api'

function* login(username,password){
  try {
    const token = yield call(Api.login,username,password)
    yield put({type:types.LOGIN_SUCCESS,payload:token})
  } catch (error) {
    alert(error)    
    yield put({type:types.LOGIN_ERROR,error})
  } finally{
    if(yield cancelled()){
      alert('cancelled')
    }
  }
}
export default function* (){
  while(true){
    let {payload:{username,password}} =yield take(types.LOGIN)//监听action的派发后执行 后面的动作需要这里监听到后才会执行会有阻塞
    // const token = yield call(login,username,password)
    const task = yield fork(login,username,password)//fork相当于开了一个子进程，不会阻塞当前的主进程,进程会立即向下执行,用fork拿不到返回值，但是可以得到一个任务对象
    // if(token){
      
      // 登录成功了就监听登出的动作
        const action = yield take(types.LOGOUT)
        if(action.type === types.LOGOUT){
          yield cancel(task)//取消任务
        }
      // 派发退出成功动作 删除token
      yield put({type:types.LOGOUT_SUCCESS})
    // }
  }
}