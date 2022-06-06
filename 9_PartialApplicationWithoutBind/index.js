var slice = Array.prototype.slice

function logger(namespace) {
    function func(oldWord) {
        let newWord = 'new' + oldWord.slice(0, 1);;
        console.log(newWord);
    }

    function funcApply(words){
        return func.apply(this,[words]);
    }

    for (let i = 0; i<namespace.length; i++){
        funcApply(namespace[i]);
    }
}

module.exports = logger


// ?????????????????????????? 165151561591563


// var name = 'asd';
// var obj = {name: 'lq'}
// function func_dad(name) {
//     console.log(name);
// }
// function func_kid(inputs){
//     return func_dad.apply(this, [obj['name']])
// }
// func_kid();
// func_dad.apply(null,[name])
// func_dad.apply(obj,[name])
// func_dad.apply(obj,[obj['name']])
// func_dad.apply(null,[obj['name']])








// console.log(console)


// function animal(name,food) {
//     this.name = name,
//     this.food = food,
//     this.say = function() {
//         console.log(this.name +" likes " + this.food + '.');
//     }
// }
// function rabbit(name,food) {
//     // animal.call(this,name,food);
//     animal.apply(this,[name,food]); //這個this在rabbit函數里指的是未來將要實例化這個函數的對象，當聲明了Judy的時候，這個this指的就是Judy。
// }
// var Judy = new rabbit('Judy','carrot');
// Judy.say();// >>> Judy likes carrot.


// function wtf(argv0, argv1) {
//     console.log(argv0, argv1);
// }

// function apply_wtf() {
//     return wtf.apply(this, arguments);
// }
// apply_wtf(1, 2); // 1 2
// // ES6+
// function call_wtf() {
//     return wtf.call(this, ...arguments);
// }
// call_wtf(3, 4); // 3 4