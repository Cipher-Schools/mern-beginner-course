const mongoose = require('mongoose');


const URL = 'mongodb+srv://new-user-123:new-user-123@testcluster.vyftd.mongodb.net/test?retryWrites=true&w=majority';


before((done) => {
    mongoose.connect(URL);
    // Event driven node.js
    // Asynchronous
    mongoose.connection.once('open', () => {
        console.log('Connection to the Database successful');
        done();
    }).on('error', (error) => {
        console.log('Unable to connect', error)
    });
})

// Drop my collections before each test
beforeEach( (done) => {
    mongoose.connection.collections.people.drop(()=> {
        done();
    });
})