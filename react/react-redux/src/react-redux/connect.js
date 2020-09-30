import React,{Component} from 'react'
import ReactContext from './context'
import bindActionCreators from '../redux/bindActionCreators'
export default function (mapStateToProps,mapDispatchToProps){
  // WrappedComponent  被包装的组件
  return function(WrappedComponent){
    // connect两次执行过后返回的是一个组件 <Counter />
    return class extends Component{
      static contextType =ReactContext
      constructor(props,context){
        // context = value={{store:this.props.store}
        super(props)
        this.state = mapStateToProps( context.store.getState())// 包装一层后返回新的state
      }
      componentDidMount() {
        this.unsubscribe=this.context.store.subscribe(()=>{
          this.setState(mapStateToProps(this.context.store.getState()))
        })
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
      
      render(){
        let actions = bindActionCreators(mapDispatchToProps,this.context.store.dispatch)
        return <WrappedComponent {...this.state} {...actions}></WrappedComponent>
      }
    }
  }
}





// class Counter extends Component {
//   render() {
//     return (
//       <>
//         <p>{this.props.number}</p>
//         <button onClick={this.props.increment}>+</button>
//         <button onClick={this.props.decrement}>-</button>
//       </>
//     )
//   }
// }
// const mapStateToProps = state=>({number:state.number*10})//之所以做一层中转的原因：1状态可能很大，需要用到的属性比较少  2.可能需要对属性做一些其它操作处理数据3.为了性能优化，可能会有其它非本组件的属性的变更导致当前组件的重新计算渲染
// const mapDispatchToProps = actions
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)