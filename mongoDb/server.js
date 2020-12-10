const mongoose = require('mongoose');

const URL = 'mongodb+srv://new-user-123:new-user-123@testcluster.vyftd.mongodb.net/testing?retryWrites=true&w=majority';
mongoose.connect(URL);

// Event driven node.js
// Asynchronous
mongoose.connection.once('open', () => {
    console.log('Connection to the Database successful');
}).on('error', (error) => {
    console.log('Unable to connect', error)
});