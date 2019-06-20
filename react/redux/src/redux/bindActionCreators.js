export default function bindActionCreators(actionCreators, dispatch) {
  // 传进来的是个函数
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch)
  }
  // 传的是整个actions 依次拿出每个函数重新包装
  const bindActionCreators = {}
  for (const key in actionCreators) {
    bindActionCreators[key] = bindActionCreator(actionCreators[key], dispatch)
  }
  return bindActionCreators
}

function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments))
  }
}
