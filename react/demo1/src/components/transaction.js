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
      console.log("initialize")
    },
    close() {
      console.log("close")
    }
  },
  {
    initialize() {
      console.log("initialize")
    },
    close() {
      console.log("close")
    }
  }
])
transaction.perform(setState)
