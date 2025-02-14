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
import DateDisplay from "./DateDisplay";
import SiteFooter from "../Pages/SiteFooter";

toast.configure();

export default function Payment({ context }) {

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
            <section>
              <StyleImage>
                <Banner title="Booking Summary" subtitle="One last step ... ">
                  <Link to="/" className="btn-primary">
                    Back to homepage
                  </Link>
                </Banner>
              </StyleImage>
            <div className="payment">
              <div className="container container-fluid summary-box">
                <div className="container container-fluid">
                  <div className="row">
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
                            <label style={{ marginRight: 77 }} for="fej">
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
                        {/* <p class="link-c">
                        </p> */}
                        <div className="row" >
                            <div className="col-md-6" style={{marginRight: 25, marginLeft: 44, marginTop: 20}}> 
                            {/* <Link to ="/confirmation"> */}
                                <PaymentDisplay paymentDisplay = {finalBooking} bookingDisplay = {detailRooms}/>
                            {/* </Link> */}
                            </div>  
                        </div>
                        {/* <Link to ="/confirmation">
                            <input value="Submit form" className="btn btn-primary btn-sm" />
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            </section>
             {/* <SiteFooter /> */}
            </>
          );
        }}
      </ProjectConsumer>
    </>
  );
}