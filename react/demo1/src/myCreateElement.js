/* 
    JSX渲染原理
        1.基于babel中的babel-preset-react把jsx编译为Rect.createElement(...)的模式
            至少有两个参数
            没一个标签都会变成对应的createElement
            React.createElement(
                元素的标签名,
                标签的属性集合[对象]，没有属性就是null,
                第三个及以后根据子节点的个数来决定
            )
        2.基于createElement生成一个JSX对象（虚拟DOM）
                生成一个对象
                {
                    type:'标签名',
                    props:{
                        className:"xxx",
                        style:{},
                        children:可能是一个数组、字符串、或者可能没有children(没有子节点)
                    }
                }
        3.ReactDOM.render(JSX对象，...)，基于RENDER把JSX对象渲染成为真实的DOM
*/
function createElement(type,props,...childrens){
    return {
        type,
        props:{
            ...props,
            children:childrens.length<=1?childrens[0]:childrens
        }
    }
}

function render(jsxObj,container,callback){
    let {type,props} = jsxObj,
    {children}=props;
    let newElement=document.createElement(type)
    //属性和子元素的处理
    for(let attr in props){
        if(!props.hasOwnProperty(attr)) break;//不遍历公有属性
        switch(attr){
            case 'className':
                // 类名
                newElement.setAttribute('class',props[attr])
                break
            case 'style':
                //样式
                let styleObj=props['style']
                for(let key in styleObj){
                    if(styleObj.hasOwnProperty(key)){
                        newElement['style'][key]=styleObj[key]
                    }
                }
                break
            case 'chidren':
                let childrenAry = props['children']
                childrenAry=Array.isArray(childrenAry)?childrenAry:(childrenAry?[childrenAry]:[])
                childrenAry.forEach(item => {
                    //字符串：文本节点
                    if(typeof item ==='string'){
                        newElement.appendChild(document.createTextNode(item))
                    }else{
                        //JSX元素  递归
                        render(item,newElement)
                    }
                });
                break
            default:
                // 属性
                newElement.setAttribute(attr,props[attr])
        }

    }


    container.appendChild(newElement)
    callback&&callback()
}