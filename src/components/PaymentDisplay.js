import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProjectConsumer } from "../context";
import PaypalButton from "./PaypalButton";
import {useContext} from 'react';
import {ProjectContext} from '../context';
import {Link} from "react-router-dom";

toast.configure();

export default function PaymentDisplay({ paymentDisplay, bookingDisplay}) {
    // console.log(paymentDisplay);
    // console.log(bookingDisplay);

    const {firstname, lastname} = paymentDisplay;
    const {price, name} = bookingDisplay;
    const context = useContext(ProjectContext);

    //onchange to get all nights booked
    function onChangeTotalDays(startDate, finishDate) {
        const Difference_In_Time = finishDate.getTime() - startDate.getTime(); 
        const Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
        return Difference_In_Days;
    }

    const night = onChangeTotalDays(paymentDisplay.checkinDate, paymentDisplay.checkoutDate); 

    const [passingProduct] = React.useState({
        name: firstname + lastname,
        price: price*100*1.1,
        description: name,
        number: night
    });

    async function handleToken(token) {
    // console.log(token);
    // console.log(booking);
    
    const response = await axios.post(
      "http://localhost:5000/payment/card/checkout",
      {
        token,
        passingProduct
      }
    );

   

    const { status } = response.data;
    if (status === "success") {
      toast("Successful. Please check your email for the details!", {
        type: "Success",
        position: toast.POSITION.TOP_CENTER,
        className:'foo-bar'
      });

      axios.post("http://localhost:5000/booking/add", paymentDisplay)
      .then(response => console.log(response.data))

      //set delay for 6 seconds before redirect
      setTimeout(function () {
        window.location = "/"; 
     }, 6000); 

    } else {
      toast("Something went wrong", {
        type: "error",
        position: toast.POSITION.TOP_CENTER,
        className:"foo-bar"
      });

      //set delay for 6 seconds before redirect
      setTimeout(function () {
        window.location = "/"; 
     }, 8000); 
    }
  }

  return (
    <>
      <ProjectConsumer>
        {(value) => {
          const { detailRooms, finalBooking} = value;
        //   console.log(finalBooking);
        //   console.log(detailRooms);
          // console.log(testBooking);
    
          const night = onChangeTotalDays(finalBooking.checkinDate, finalBooking.checkoutDate);   

          return (
            <>
                <div className="row">
                <div className="col-md-6" style={{width: 150, marginBottom: 20, marginRight: 40}} > 
                      <StripeCheckout
                          stripeKey="pk_test_ivwpgGyuTBJ0DLTExykuQwmN00p6kAAxKf"
                          token={handleToken}
                          billingAddress
                          shippingAddress
                          name="Payment"
                          amount={detailRooms.price * night * 1.1 * 100}
                          style={{width: 150}}
                      />
                </div>
                    <div className="col-md-6">
                        <PaypalButton /> 
                    </div>
                </div>
            </>
          );
        }}
      </ProjectConsumer>
    </>
  );
}