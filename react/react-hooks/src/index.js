import React,{useEffect,useState,createRef,useRef,forwardRef,useImperativeHandle} from 'react';
import ReactDOM from 'react-dom';


function Child(props,parentRef){
  const inputRef = useRef()
  const inputRef1 = useRef()
  //之所以用useImperativeHandle 是为了防止其他的DOM非常规的操作，用了useImperativeHandle后只返回可用部分
  useImperativeHandle(parentRef,()=>{
    // 这里return 后返回的是parentRef.current
    return {
      focus1(){
        inputRef.current.focus()
      },
      changeText(){
        inputRef1.current.value = 'asjdfllkj'
      }
    }
  })
  return (
    <>
      <input ref={inputRef}/>
      <input ref={inputRef1}/>
     
    </>
  )
}
let ForwardChild = forwardRef(Child)//函数式组件要抓取时需要使用forwardRef


function Parent(){
  const parentRef = useRef()
  function getFocus(){
    parentRef.current.focus1()//parentRef.current取到的是useImperativeHandle的返回值
    parentRef.current.changeText()
  }
  return (
    <>
      <ForwardChild ref={parentRef}/>
      <button onClick={getFocus}>获取焦点</button>
    </>
  )
}

ReactDOM.render(
    <Parent></Parent>,
  document.getElementById('root')
);

