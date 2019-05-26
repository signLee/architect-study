// 事务包装
function setState() {
  console.log("setState")
}
class Transaction {
  constructor(wrapper) {
    this.wrapper = wrapper
  }
  perform(anyMethod) {
    this.wrapper.forEach(wrapper => wrapper.initialize())
    anyMethod.call()
    this.wrapper.forEach(wrapper => wrapper.close())
  }
}
let transaction = new Transaction([
  {
    initialize() {
      console.log("initialize1")
    },
    close() {
      console.log("close1")
    }
  },
  {
    initialize() {
      console.log("initialize2")
    },
    close() {
      console.log("close2")
    }
  }
])
transaction.perform(setState)
// initialize1
// initialize2
// setState
// close1
// close2
