import {createStore} from 'redux'
import reduces from './reduces';
let store = createStore(reduces)
window.store = store

export default store