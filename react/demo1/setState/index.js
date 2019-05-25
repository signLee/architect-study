class Counter {
  constructor() {
    this.state = { number: 0 }
  }
  // 通过dom字符串创建DOM元素
  createElementFromDomString(domString) {
    let div = document.createElement("div")
    div.innerHTML = domString
    return div.children[0]
  }
  add() {
    this.state = { number: this.state.number + 1 }
    let oldElement = this.domElement
    let newElement = this.render() //数据更新后重新渲染DOM
    oldElement.parentNode.replaceChild(newElement, oldElement)
  }
  render() {
    this.domElement = this.createElementFromDomString(
      `<button>${this.state.number}</button>`
    )
    this.domElement.addEventListener("click", this.add.bind(this))
    return this.domElement
  }
}
