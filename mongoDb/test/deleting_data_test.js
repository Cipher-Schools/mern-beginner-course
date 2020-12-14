const assert = require('assert');
const User = require('./../models/user');

describe('deleting records', () => {
    let newUser;
    beforeEach((done) => {
        newUser = new User({
            name: 'Jake',
            age: 30
        })
        newUser.save().then(() => {
            done();
        })
    })
    it('it deletes one record from the db', (done) => {
        User.findByIdAndDelete({ _id: newUser._id}).then(() => {
            User.findById({ _id : newUser._id}).then((data) =>{
                assert(data === null)
                done();
            })
        })
    })
})