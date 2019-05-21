import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/banner_fun'
/* 
    react中创建组件的方式
        1.函数创建
        2.基于类创建
        单闭合和双闭合都可以调用组件
            区别：单闭合标签只能传递一些基础属性
                 双闭合不仅可以传递属性，而且属性中可以携带children子元素，用以实现组件的扩容性
*/
ReactDOM.render(
<div>
    <Banner interval={3000}/>
    <Banner interval={5000}>
        <a href="http://www.baidu.com">左</a>
        <a href="http://www.baidu.com">右</a>
    </Banner>
</div>
,document.querySelector("#root"),()=>{console.log("添加成功")})