const express = require('express');



const server = express();

server.get('/', (req, res) => {
    console.log('A request was made for this endpoint');
    res.send({ msg: 'Hi'})
})

server.listen( process.env.port || 3001, () => {
    console.log('Listening to port number 3001');
})