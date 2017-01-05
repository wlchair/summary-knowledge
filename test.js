// var delegate = function(client, clientMethod) {
//     return function() {
//         return clientMethod.apply(client, arguments);
//     }
// }
// var ClassA = function() {
//     var _color = "red";
//     return {
//         getColor: function() {
//             console.log("Color: " + _color);
//         },
//         setColor: function(color) {
//             _color = color;
//         }
//     };
// };

// var a = new ClassA();
// a.getColor();
// a.setColor("green");
// a.getColor();
// console.log("执行代理！");
// var d = delegate(a, a.setColor);
// d("blue");
// console.log("执行完毕！");
// a.getColor();

// function Point(x, y) {
//     this.x = x;
//     this.y = y;
//     this.moveTo = function(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }

// var p1 = new Point(0, 0);
// console.log(p1.x);
// var p2 = {
//     x: 0,
//     y: 0
// };
// p1.moveTo(1, 1);
// console.log(p1.x);
// p1.moveTo.apply(p2,[10,10]);
// console.log(p1.x);
// console.log(p2.x);
// var foo = {n: 1};
// x = (foo = {n: 2});
// console.log(x)

// function Person(name, friends) {
//     this.name = name;
//     this.friends = friends;
// }
// Person.prototype = {
//     constructor: Person,
//     speech: function() {
//         console.log('my name:' + this.name + ', my friends:' + this.friends);
//     }
// };

// function Child(name, age) {
//     Person.call(this, 'jims', 3)
//     this.name = name;
//     this.age = age;
// }
// Child.prototype = new Person();
// Child.prototype.express = function() {
//     console.log('i\'m child,my name:' + this.name + ',my age:' + this.age + ', but my father have speech power:' + this.speech());
// }
// var c = new Child('jim', 2);
// c.express();
// console.log(c instanceof Child)
// console.log(c instanceof Person)

//原型的问题，属性共享
//类式继承的问题，方法重复


// console.log(typeof null);
// console.log(typeof undefined)
// console.log(null instanceof Object);
// console.log(Array instanceof Object)
// var add =function (arguments) {
//     console.log(arguments);
//     for (var i in arguments){
//         console.log(i)
//     }

// }
// add(2,3);
// define(function(){
// console.log('testing');    
// });


// (function t() {
//     console.log('t');
//     t();
// })();
// function MyObject(message) {
//     this.message = message.toString();
//     var i = 0;
//     this.getMessage = function() {
//         return ++i + this.message;
//     };
// }
// var c = new MyObject(7);
// console.log(c.getMessage());
// console.log(c.getMessage());


// function m() {
//     var i = 0;
//     setTimeout(function() {
//         console.log(++i);
//     }, 20);
// }
// m();
// m();
// function z() {
//     for (var i = 0; i < 10; i++) {
//         // setTimeout((function(m) {
//         //     console.log(m);
//         // })(i), 0);
//         setTimeout(function() {
//             console.log(i);
//         }, 0);
//     }
// }


// 赋值》表达式》提前声明


// var a = add(2)(3)(4);
// console.log(a);

//1,1,2,3,5,8

// function f(counter) {
//     var i = 0,
//         start = 1,
//         next = 1,
//         result = 0;
//     while (i <= counter) {
//         if (counter < 3 || i < 3) {
//             result = 1;
//         } else {
//             result = start + next;
//         }
//         i++;
//     }
//     console.log(result);
// }



// function add(x) {
//     add.toString = add.valueOf = function() {
//         return x;
//     };
//     function add(y) {
//         x += y;
//         return add;
//     }4
//     return add;
// }
// var a = new add(3)(4);
// var b = new add(3)(4)(5);
// console.log(a);
// console.log(b);


// add(2)(3);
// 'use strict';



// for (var i = 100 - 1; i >= 0; i--) {
//     if(i%3 === 0 && i%5 === 0){
//         console.log(i + 'fizzbuzz');
//         continue;
//     }
//     if(i%5 === 0){
//         console.log(i + 'buzz');
//     }

// };
// console.log(this);
// 'use strict';
// // console.log(add(2, 4));
// console.log(add(2,5)(4,9));
// // console.log(add(2, 3, 4));
// // console.log(add(2)(3)(4));

// function add() {
//     var result = 0,
//     m;
//     !(m = function() {
//         var i, len;
//         len = arguments.length;
//         if (len > 0) {
//             i = len;
//             while (i) {
//                 result += arguments[i - 1];
//                 i--;
//             }
//             return m;
//         }
//     })();
//     m.apply(this, arguments);
//     m.toString = m.valueOf = function() {
//         return result;
//     }
//     return m;
// }
// 
// 
// 3

// var p = new Promise(function(resolve, reject) {
//     reject();
//     throw '2';
//     // resolve();
// }).catch(function(){

// });
// p.then(function() {
//     console.log('resolve');
// }, function() {
//     console.log('reject');
//     reject();
// }).then(function() {
//     console.log('resolve-two');
// }, function() {
//     console.log('reject-two');
// });

// p.then(function() {
//     console.log('p-resolve');
// }, function() {
//     console.log('p-reject');
//     // reject();
// }).then(function() {
//     console.log('p-resolve-two');
// }, function() {
//     console.log('p-reject-two');
// });
// 

// 对象声明
// 工厂模式
function factory(name) {
    var o = new Object();
    o.name = name;
    return o;
}


//构造函数模式
// 缺点：getName不是共享的，每次都在声明新空间，这是没有必要的
// function Person(name) {
//     this.name = name;
//     this.getName = function() {
//         console.log(this.name);
//     }
// }
// var zhangsan = new Person('ZHANGSAN');
// zhangsan.getName();
// var lisi = new Person('LISI');

//原型模式
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.getName = function() {
//     console.log(this.name);
// }

// var zhangsan = new Person('zhangsan');
// zhangsan.getName();


//寄生构造函数
//缺点：不能依赖instanceof 操作符来确定对象类型
// function Person(name, friends) {
//     var o = function() {};
//     o.name = name;
//     o.friends = friends;
//     o.getName = function() {
//         console.log(this.name);
//     }
//     o.getFriends = function() {
//         console.log(this.friends);
//     }
//     o.addFriends = function(name) {
//         this.friends.push(name);
//     }
//     return o;
// }

// function ArrayInstanceExtend(){
//     var o = [];
//     o.push.apply(o,arguments);
//     o.insertFirst = function(insertValue){
//         this.splice(0,0,insertValue);
//         return this.concat();
//     }
//     return o;
// }
// var x = new ArrayInstanceExtend('lisi');
// x.insertFirst('zhangsan');
// console.log(x.insertFirst('wangwu'));



// function Parent(name, friends) {
//     this.name = name;
//     this.friends = friends;
// }
// Parent.prototype = {
//     constructor: Parent,
//     addFriend: function(friendName) {
//         this.friends.push(friendName);
//     },
//     getFriends: function() {
//         return this.friends;
//     }
// }

// function Child(toy, name, friends) {
//     this.toy = toy;
//     Parent.call(this, name, friends);
// }

// Child.prototype = Parent.prototype;
// // Child.prototype = new Parent();

// Child.prototype.getToys = function() {
//     return this.toy;
// }
// Child.prototype.buyToy = function(toyName) {
//     this.toy.push(toyName);
// }

// var xiaohai = new Child(['car'], 'zhangsan', ['lisi', 'wangwu']);
// xiaohai.buyToy('air');
// xiaohai.addFriend('zhaoliu');


// Parent.prototype.updateName = function() {
//     this.name = 'devil';
// }
// xiaohai.updateName();
// // console.log(xiaohai.name);

// var tom = new Child(['ship'], 'tom', ['jerry', 'jake']);
// tom.buyToy('bike');
// tom.addFriend('obama');
// console.log(tom.name);

// var p = new Parent();
// console.log('p:' + p.getToys());

// console.info('xiaohai:' + xiaohai.getToys() + xiaohai.getFriends());

// console.info('tom:' + tom.getToys() + tom.getFriends());

// var friends = ['lisi', 'wangwu'];
// var work = [];
// work.push(friends);
// friends = ['xiaoqi'];
// work.push(friends);
// console.log(work);


// 如果通过内部机制进行对象复制

// var x = ['1'];
// var y = x;
// x.push('2');
// y[2] = '3';
// console.log(x);

// var zhangsan = new Person('zhangsan', ['lisi', 'wangwu']);
// var lisi = new Person('lisi', ['wangwu', 'zhangliu']);
// lisi.addFriends('xiaoqi');
// zhangsan.getFriends();


// function SpecialArray() {
//     //创建数组
//     var values = new Array();
//     //添加值
//     values.push.apply(values, arguments);
//     //添加方法
//     values.toPipedString = function() {
//         return values instanceof Array;
//         return this.join("|");
//     };
//     //返回数组
//     return values;
// }
// var colors = new SpecialArray("red", "blue", "green");
// console.log(colors.toPipedString());



//继承

// function Father(name, friends) {
//     this.name = name;
//     this.friends = friends;
// }
// Father.prototype = {
//     constructor: Father,
//     getName: function() {
//         console.log(this.name);
//     },
//     getFriends: function() {
//         console.log(this.friends);
//     },
//     addFriends: function(friendName) {
//         this.friends.push(friendName);
//     }
// }

// var realfather = new Father('zhangsan', ['lisi', 'wangwu']);


// function Child(happy, friends) {
//     this.happy = happy;
//     Father.call(this, 'x',friends);
// }
// Child.prototype = realfather;
// Child.prototype.constructor = Child;
// Child.prototype.toy = function() {
//     console.log(this.happy);
// }

// console.log(Child.prototype.constructor === Father);

// var realchild = new Child('happy', ['xiaohai1']);
// var otherchild = new Child('unhappy', ['xiaohai2']);

// realchild.getName();

// realchild.toy();
// realchild.addFriends('xiaohai3');
// realchild.getFriends();

// otherchild.getName();
// otherchild.getFriends();
// otherchild.toy();



// function X(name,friends){
//     this.name = name;
//     this.friends = friends;
// }
// X.prototype = {
//     // constructor:X,
//     getName:function(){
//         console.log(this.name);
//     },
//     getFriends:function(){
//         console.log(this.friends);
//     }
// }
// var x = new X('ZHANGSAN',['LISI','WANGWU']);
// x.getName();
// x.getFriends();



//clone对象共享方法
//构造函数，实例属性
//
// function Spreadsheet(name, friends) {
//     this.name = name;
//     this.friends = friends;
// }
// Spreadsheet.prototype = {
//     constructor: Spreadsheet,
//     getName: function() {
//         console.log(this.name);
//     },
//     getFriends: function() {
//         console.log(this.friends);
//     },
//     addFriends: function(friendName) {
//         this.friends.push(friendName);
//     }
// }

// function inherit(subType, superType) {
//     var tmp = clone(superType.prototype);
//     subType.prototype = tmp;
//     subType.prototype.constructor = subType;
// }

// function clone(o) {
//     function F() {}
//     F.prototype = o;
//     return new F();
// }

// function Y(name, friends) {
//     Spreadsheet.call(this, name, friends);
// }
// inherit(Y, Spreadsheet);

// var y = new Y('zhangsan', ['lisi', 'wangwu']);
// y.getName();
// y.getFriends();
// y.addFriends('xiaoqi');

// var yy = new Y('lisi',['wangwu','zhaoliu']);
// yy.getName();
// yy.getFriends();
// yy.addFriends('laoba');

// Spreadsheet.plus();

// Spreadsheet.prototype.extend = function(args) {
//     for (var i in args) {
//         console.log(i);
//     }
// }

// var s = new Spreadsheet();
// s.extend({
//     plus: function(a, b) {
//         console.log(a + b);
//     }
// });


//singleton pattern
// function U(){
//     if(typeof U.x === 'object'){
//         return U.x;
//     }
//     U.x = this;
//     U.x.args = arguments;
//     return U.x;
// }

// var m = new U('zs');
// var n = new U('ls');

// function D(){
//     var instance = this;
//     console.log(this);
//     instance.args = arguments;
//     D = function(){
//         return instance;
//     }
//     return instance;
// }
// var x ={
//     name:'x',
//     y:D
// }
// var z = {
//     name:'z',
//     s:D
// }

// var d = x.y();
// var e = z.s();
// console.info(d === e);

// var m = {

// }
// m.prototype = {
//     constructor:m,
//     name: 'zhangsan'
// }
// m.defineProperties()
// m.name = 'lisi';
// console.log(m.prototype.hasOwnProperty('name'));
// console.log(m.name)


// function Factory(name){
//     var x = {};
//     x.name = name;
//     return x;
// }
// var zs = Factory('ZHANGSAN');
// var ls =  Factory('LISI');
// console.log(zs == ls);


//simple mode
// function x() {
//     var y;
//     if (y) {
//         return y;
//     } else {
//         y = 1;
//         return y;
//     }
// }
// var a = x();
// var b = x();
// console.log(a);
// console.log(b);

// simaple factory mode
// var A = {
//     name:this.name
// }
// 
// function A(name) {
//     this.name = name;
// }
var A = function() {

}
A.prototype = 1;
// console.log(typeof A.prototype)

function ObjectFactory() {
    var obj = {},
        Constructor = Array.prototype.shift.call(arguments);
    obj.__proto__ = typeof Constructor.prototype === 'number' ? Object.prototype : Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
}
var a = ObjectFactory(A, 'zhangsan');
console.log(a.name);

//observer mode

function Person(name, news) {
    this.name = name;
}
Person.prototype = {
    constructor:Person,
    reading:function(news){
        console.log(this.name + 'reading paper information by' + news + 'contents');
    }
}
var zhangsan = new Person('zhangsan');
var lisi = new Person('lisi');

function NewpaperOffice(paperType, subscriber) {
    this.paperType = paperType || [];
    this.subscriber = subscriber || [];
}
NewpaperOffice.prototype = {
    constructor: NewpaperOffice,
    //发布报纸
    publish: function(type) {
        this.subscriber
    },
    //接受订阅
    subscribe: function(reader, type) {
        var userInfo = {
            reader: reader,
            type: type
        }
        this.subscriber.push(userInfo);
    },
    //取消订阅
    unsubscribe: function(reader, type) {
        var currentSubscriber = this.subscriber,
            var len = currentSubscriber.length,
                i = 0;
        for (; i < len; i++) {
            if (currentSubscriber[i].reader === reader && currentSubscriber[i].type === type) {
                currentSubscriber.splice(i, 1);
                break;
            }
        }
    },
    //根据报纸类型，获取对应的订阅人
    getSubscriberByType:function(){
        var subscriberList = this.subscriber;
    },
    //生产报纸
    makerPaper: function() {

    }
}
var NationsOffice = new NewpaperOffice(['time', 'USA today', 'people', 'youth daily']);

zhangsan.subscribe(['time','people']);
lisi.subscribe(['USA today','youth daily']);

NationsOffice.publish('time');