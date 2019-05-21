// 以函数的方式创建组件
// 开发的时候如果报 'React' must be in scope when using JSX 错误，是因为开发组件的时候需要引入react
// 传值：通过函数入参的方式传
// 组件扩展：推荐使用React.Children.map的方式
import React from "react"
export default function banner(props) {
  console.log(props)
  return (
    <section className="container">
      {props.children}
      {React.Children.map(props.children, (item, index) => {
        return item
      })}
      我是轮播图
    </section>
  )
}
