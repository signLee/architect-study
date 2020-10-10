function isPromise(obj){
  return !!obj&&(typeof obj === 'function'|| typeof obj === 'object')&&(typeof obj.then==='function')
}
export default function({dispatch,getState}){
  return next=>action=>{
    return isPromise(action.payload)?action.payload.then((result)=>{
      dispatch({...action,payload:result})
    }).catch((err)=>{
      dispatch({...action,payload:err,error:true})
      return Promise.reject(err)
    }):next(action)
  }
}