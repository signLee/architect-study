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
let batchingStrategy = {
  isBatchingUpdates: false, //默认为非批量更新模式
  dirtyComponents: [],
  batchedUpdates() {
    this.dirtyComponents.forEach(component => component.updateComponent())
  }
}

class Updater {
  constructor(component) {
    this.component = component
    this.pendingState = [] //执行队列
  }
  // 往执行队列里添加 等待批量更新完成
  addState(partcialState) {
    this.pendingState.push(partcialState)
    batchingStrategy.isBatchingUpdates
      ? batchingStrategy.dirtyComponents.push(this.component)
      : this.component.updateComponent()
  }
}

class myComponent {
  constructor(props) {
    this.props = props
    this.$updater = new Updater(this)
  }
  updateComponent() {
    this.$updater.pendingState.forEach(partcialState =>
      Object.assign(this.state, partcialState)
    )
    let oldElement = this.domElement
    let newElement = this.renderElement() //数据更新后重新渲染DOM
    oldElement.parentNode.replaceChild(newElement, oldElement)
  }
  // 通过dom字符串创建DOM元素
  createElementFromDomString(domString) {
    let div = document.createElement("div")
    div.innerHTML = domString
    return div.children[0]
  }
  mySetState(partcialState) {
    this.$updater.addState(partcialState)
  }
  renderElement() {
    let htmlString = this.render()
    this.domElement = this.createElementFromDomString(htmlString)
    this.domElement.component = this //让这个DOM节点上挂载一个component属性等于当前Counter组件的实例  方便后面事件委托时使用
    return this.domElement
  }
  mount(container) {
    container.appendChild(this.renderElement())
  }
}

let transaction = new Transaction([
  {
    initialize() {
      batchingStrategy.isBatchingUpdates = true
    },
    close() {
      batchingStrategy.isBatchingUpdates = false
      batchingStrategy.batchedUpdates() //把所有脏组件批量更新
    }
  }
])
window.trigger = (ev, method) => {
  let component = ev.target.component
  transaction.perform(component[method].bind(component, ev))
}
//定义一个Counter继承父类myComponent的属性和方法
class Counter extends myComponent {
  constructor(props) {
    super(props) //传递到父类的构造函数上
    this.state = { number: 0 }
  }
  add() {
    this.mySetState({ number: this.state.number + 1 })
    console.log(this.state.number)
    this.mySetState({ number: this.state.number + 1 })
    console.log(this.state.number)
    setTimeout(() => {
      //执行到这个里面的时候batchingStrategy.isBatchingUpdates已经是false 所以是非批量更新方式，直接修改对应的值
      this.mySetState({ number: this.state.number + 1 })
      console.log(this.state.number)
      this.mySetState({ number: this.state.number + 1 })
      console.log(this.state.number)
    })
    // 执行结果1234
    // 在react中的执行结果0023
    // setState的执行原理：
    // setState执行的时候会把所有的newState存入pending队列，react会统一等所有数据都更新完成后进行batch update(批量更新)，如果当前的执行批量更新还没完成，就会先把当前的组件保存到dirtyComponent中，当所有的批量更新执行完毕后，遍历所有的dirtyComponent，调用updateComponent,更新pending state or props
  }
  render() {
    //render里添加的事件是通过事件委托的方式实现的
    return `<button onClick="trigger(event,'add')">${this.props.name}：${
      this.state.number
    }</button>`
  }
}
