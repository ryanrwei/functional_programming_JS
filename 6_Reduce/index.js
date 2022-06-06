function countWords(inputWords) {
    accumulator = {};
    let res = inputWords.reduce( (accumulator, currentValue) => {
        if (accumulator[currentValue]) {
            accumulator[currentValue] = accumulator[currentValue] +1;
        }
        else {
            accumulator[currentValue] = 1;
        }
        return accumulator
    }, accumulator)
    return res
};

module.exports = countWords


// https://w3c.hexschool.com/blog/a2cb755f

// const arr = ['a', 'a', 'b', 'c', 'c', 'c', 'e'];
// const obj = {};
// const obj2 = {'a':0, 'b':0};
// arr.forEach(function(char) {
//     if(obj[char]) { 
//         obj[char] ++; 
//     } else {
//         obj[char] = 1;
//     }
// })
// // console.log(obj) // { a: 2, b: 1, c: 3, e: 1 }

// const initialValue = {};
// const reduceArr = arr.reduce((accumulator, currentValue) => {
//     // console.log(currentValue)
//     if(accumulator[currentValue]) {
//         accumulator[currentValue] ++;
//     } else {
//     accumulator[currentValue] = 1;
//     }
//     return accumulator;
// }, initialValue);
// console.log(reduceArr); // { a: 2, b: 1, c: 3, e: 1 }