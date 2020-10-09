// let logger = store=>dispatch=>action=>{
//   console.log('老状态1',store.getState());
//   dispatch(action)
//   console.log('新状态1',store.getState());
// }

let logger = function({getState}){
  return function(next){
    return function(action){
      console.log(getState);
      console.log('老状态1',getState());
      next(action)
      console.log('新状态1',getState());
    }
  }
}
export default logger
