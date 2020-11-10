import React,{useEffect,useState,createRef,useRef,forwardRef,useImperativeHandle} from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
  state = { number:0 }
  componentDidMount(){
    setInterval(()=>{
      this.setState({number:this.state.number+1}) 
    },1000)
  }
  render(){
    return this.props.render({number:this.state.number})
  }
}

ReactDOM.render(
  <>
    <Counter render={props=><p>{props.number}</p>}></Counter>
    <Counter render={props=><button>{props.number}</button>}></Counter>
  </>,
  document.getElementById('root')
);

