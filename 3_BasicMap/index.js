// function doubleAll(numbers) {
//     let result = numbers.map(function (value) {
//         return value*2;
//     });
//     return result;
// }

function doubleAll(numbers) {
    let result = numbers.map( (value) => {return value*2;} );
    return result;
}

module.exports = doubleAll

