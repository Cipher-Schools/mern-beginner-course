const assert = require('assert');
const Users = require('./../models/user');

describe('saving records', () => {
    it('it saves a record to db', (done) => {
        let newUser = new Users({
            name: 'John',
            age: 24
        })
        // promises (resolve, reject) => Promise.then( () => { }).catch( () => { })
        newUser.save().then( () => {
            assert(newUser.isNew === false)
            done();
        })
    })
})