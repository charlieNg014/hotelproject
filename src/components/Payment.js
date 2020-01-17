import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Banner from "./Banner";
import StyleImage from "./StyleImage";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProjectConsumer } from "../context";
import PaypalButton from "./PaypalButton";

toast.configure();

export default function Payment({ context }) {

  const [testingProduct] = React.useState({
    name: "charlie",
    price: 300,
    description: "testing",
    number: 3
  });

  async function handleToken(token) {
    // console.log(token);
    const response = await axios.post(
      "http://localhost:5000/payment/card/checkout",
      {
        token,
        testingProduct
      }
    );

    const { status } = response.data;
    if (status === "success") {
      toast("Successful. Please check your email for the details!", {
        type: "Success"
      });

      //set the screen to confirmation page
      window.location = "/confirmation";
    } else {
      toast("Something went wrong", {
        type: "error"
      });
    }
  }

  //get the month properly
  function getMonth(month) {
    const mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    return mlist[month];
}

  //get proper check-in-out date
  function getProperDate(date) {
    const day = date.getDate();
    const inputMonth = date.getMonth();
    const month = getMonth(inputMonth);
    const year = date.getFullYear();
    const properDate = day + " - " + month + " - " + year;

    return properDate;
  };

  function onChangeTotalDays(startDate, finishDate) {
    const Difference_In_Time = finishDate.getTime() - startDate.getTime(); 
    const Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    return Difference_In_Days;
  }

  return (
    <>
      <ProjectConsumer>
        {(value) => {
          const { detailRooms, finalBooking, testBooking } = value;
          console.log(testBooking);
          console.log(finalBooking);
          
          
          const night = onChangeTotalDays(finalBooking[0].checkinDate, finalBooking[0].checkoutDate);   

          return (
            <>
              <StyleImage>
                <Banner title="Booking Summary" subtitle="One last step ... ">
                  <Link to="/" className="btn-primary">
                    Back to homepage
                  </Link>
                </Banner>
              </StyleImage>
              <div className="container container-fluid summary-box">
                <div
                  className="container container-fluid"
                  style={{ marginTop: 20, height: 1100 }}
                >
                  <div className="row" style={{ height: 1000 }}>
                    <div className="col-md-6">
                      <div className="container-fluid">
                        <p className="booking-title"> Booking Summary: </p>
                        {/* Booking info  */}
                        <h4 class="scheme-g"> Traveller Infomation </h4>
                        <ul className="list-c">
                          <li>
                            <label style={{ marginRight: 60 }} for="fej">
                              First Name
                            </label>
                            {finalBooking[0].firstname}
                          </li>
                          <li>
                            <label style={{ marginRight: 62 }} for="fej">
                              Last Name
                            </label>
                            {finalBooking[0].lastname}
                          </li>
                          <li>
                            <label style={{ marginRight: 90 }} for="fej">
                              Phone
                            </label>
                            {finalBooking[0].phone}
                          </li>
                          <li>
                            <label style={{ marginRight: 96 }} for="fej">
                              Email
                            </label>
                            {finalBooking[0].email}
                          </li>
                          <li>
                            <label style={{ marginRight: 79 }} for="fej">
                              Address
                            </label>
                            {finalBooking[0].address}
                          </li>
                          <li>
                            <label style={{ marginRight: 107 }} for="fej">
                              City
                            </label>
                            {finalBooking[0].city}
                          </li>
                          <li>
                            <label style={{ marginRight: 78 }} for="fej">
                              Country
                            </label>
                            {finalBooking[0].country}
                          </li>
                          <li>
                            <label style={{ marginRight: 71 }} for="fej">
                              Postcode
                            </label>
                            {finalBooking[0].postcode}
                          </li>
                          <li>
                            <label style={{ marginRight: 78 }} for="fej">
                              Request
                            </label>
                            {finalBooking[0].request}
                          </li>
                          <li>
                            <label style={{ marginRight: 90 }} for="fej">
                              Arrival
                            </label>
                            {finalBooking[0].arrival}
                          </li>
                          <li>
                            <label style={{ marginRight: 79 }} for="fej">
                              Coupon
                            </label>
                            {finalBooking[0].coupon}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/* {hotel summary} */}
                      <div className="container-fluid">
                        <p className="booking-title"> Hotel Summary: </p>
                        <h4 class="scheme-g"> Summary </h4>
                        <ul className="list-c">
                          <li>
                            <label style={{ marginRight: 120 }} for="fej">
                              Room
                            </label>
                            {finalBooking[0].roomname}
                          </li>
                          <li>
                            <label style={{ marginRight: 62 }} for="fej">
                              Price per night
                            </label>
                            ${detailRooms.price}
                          </li>
                          <li>
                            <label style={{ marginRight: 91 }} for="fej">
                              Check - in
                            </label>
                            {getProperDate(finalBooking[0].checkinDate)}
                          </li>
                          <li>
                            <label style={{ marginRight: 81 }} for="fej">
                              Check - out
                            </label>
                            {getProperDate(finalBooking[0].checkoutDate)}
                          </li>
                        </ul>
                        <h4 class="scheme-g"> Charges </h4>
                        <ul className="list-c">
                          <li>
                            <label style={{ marginRight: 125 }} for="fej">
                              Time
                            </label>
                            {(night <= 1) ? `0${night} night` : `${(night >1 && night <=9) ? `0${night} nights` : `${night} nights`}`}
                          </li>
                          <li>
                            <label style={{ marginRight: 119 }} for="fej">
                              Guest
                            </label>
                            {(detailRooms.capacity <= 1) ?  `0${detailRooms.capacity} person` : `${detailRooms.capacity} people  ` }
                          </li>
                          <li>
                            <label style={{ marginRight: 130 }} for="fej">
                              GST
                            </label>
                            10 %
                          </li>
                          <li>
                            <label style={{ marginRight: 128 }} for="fej">
                              Fees
                            </label>
                            ${detailRooms.price * 0.1}
                          </li>
                          <li>
                            <label style={{ marginRight: 85 }} for="fej">
                              Grant Total
                            </label>
                            ${Math.ceil(detailRooms.price*night*1.1)} 
                          </li>
                        </ul>
                        <h4 class="scheme-g"> Accept and confirm </h4>
                        <p class="check-a">
                          <label for="feo">
                            <input type="checkbox" id="feo" name="feo" /> I
                            agree to the booking conditions.{" "}
                            <div class="fit-a"> </div>
                          </label>
                        </p>
                        <p class="scheme-h">
                          Grand Total:
                          <span style={{ color: "blue", fontSize: 30 }}>
                            <span> $</span>{Math.ceil(detailRooms.price * night * 1.1)}
                          </span>
                        </p>
                        <p class="link-c">
                          <div className="row">
                            <div className="col-md-6" style={{marginRight: -60, marginLeft: 46}}> 
                              <StripeCheckout
                                  stripeKey="pk_test_ivwpgGyuTBJ0DLTExykuQwmN00p6kAAxKf"
                                  token={handleToken}
                                  billingAddress
                                  shippingAddress
                                  name="Payment"
                                  amount={detailRooms.price * night * 1.1 * 100}
                              />
                            </div>
                              <div className="col-md-6" style={{marginTop: 10}}>
                                  <PaypalButton />
                              </div>
                          </div>
                      
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </ProjectConsumer>
    </>
  );
}