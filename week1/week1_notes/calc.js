// calc.js

// module.exports = function(num) {
//     console.log(num * num)
// };

function squaredFx(num) {
    return num * num;
};

// var is global or function scoped
// let and const are block scoped 

// hoisting, closure, scope

function squaredFx2(num) {
    let someVar = 'hello'
    someVar = 'some other thing'
    
    return someVar;
};

// console.log(someVar)

// module.exports = {
//     properties: 'value'
// }


module.exports = {
    squaredFx: squaredFx,
    squaredFx2: squaredFx2,
    whatever: 'string of whatever'
} /// has no () b/c every time in JS we pass around functions we don't use () only when we invoke functions do we


// module.exports = {
//     nameOfFunction: actualFunction
// }
