import React from 'react';
import {Route,Link} from 'react-router-dom'
// react指定渲染内容的方式有三种 ：rander component children 区别是children无论路径是否匹配都会渲染出来，其它两个匹配了才渲染 匹配上的组件props.match不为Null
export default function({to,exact,children}){
   return (
     <Route path={to} exact={exact} children={
       props=>{
         console.log(props);
        return <li className={props.match?'active':''}>
        <Link to={to}>{children}</Link>
       </li>
       }
     }></Route>
   )
}