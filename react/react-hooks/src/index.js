import React,{useEffect,useState,createRef,useRef,forwardRef,useImperativeHandle} from 'react';
import ReactDOM from 'react-dom';
// 如果说一个函数以use开头，并且在函数内使用了hooks，那么这就是一个自定义hooks
function useNumber(){
  let [number,setNumber] = useState(0)
  useEffect(()=>{
    setInterval(()=>{
      setNumber(number=>number+1)
    },1000)
  },[])
  return [number,setNumber]
}
function Counter1(){
  let [number,setNumber] = useNumber()//自定义hooks只能在函数式组件里使用
  return (
    <>
    <div>{number}</div>
    <button onClick={()=>{
      setNumber(number+1)
    }}>+</button>
    </>
  )
}
function Counter2(){
  let [number,setNumber] = useNumber()//自定义hooks只能在函数式组件里使用两个组件的state是独立的
  return (
    <>
    <div>{number}</div>
    <button onClick={()=>{
      setNumber(number+1)
    }}>+</button>
    </>
  )
}
ReactDOM.render(
  <>
    <Counter1></Counter1>
    <Counter2></Counter2>
  </>,
  document.getElementById('root')
);

