import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

let sagaMiddleware = createSagaMiddleware()
let store = applyMiddleware(sagaMiddleware)(createStore)(reducer)
sagaMiddleware.run(rootSaga)//sagaMiddleware是一个执行器，可以启动helloSaga这个generator的执行
export default store