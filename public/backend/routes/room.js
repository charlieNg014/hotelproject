const router = require('express').Router();
const Room = require('../models/room.model');

//handling the unversal get request
router.get("/", function(req, res) {
    Room.find()
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err))
})

//post request
router.post("/add", function(req, res) {
    const capacity = Number(req.body.capacity);
    const roomName = req.body.roomName;
    const checkin = Date.parse(req.body.checkin);
    const checkout = Date.parse(req.body.checkout);

    const newRoom = new Room({
        capacity,
        roomName,
        checkin,
        checkout
    })

    newRoom.save()
    .then(() => res.json("New Room Added"))
    .catch(err => res.status(400).json("Error: " + err))
})

//hanlding finding the room with the specific time and capacity 
router.get("/:capacity", function(req, res) {
    Room.find({ capacity: req.params.capacity })
    .then(room => res.json(room))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;