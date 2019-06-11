import { createStore } from "./redux"

let initState = 0
let INCREMENT = "INCREMENT"
let DECREMENT = "DECREMENT"
//state初始状态  action要执行的方法(必须要有一个不为undefined type属性来表示动作类型)
function reducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state //初始状态直接返回初始的state
  }
}

let store = createStore(reducer)
let counterValue = document.getElementById("counter-value")
let increcement = document.getElementById("increcement")
let decrecement = document.getElementById("decrecement")

function render() {
  counterValue.innerHTML = store.getState() //获取state的值
}
render()
store.subscribe(render) //订阅

increcement.addEventListener("click", function() {
  store.dispatch({
    type: INCREMENT
  })
})

decrecement.addEventListener("click", function() {
  store.dispatch({
    type: DECREMENT
  })
})
