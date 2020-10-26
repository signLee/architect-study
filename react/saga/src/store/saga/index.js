import {all,call,cps} from 'redux-saga/effects'
import watchIncrementAsync from './watchIncrementAsync'
import helloSaga from './helloSaga'
import { readFile } from '../utils';

export function* readAsync(){
  let content =yield cps(readFile,'README.md')//如果函数返回的是一个promise可以用call，如果返回的是一个回调函数则需要用rps
  console.log(content)
}

// saga分3种：1.rootsaga 入口saga用来组织和调用别的saga 2.watchsaga 用来监听向仓库派发的动作，如果有监听到动作会通知worker去处理 3.worksaga,真正执行任务的saga

export default function* rootSaga(){
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    readAsync()
  ])
}