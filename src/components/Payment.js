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
import PaymentDisplay from "./PaymentDisplay";

toast.configure();

export default function Payment({ context }) {

  // const [testingProduct] = React.useState({
  //   name: "charlie",
  //   price: 300,
  //   description: "testing",
  //   number: 3
  // });

  // async function handleToken(token) {
  //   // console.log(token);
  //   // console.log(booking);
    
  //   const response = await axios.post(
  //     "http://localhost:5000/payment/card/checkout",
  //     {
  //       token,
  //       testingProduct
  //     }
  //   );

   

  //   const { status } = response.data;
  //   if (status === "success") {
  //     toast("Successful. Please check your email for the details!", {
  //       type: "Success",
  //       className:'foo-bar'
  //     });

  //     // axios.post("http://localhost:5000/booking/add", booking)
  //     // .then(response => console.log(response.data))

  //     //set the screen to confirmation page
  //     window.location = "/";

  //   } else {
  //     toast("Something went wrong", {
  //       type: "error",
  //       className:"foo-bar"
  //     });
  //   }
  // }

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
          const { detailRooms, finalBooking} = value;
          console.log(finalBooking);
          console.log(detailRooms);
          // console.log(testBooking);
    
          const night = onChangeTotalDays(finalBooking.checkinDate, finalBooking.checkoutDate);   

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
                  style={{ marginTop: 20, height: 1230 }}
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
                            {finalBooking.firstname}
                          </li>
                          <li>
                            <label style={{ marginRight: 62 }} for="fej">
                              Last Name
                            </label>
                            {finalBooking.lastname}
                          </li>
                          <li>
                            <label style={{ marginRight: 95 }} for="fej">
                              Phone
                            </label>
                            {finalBooking.phone}
                          </li>
                          <li>
                            <label style={{ marginRight: 98 }} for="fej">
                              Email
                            </label>
                            {finalBooking.email}
                          </li>
                          <li>
                            <label style={{ marginRight: 80 }} for="fej">
                              Address
                            </label>
                            {finalBooking.address}
                          </li>
                          <li>
                            <label style={{ marginRight: 110 }} for="fej">
                              City
                            </label>
                            {finalBooking.city}
                          </li>
                          <li>
                            <label style={{ marginRight: 80 }} for="fej">
                              Country
                            </label>
                            {finalBooking.country}
                          </li>
                          <li>
                            <label style={{ marginRight: 73 }} for="fej">
                              Postcode
                            </label>
                            {finalBooking.postcode}
                          </li>
                          <li>
                            <label style={{ marginRight: 79 }} for="fej">
                              Request
                            </label>
                            {finalBooking.request}
                          </li>
                          <li>
                            <label style={{ marginRight: 91 }} for="fej">
                              Arrival
                            </label>
                            {finalBooking.arrival}
                          </li>
                          <li>
                            <label style={{ marginRight: 83 }} for="fej">
                              Coupon
                            </label>
                            {finalBooking.coupon}
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
                            <label style={{ marginRight: 124 }} for="fej">
                              Room
                            </label>
                            {finalBooking.roomname}
                          </li>
                          <li>
                            <label style={{ marginRight: 57 }} for="fej">
                              Price per night
                            </label>
                            ${detailRooms.price}
                          </li>
                          <li>
                            <label style={{ marginRight: 91 }} for="fej">
                              Check - in
                            </label>
                            {getProperDate(finalBooking.checkinDate)}
                          </li>
                          <li>
                            <label style={{ marginRight: 81 }} for="fej">
                              Check - out
                            </label>
                            {getProperDate(finalBooking.checkoutDate)}
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
                            <label style={{ marginRight: 79 }} for="fej">
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
                            <div className="col-md-6" style={{marginRight: 25, marginLeft: 44, marginTop: 20}}> 
                              <PaymentDisplay paymentDisplay = {finalBooking} bookingDisplay = {detailRooms}/>
                            </div>
                              <div className="col-md-6" style={{marginTop: 20, marginLeft: 45}}>
                                  <Link to ="/confirmation">
                                    <input value="Submit form" className="btn btn-primary btn-sm" type="submit" />
                                  </Link>
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