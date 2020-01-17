const router = require('express').Router();
const Email = require('../models/email.model');

//handling the unversal get request
router.get("/", function(req, res) {
    Email.find()
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err))
})

//post request
router.post("/add", function(req, res) {
    const email = req.body.email;

    const newEmail = new Email({
        email
    })

    newEmail.save()
    .then(() => res.json("New Email Added"))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;