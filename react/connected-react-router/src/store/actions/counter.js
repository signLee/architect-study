import * as types from '../action-types'
import { push } from 'connected-react-router';
export default{
  increment(){
    return {type:types.INCREMENT}
  },
  decrement(){
    return {type:types.DECREMENT}
  },
  goHome(){
    return push('/')
  }
}