//判断是否是一个纯对象
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
