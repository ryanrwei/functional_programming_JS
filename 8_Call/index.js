function duckCount(inputs) {
    let res = inputs.filter( (items) => { return items.hasOwnProperty('quack') });
    return res.length;
};

module.exports = duckCount

// ?????????????????????????? 165151561591563


// obj= new Object();
// obj.name = '陌上寒';
// const a = obj.hasOwnProperty('name');
// console.log(a);//true

// const obj ={
// 	name:"陌上寒",
// 	sex:"male"
// }
// for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
// 		console.log(`${key}: ${obj[key]}`)
//     }
//     else {
//         console.log(key); 
//     }
// }

// var duck = {
//     quack: function() {
//     console.log('fuck')
//     }
// }
// duck.quack()
// console.log(duck.hasOwnProperty('quack'))

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.log = function () {
//     console.log(this.name + ', age:' + this.age);
// }

// var nick = new Person('nick', 18);

// console.log(nick.__proto__)
// console.log(nick.prototype)
// console.log(Person.prototype)
// console.log(Person.prototype.__proto__)

// var object = {quack: true}

// console.log(object.__proto__)
// Object.getPrototypeOf(object) === Object.prototype // => true
// object.hasOwnProperty('quack')  

// var object = Object.create(null)
// console.log(object)