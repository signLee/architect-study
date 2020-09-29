//判断是否是一个纯对象（通过字面量的方式创建出来的才是纯对象，如果是以类的方式创建出来的，Object.getPrototypeOf(obj)还没有到Object的终点，还知道了当前构造函数那一层）
export default function isPlainObject(obj) {
  if (typeof obj != "object" || obj === null) {
    return false
  }
  let proto = obj
  //一直往上找根的proto
  while (Object.getPrototypeOf(proto)) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(obj) === proto
}
