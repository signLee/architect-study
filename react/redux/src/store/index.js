import createStore from "../redux/createStore"
import reducer from "./reducer"
let store = createStore(reducer, 0)

export default store
