var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function() {
    return this.firstName + ' ' + this.lastName;
    },
};

var john = {
    firstName: 'John',
    lastName: 'Doe',
};

john.__proto__ = person;

// console.log(john.getFullName())        //    John Doe;


function Player() {
    firstName = 'Default',
    lastName = 'Default',
    getFullName = function() {
        return this.firstName + ' ' + this.lastName;
        }
}

console.log(Player)
console.log(Player.prototype)
console.log(Player.prototype.constructor)
console.log(Player.prototype.constructor === Player) //true