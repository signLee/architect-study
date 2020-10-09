// let logger = store=>dispatch=>action=>{
//   console.log('老状态1',store.getState());
//   dispatch(action)
//   console.log('新状态1',store.getState());
// }

let logger = function({getState,dispatch}){
  return function(dispatch){
    return function(action){
      console.log('老状态1',getState());
      dispatch(action)
      console.log('新状态1',getState());
    }
  }
}
export default logger
