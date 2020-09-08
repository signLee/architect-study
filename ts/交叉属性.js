// 两个接口的属性和方法都要有
var birdMan = {
    name: 'sign',
    fly: function () { },
    say: function () { }
};
var p = {
    name: 'sign',
    age: 18,
};
// 解决方法：typeof
var p1 = {
    name: 'sign',
    age: 18,
    gender: 'male'
};
var p3 = {
    name: 'sign'
};
function getValueByKey(p, key) {
    return p[key];
}
var p11 = {
    name: 'sign',
    age: 18,
    gender: 'male'
};
getValueByKey(p11, 'age'); //这里只能输入在p11里存在的key
var p12 = {
    name: 'sign'
};
var con = { name2: 'water' };
