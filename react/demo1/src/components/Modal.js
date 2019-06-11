// Portal   createPortal适用于将节点挂载到root(正常所有组件都挂载在root下)以外的节点的情况
import React, { Component } from "react"
import ReactDom from "react-dom"
import "./modal.css"
class Modal extends Component {
  render() {
    return ReactDom.createPortal(
      this.props.children,
      document.getElementById("modal-root")
    )
  }
}

export default class Page extends Component {
  constructor() {
    super()
    this.state = { showModal: false }
  }
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>关闭/显示模态框</button>
        {this.state.showModal && (
          <Modal>
            <div id="modal" className="modal">
              <div id="content" className="content">
                content
                <button onClick={this.toggleModal}>关闭</button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    )
  }
}
