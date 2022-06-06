function getShortMessages(messages) {
    let res = messages.filter( (value) => {   
            return value.message.length < 50 
                }).map( (value) => {
                    return value.message
                });
    return res;
}

module.exports = getShortMessages




// messages = [ 'Tempor quis esse consequat sunt ea eiusmod.',
// 'Id culpa ad proident ad nulla laborum incididunt.',
// 'Ullamco in ea et ad anim anim ullamco est.',
// 'Est ut irure irure nisi.' ]

// let res = messages.filter( (value) => {   
//     return value.length < 60 
//     });
// console.log(res);

// let res = messages.filter( (value) => {   
//     return value.length < 60 
//     }).map( (value) => {
//         return value;
//     });
// console.log(res);