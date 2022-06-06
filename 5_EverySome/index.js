function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every( (submittedUser) => {
            return goodUsers.some( (goodUser) => {
                return goodUser.id === submittedUser.id
            })
        })
    };
};

module.exports = checkUsersValid


// let goodUsers = [
//     { id: 1 },
//     { id: 2 },
//     { id: 3 }
// ]
// let testAllValid = [
//     { id: 1 },
//     { id: 2 }
// ]
// let testAllValid = [
//     { id: 1 },
//     { id: 2 },
//     { id: 3 },
//     { id: 4 }
// ]

// let res = testAllValid.every( function(testValid) {
//     return goodUsers.some( function(goodUser) {
//         return goodUser.id === testValid.id
//     })
// });

// let res = testAllValid.every( (testValid) => { 
//     return goodUsers.some( (goodUser) => {
//         return goodUser.id === testValid.id
//     })
// });

// console.log(res)
