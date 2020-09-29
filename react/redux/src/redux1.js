//redux执行流程：在createStore执行（入参为action回调、类似于vuex中的actions）后会返回getState（类似于vuex中的getters）,subscribe(订阅者类似于vuex中的computed),dispatch（类似于vuex中的mapMutation）
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

let store = createStore(reducer,initState)//initState 初始状态
let counterValue = document.getElementById("counter-value")
let increcement = document.getElementById("increcement")
let decrecement = document.getElementById("decrecement")

//订阅数据变更后的回调函数
function render() {
  counterValue.innerHTML = store.getState() //获取state的值
}
render()
let unsubscribe = store.subscribe(render) //订阅数据更新并传入回调函数,返回值是一个取消订阅的函数

setTimeout(() => {
  unsubscribe()
}, 3000)

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
