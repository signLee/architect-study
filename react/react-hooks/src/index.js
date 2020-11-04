import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';

function Counter(){
  let [number,setNmuber] = useState(0)//使用了useState后可以在函数式组件里存储state状态
  // useEffect在每次渲染完成后执行 相当于类组件的componentDidUpdate和componentDidMounted之后
  useEffect(()=>{
    document.title =`一共点击了${number}次`
    const timer = setInterval(()=>{
      setNmuber(number+1)
    },1000)
    return ()=>{
      clearInterval(timer)//副作用函数可以通过返回一个函数来指定如何清除副作用
    }
  })
  return (
    <>
      <p>{number}</p>
      <button onClick={()=>setNmuber(number+1)}>+</button>
    </>
  )
}


ReactDOM.render(
    <Counter></Counter>,
  document.getElementById('root')
);

