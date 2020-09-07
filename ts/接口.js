//必须和上面的数据结构和类型保持一致 否则会报错
var user = {
    age: 18,
    name: 'sign'
};
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log('飞起来');
    };
    return Bird;
}());
