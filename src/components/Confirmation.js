import React from "react";
import Banner from "./Banner";
import StyleImage from "./StyleImage";
import {ProjectConsumer} from '../context';

// import { useContext } from "react";
// import { ProjectContext } from "../context";

export default function Confirmation({ paymentDetails }) {
  //get the month properly
  function getMonth(month) {
    const mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    return mlist[month];
  }

  //get proper check-in-out date
  function getProperDate(date) {
    const day = date.getDate();
    const inputMonth = getMonth(date);
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
          const {finalBooking, detailRooms} = value;
          console.log(finalBooking);
          console.log(detailRooms);
   
          const night = onChangeTotalDays(finalBooking.checkinDate, finalBooking.checkoutDate); 
          return (
            <div style={{height: 800}}>
            <StyleImage>
              <Banner
                title="Thank you, your booking is completed"
                subtitle={`Confirmation code: ` + finalBooking.referenceCode} 
              ></Banner>
            </StyleImage>

            <div className="container container-fluid summary-box" style={{height: 800}}>
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
                            {finalBooking.firstname}
                          </li>
                          <li>
                            <label style={{ marginRight: 62 }} for="fej">
                              Last Name
                            </label>
                            {finalBooking.lastname}
                          </li>
                          <li>
                            <label style={{ marginRight: 90 }} for="fej">
                              Phone
                            </label>
                            {finalBooking.phone}
                          </li>
                          <li>
                            <label style={{ marginRight: 79 }} for="fej">
                              Address
                            </label>
                            {finalBooking.address}
                          </li>
                        </ul>
                
                          {/* Payment info  */}
                        <h4 class="scheme-g">Payment</h4>
                        <ul className="list-c">
                            <p>You have successful paid AUD ${Math.ceil(detailRooms.price*night*1.1)}.</p>
                        </ul>

                        {/* Special request info  */}
                        <h4 class="scheme-g">Special request</h4>
                        <ul className="list-c">
                            <p>{finalBooking.request}</p>
                        </ul>

                        <p class="scheme-h">
                          Grand Total :{" "}
                          <span style={{ color: "blue", fontSize: 30 }}>
                            <span> $</span>{Math.ceil(detailRooms.price*night*1.1)} 
                          </span>
                        </p>
                       
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
                            {finalBooking.roomname}
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
                            {(detailRooms.capacity <= 1) ?  `0${detailRooms.capacity} person` : `0${detailRooms.capacity} people  ` }
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProjectConsumer>
    </>
  );
}