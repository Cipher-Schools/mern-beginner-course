const assert = require('assert');
const User = require('./../models/user');


describe('reading records', () => {
    let newUser;
    beforeEach((done) => {
        newUser = new User({
            name: 'Jake'
        })
        newUser.save().then( () => {
            done();
        });
    })

    it('it finds one record from the db', (done) => {
        User.findOne({ name: 'Jake'}).then( (data) => {
            console.log(data);
            assert( data.name === 'Jake')
            done();
        })
    })

    // FindById
    it('it finds one record by Id', () => {
        User.findOne({ _id: newUser._id}).then((data) => {
            assert( data._id === newUser._id)
            done();
        })
    })
})