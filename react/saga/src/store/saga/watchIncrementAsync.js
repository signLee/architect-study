
import * as types from '../action-types'
import {put,delay,takeEvery} from 'redux-saga/effects'
function* incrementAsync(){
  yield delay(1000)
  yield put({type:types.INCREMENT})
}

export default function* watchIncrementAsync(){
  // 监听每一次的ASYNC_INCREMENT的派发，并执行incrementAsync
  yield takeEvery(types.ASYNC_INCREMENT,incrementAsync)
}