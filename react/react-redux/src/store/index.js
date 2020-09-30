import createStore from "../redux/createStore"
import reducers from "./reducers"
let store = createStore(reducers)

export default store
