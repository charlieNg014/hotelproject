const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//connect to MongoDB
const url = 'mongodb://127.0.0.1:27017/test'
mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', _ => {
    console.log("Successful Connection", url);

    db.on('error', err => {
        console.error('Connection Error', err)
    })
})

//adding routes
const roomRouter = require('./routes/room');
app.use("/findroom", roomRouter);

const bookingdetailsRouter = require('./routes/bookingdetails');
app.use("/booking", bookingdetailsRouter);

const cardPayment = require("./routes/payment");
app.use("/payment/card", cardPayment);

const emailSignup = require('./routes/email');
app.use("/email", emailSignup);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})