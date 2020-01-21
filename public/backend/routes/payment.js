const router = require("express").Router();
const stripe = require("stripe")("sk_test_OEbboioqUFefjjsiCH6skYbf00WDKuXoob");
const uuid = require("uuid/v4");

//import model here

router.get("/", function(req, res) {
    // Payment.find()
    //     .then((payment) => res.json(payment))
    //     .catch((err) => res.status(400).json("Error : " + er));
    res.send("Successful get method");
});

router.post("/checkout", async function(req, res) {
    console.log("Request: ", req.body);
    let error;
    let status;
    try {
        const { passingProduct, token } = req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });
        const idempotency_key = uuid();
        const charge = await stripe.charges.create({
            amount: passingProduct.price * passingProduct.number,
            currency: "AUD",
            customer: customer.id,
            receipt_email: token.email,
            description: passingProduct.description,
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }
            }
        }, {
            idempotency_key
        });
        console.log("Charge: ", { charge });
        status = "success";
    } catch (error) {
        console.error("Error: ", error);
        status = "failure";
    }
    res.json({ error, status });
});

module.exports = router;