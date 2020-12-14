const assert= require('assert')
const User = require('./../models/user')

describe('Updating records', () =>{
    let newUser;
    beforeEach((done)=>{
        newUser = new User({
            name: 'Jon Snow',
            age: 16
        })
        newUser.save().then( (data) => {
            console.log(data);
            done();
        })
    })

    it('it updates on record in the db', (done)=>{
        
        User.findOneAndUpdate({ name: 'Jon Snow'}, {name: 'Arya', age: 24}, {useFindAndModify: false}).then((data)=>{
            console.log(data);
            User.findById({ _id: newUser._id}).then( (result) => {
                console.log(result);
                assert( result.name === 'Arya')
                done();
            })
        })
    })
})

