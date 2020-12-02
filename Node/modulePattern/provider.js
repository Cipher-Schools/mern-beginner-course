
var counter = (arr) => {
    return "This array has" + arr.length + " items";
}

// es6 features
let addition = (a, b) => `The sum is ${a + b}`;

const constant = 9.76543;

// module.exports.counter = counter;
// module.exports.addition = addition;
// module.exports.constant = constant;

module.exports = {
    // es6
    counter,
    addition,
    constant: constant
}