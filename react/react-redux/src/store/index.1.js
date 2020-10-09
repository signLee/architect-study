import {createStore} from "redux"
import reducers from "./reducers"
import logger1 from '../redux-logger1'
// let store = createStore(reducers)
import applyMiddleware from '../redux/applyMiddleware'

let store = applyMiddleware(logger1)(createStore)(reducers)
export default store
