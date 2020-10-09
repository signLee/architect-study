// let logger = store=>dispatch=>action=>{
//   console.log('老状态2',store.getState());
//   dispatch(action)
//   console.log('新状态2',store.getState());
// }

let logger = function({getState,dispatch}){
  return function(dispatch){
    return function(action){
      console.log('老状态2',getState());
      dispatch(action)
      console.log('新状态2',getState());
    }
  }
}
export default logger
