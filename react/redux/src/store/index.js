import createStore from "../redux/createStore"
import reducers from "./reducers"
let store = createStore(reducers, { counter: {test:5}, counter1: 10, counter2: 0 })

export default store
