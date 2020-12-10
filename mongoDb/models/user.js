const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    age: Number
})

const Users = mongoose.model('person', UserSchema);

module.exports = Users;
