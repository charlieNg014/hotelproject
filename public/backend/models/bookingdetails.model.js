const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingdetailsSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    country: {type: String, required: true},
    checkinDate: {type: Date,required: true},
    checkoutDate: {type: Date, required: true},
    roomname: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    postcode: {type: String, required: true},
    request: {type: String},
    arrival: {type: String},
    coupon: {type: String},
    car: {type: String},
    seaview: {type: String},
    satellite: {type: String},
    laundry: {type: String}
})

const BookingDetails = mongoose.model("BookingDetails", bookingdetailsSchema);
module.exports = BookingDetails;