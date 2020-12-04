let fs = require('fs');

let readFile = fs.readFile('readMet.txt', 'utf-8', (err, data) => {
    console.log(err);
    console.log(data);
});

console.log('Asynchronous read');