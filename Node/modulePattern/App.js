
var stuffs = require('./provider');

// console.log(stuffs);

let arr = [1,2,3,4,5,6,7,8,9,0]

console.log(stuffs.counter(arr));

console.log(stuffs.addition(arr[7], arr[4]));

console.log(stuffs.addition(stuffs.constant, arr[4]));