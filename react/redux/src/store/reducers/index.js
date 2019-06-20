// reducer合并
import counter from "./counter"
import counter1 from "./counter1"
import counter2 from "./counter2"
import { combineReducers } from "../../redux"

let reducers = combineReducers({
  counter,
  counter1,
  counter2
})
// 合并后的state = { counter1:0,counter2:0 }
export default reducers
