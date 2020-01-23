const router = require('express').Router();
const BookingDetails = require("../models/bookingdetails.model");

function getUniqueCode(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += (characters.charAt(Math.floor(Math.random() * charactersLength))).toUpperCase();
    }
    return result;
 }
 
 //testing 
//  console.log(getUniqueCode(6));

//get method
router.get("/", function(req, res) {
    BookingDetails.find()
    .then(bookingdetails => res.json(bookingdetails))
    .catch(err => res.status(400).json("Error: " + err))
})

//post method to get detaisl of booking
router.post("/add", function(req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const country = req.body.country;
    const checkinDate = Date.parse(req.body.checkinDate);
    const checkoutDate = Date.parse(req.body.checkoutDate);
    const roomname = req.body.roomname;
    const address = req.body.address;
    const city = req.body.city;
    const postcode = req.body.postcode;
    const arrival = req.body.arrival;
    const request = req.body.request;
    const coupon = req.body.coupon;
    const car = req.body.car;
    const seaview = req.body.seaview;
    const satellite = req.body.satellite;
    const laundry = req.body.laundry;
    const referenceCode = req.body.referenceCode;

    const newBooking = new BookingDetails({
        firstname, 
        lastname,
        email,
        phone,
        country,
        checkinDate,
        checkoutDate,
        roomname,
        address, 
        city,
        postcode,
        request,
        arrival, 
        coupon,
        car,
        seaview,
        satellite,
        laundry,
        referenceCode
    })

    newBooking.save()
    .then(() => res.json("New booking added"))
    .catch(err => res.status(400).json("Error: " + err))
})

//getting date for specific room slug
router.get("/:roomname", function(req, res) {
    BookingDetails.find({roomname: req.params.roomname})
    .then (bookingwithname => res.json(bookingwithname))
    .catch(err => res.status(400).json("Error: " + err))
})


module.exports = router;