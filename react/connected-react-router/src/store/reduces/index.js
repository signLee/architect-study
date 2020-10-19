import {combineReducers} from 'redux'
import counter from './counter'
import {connectRouter} from 'connected-react-router'
import history from '../history'
const reduces = combineReducers({counter,router:connectRouter(history)})
export default  reduces 