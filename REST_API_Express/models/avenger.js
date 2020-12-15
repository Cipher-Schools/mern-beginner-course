const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvengerSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    avengerName: { type: String },
    // status= true (alive) and false(dead)
    status: { 
        type: Boolean, 
        default: true
    }
})

const Avenger = mongoose.model('avenger', AvengerSchema);

module.exports = Avenger;