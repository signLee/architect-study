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
    return (
      <>
        <button onClick={this.add}>{this.state.number}</button>
      </>
    )
  }
}

function withCounter(Conponent){
    return class extends React.Component{
      state = { number:0 }
      componentDidMount(){
        setInterval(()=>{
          this.setState({number:this.state.number+1}) 
        },1000)
      }
    render(){
      return (
        <>
          <Conponent number={this.state.number}></Conponent>
        </>
      )
    }
  }
}


class Counter1 extends React.Component{
  render(){
    return (
      <>
        <button>{this.props.number}</button>
      </>
    )
  }
}
Counter1 = withCounter(Counter1)
class Counter2 extends React.Component{
  render(){
    return (
      <>
        <button>{this.props.number}</button>
      </>
    )
  }
}
Counter2 = withCounter(Counter2)
ReactDOM.render(
  <>
    <Counter></Counter>
    <Counter1></Counter1>
    <Counter2></Counter2>
  </>,
  document.getElementById('root')
);

