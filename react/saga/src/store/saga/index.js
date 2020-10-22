import {all} from 'redux-saga/effects'
import watchIncrementAsync from './watchIncrementAsync'
import helloSaga from './helloSaga'

// saga分3种：1.rootsaga 入口saga用来组织和调用别的saga 2.watchsaga 用来监听向仓库派发的动作，如果有监听到动作会通知worker去处理 3.worksaga,真正执行任务的saga

export default function* rootSaga(){
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}