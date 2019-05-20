import React from 'react';
import ReactDOM from 'react-dom';

/*
 把jsx虚拟DOM元素渲染到页面中（真实的DOM）
 JSX
 CONTAINER 容器
            容器不能是body
            根元素只能有一个
            大括号{}中存放的是JS表达式（必有返回结果）
                null,undefined，布尔也是jsx种的元素值，但是代表的是空
                只能识别数字和字符串
                大括号中绑定的值不能是对象类型的，但是给元素设定的属性除外
                class属性被className取代了
                style属性只能是样式对象
                循环遍历的必须要加上唯一的key属性，key值必须要唯一并且稳定，react在数据更改了后重新渲染组件的时候，会比较key值，key值相同只是重新更改属性，key值不同会先销毁之前的组件，然后重新创建组件
 CALLBACK   把JSX渲染到容器后执行的回调
*/

let data=[{
    name:'sign',
    age:25
},{
    name:'zero',
    age:26
}]

ReactDOM.render(
<div>
    <h1 className='test'>测试</h1>
    <h1 style={{marginRight: 2 + 'em'}}>测试</h1>
    <ul>
        {data.map((item,index)=>{
            let {name,age} = item
            return <li key={index}>{name+age}</li>
        })}
    </ul>
</div>
,document.querySelector("#root"),()=>{console.log("添加成功")})