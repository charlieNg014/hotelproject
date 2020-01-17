const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema =  new Schema({
    capacity: {type: Number, required: true}, 
    roomName: {type: String},
    checkin: {type: Date, required: true},
    checkout: {type: Date, required: true}
}, {
    timestamps: true
})

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;


