class myComponent {
  constructor(props) {
    this.props = props
  }
  // 通过dom字符串创建DOM元素
  createElementFromDomString(domString) {
    let div = document.createElement("div")
    div.innerHTML = domString
    return div.children[0]
  }
  mySetState(partcialState) {
    this.state = Object.assign(this.state, partcialState) //setState是部分替换
    let oldElement = this.domElement
    let newElement = this.renderElement() //数据更新后重新渲染DOM
    oldElement.parentNode.replaceChild(newElement, oldElement)
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
window.trigger = (ev, method, ...others) => {
  ev.target.component[method].call(ev.target.component, ev, ...others)
  console.log(ev.target.component)
  console.log(method)
}
//定义一个Counter继承父类myComponent的属性和方法
class Counter extends myComponent {
  constructor(props) {
    super(props) //传递到父类的构造函数上
    this.state = { number: 0 }
  }
  add() {
    this.mySetState({ number: this.state.number + 1 })
  }
  render() {
    //render里添加的事件是通过事件委托的方式实现的
    return `<button onClick="trigger(event,'add')">${this.props.name}：${
      this.state.number
    }</button>`
  }
}
