import React,{useState,useReducer,useContext,createContext} from 'react';
import ReactDOM from 'react-dom';

function Counter(){
  let [number,setNmuber] = useState(0)//使用了useState后可以在函数式组件里存储state状态
  return (
    <>
      <p>{number}</p>
      <button onClick={()=>setNmuber(number+1)}>+</button>
    </>
  )
}

function Counter1(){
  let [number,setNmuber] = useState(0)//使用了useState后可以在函数式组件里存储state状态
  function alertNum(){
    setTimeout(()=>{
      alert(number)//每次执行的时候拿到的state的值都是独立的，拿的是当时的状态（快照）
    },3000)
  }
  return (
    <>
      <p>{number}</p>
      <button onClick={()=>setNmuber(number+1)}>+</button>
      <button onClick={alertNum}>+</button>
    </>
  )
}
const initState = {number:0}
function reducer(state=initState,action){
  switch(action.type){
    case 'ADD':
      return {number:state.number+1}
    default:
      break;
  }
}

function Counter2(){
  const [state,dispatch] = useReducer((reducer),initState,()=>initState)
  return (
    <>
      <p>{state.number}</p>
      <button onClick={()=>dispatch({type:'ADD'})}>+</button>
    </>
  )
}

function SubCounter(){
  const {state,dispatch} = useContext(CounterContext)// 当前context的值由上层组件中距离当前组件最近的Context.Provider的value props决定
  return (
    <> 
      <p>{state.number}</p>
      <button onClick={()=>dispatch({type:'ADD'})}>+</button>
    </>
  )
}
const CounterContext = createContext()
function Counter3(){
  const [state,dispatch] = useReducer((reducer),initState,()=>initState)
  return (
    <CounterContext.Provider value={{state,dispatch}}>
      <SubCounter></SubCounter>
    </CounterContext.Provider>
  )
}

ReactDOM.render(
    <Counter3></Counter3>,
  document.getElementById('root')
);

