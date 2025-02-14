import React, { Component } from 'react'
import axios from 'axios';
import StyleImage from "./StyleImage";
import Banner from "./Banner";
import { Link } from 'react-router-dom';
import {ProjectContext} from "../context";
import SiteFooter from "../Pages/SiteFooter";

export default class BookingDetails extends Component {

    static contextType = ProjectContext;

    getUniqueCode(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += (characters.charAt(Math.floor(Math.random() * charactersLength))).toUpperCase();
        }
        return result;
     }


    //declare the state
    constructor(props) {
        super(props);

        //bind the 'this' to this method
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeAddres = this.onChangeAddres.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangePostcode = this.onChangePostcode.bind(this);
        this.onChangeRequest = this.onChangeRequest.bind(this);
        this.onChangeArrival = this.onChangeArrival.bind(this);
        this.onChangeCoupon = this.onChangeCoupon.bind(this);
        this.onChangeCar = this.onChangeCar.bind(this);
        this.onChangeSeaview  = this.onChangeSeaview.bind(this);
        this.onChangeSatellite = this.onChangeSatellite.bind(this);
        this.onChangeLaundry = this.onChangeLaundry.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            country: "",
            checkinDate: "",
            checkoutDate: "",
            roomname: "",
            address: "",
            city: "",
            postcode: "",
            request: "",
            arrival: "I do not know",
            coupon: "",
            car: "off",
            seaview: "off",
            satellite: "off",
            laundry: "off", 
            referenceCode: this.getUniqueCode(6)
        }
    }

    //
    componentDidMount() {
        this.setState({
            referenceCode: this.getUniqueCode(6)
        })
        
    }


    //declare function 
    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        });
    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeCountry(e) {
        this.setState({
            country: e.target.value
        })
    }

    onChangeSmoking(e) {
        this.setState({
            smoking: e.target.value
        })
    }

    onChangePreference(e) {
        this.setState({
            preference: e.target.value
        })
    }

    onChangeAddres(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    onChangePostcode(e) {
        this.setState({
            postcode: e.target.value
        });
    }

    onChangeRequest(e) {
        this.setState({
            request: e.target.value
        });
    }

    onChangeArrival(e) {
        this.setState({
            arrival: e.target.value
        });
    }

    onChangeCoupon(e) {
        this.setState({
            coupon: e.target.value
        });
    }

    onChangeCar(e) {
        this.setState({
            car: e.target.value
        })
    }

    onChangeSeaview(e) {
        this.setState({
            seaview: e.target.value
        })
    }

    onChangeSatellite(e) {
        this.setState({
            satellite: e.target.value
        })
    }

    onChangeLaundry(e) {
        this.setState({
            laundry: e.target.value
        })
    }

    onChangeGetInDate(e) {
        this.setState({
            checkinDate: e.target.value
        })
    }

    onChangeName(name) {
        this.state.roomname = name;
    }

    onChangeCheckinDate(date) {
        this.state.checkinDate = date
    }

    onChangeCheckoutDate(date) {
        this.state.checkoutDate = date;
    }

    onSubmit() {
        
        const booking = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            country: this.state.country,
            checkinDate: this.state.checkinDate,
            checkoutDate: this.state.checkoutDate,
            roomname: this.state.roomname,
            address: this.state.address,
            city: this.state.city,
            postcode: this.state.postcode,
            request: this.state.request,
            arrival: this.state.arrival,
            coupon: this.state.coupon, 
            car: this.state.car,
            seaview: this.state.seaview,
            satelite: this.state.satellite,
            laundry: this.state.laundry,
            referenceCode: this.state.referenceCode
        }
    
        // console.log(booking);
        
    //     axios.post("http://localhost:5000/booking/add", booking)
    //   .then(response => console.log(response.data))
        
        return booking;
    }

    render() {

        let {checkinDate: inDate, 
            checkoutDate: outDate, 
            detailRooms: details, 
            getBookingDetails: testingBooking,
            onChangeDay: getOnChangeDay,
            onChangeMonth: getOnChangeMonth,
            onChangeTotalDays: getOnChangeTotalDays
        } = this.context;
        
        this.onChangeName(details.name);
        this.onChangeCheckinDate(inDate);
        this.onChangeCheckoutDate(outDate);
        
        //get details of checkin day
        const getInDay = inDate.getDate();
        const checkinDay = getOnChangeDay(getInDay);
        const getInMonth = inDate.getMonth() +1;
        const checkinMonth = getOnChangeMonth(getInMonth)
        const checkinYear = inDate.getFullYear();

        //get details of checkout day
        const getOutDay = outDate.getDate();
        const checkoutDay = getOnChangeDay(getOutDay)
        const getOutMonth = inDate.getMonth() +1;
        const checkoutMonth = getOnChangeMonth(getOutMonth)
        const checkoutYear = outDate.getFullYear();
        
        //getting the booking and then pass it back to context
        
        
        //getting total days of stay 
        const totalDays = getOnChangeTotalDays(inDate, outDate);
        // console.log(totalDays);

        //set the value for arrival
        const arrival = ["I do not know", "12:00 - 1:00 am", "1:00 - 2:00 am", "2:00 - 3:00 am", "3:00 - 4:00 am", "4:00 - 5:00 am", "5:00 - 6:00 am", "6:00 - 7:00 am", "7:00 - 8:00 am", "8:00 - 9:00 am", "9:00 - 10:00 am", "10:00 - 11:00 am", "11:00 - 12:00 am",
        "12:00 - 1:00 pm", "1:00 - 2:00 pm", "2:00 - 3:00 pm", "3:00 - 4:00 pm", "4:00 - 5:00 pm", "5:00 - 6:00 pm", "6:00 - 7:00 pm", "7:00 - 8:00 pm", "8:00 - 9:00 pm", "9:00 - 10:00 pm", "10:00 - 11:00 pm", "11:00 - 12:00 pm"];
        const testArrival = arrival.map(item => {
            return (
                <option value={item} >{item}</option>   
            )
        })
        
    
        return (
            <>
                <StyleImage>
                    <Banner title="Booking" subtitle={details.name}>
                        <Link to="/rooms" className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </StyleImage>

                <section className="container container-fluid" style={{marginTop:20, height: 1100}}>
                    <div className="row" style={{height: 1000}}>
                        <div className="col-md-4">
                            {/* {bookingDate} */}
                            <div className="container-fluid left-info">
                                <div className="left-image"> 
                                    <StyleImage img = {details.images[0]}>
                                    </StyleImage>
                                </div>
                                <div className="left-details col-md-12"> 
                                    <div className="form-group">
                                        <div className="form-group reserve-title">Your reservation</div>
                                        <div className="row checkdate">
                                            <div className="col-md-6">
                                                <p style={{color: "black"}}>Check-in</p> 
                                                <h6 className="date-text" onChange={this.onChangeGetInDate}>{checkinDay}</h6>
                                                <p className="month-text">{checkinMonth}, {checkinYear}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p style={{color: "black"}}>Check-out</p>
                                                <h6 className="date-text">{checkoutDay}</h6>
                                                <p className="month-text">{checkoutMonth}, {checkoutYear}</p>
                                            </div>
                                        </div>
                                        <div className="row checkdate" style={{marginTop:0, color:"black"}}>
                                            <div className="col-md-6"  >
                                                Guest
                                                <p className="month-text"> {(details.capacity <= 9) ? `0${details.capacity}` : `${details.capacity}`}</p>
                                            </div>
                                            <div className="col-md-6" >
                                                Nights
                                                <p className="month-text">{(totalDays <= 9) ? `0${totalDays}`: `${totalDays}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="book-title">
                                Add Extra Services :
                                <div className="row" style={{textTransform:"none", marginTop: 20, fontSize:15}}>
                                    <div className="col-md-6">
                                        {/* Car rental  */}
                                        <div>
                                            <input type="checkbox" name="car" id="car" className="checkbox"
                                                // checked={breakfast}
                                                onChange={this.onChangeCar}
                                            >
                                            </input>
                                            <label htmlhtmlfor="car">Car Rental: $30(Room/Night) = $30</label>
                                        </div>
                                        
                                        {/* satelite  */}
                                        <div> 
                                            <input type="checkbox" name="Satellite" id="Satellite" className="checkbox"
                                                // checked={breakfast}
                                                onChange={this.onChangeSatellite}
                                            >
                                            </input>
                                            <label htmlhtmlfor="satellite">Satellite TV: $50(Room/Night) = $50</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        {/* Sea View  */}
                                        <div>
                                            <input type="checkbox" name="seaview" id="seaview" className="checkbox"
                                                // checked={breakfast}
                                                onChange={this.onChangeSeaview}
                                            >
                                            </input>
                                            <label htmlhtmlfor="seaview">Sea View: $10(Room/Night) = $10</label>
                                        </div>
                                        
                                        {/* Laundry  */}
                                        <div>
                                            <input type="checkbox" name="laundry" id="laundry" className="checkbox"
                                                // checked={breakfast}
                                                onChange={this.onChangeLaundry}
                                            >
                                            </input>
                                            <label htmlhtmlfor="laundry">Laundry: $10(Room/Night) = $10</label>
                                        </div>        
                                    </div>
                                </div>
                            </div>
                            <div className="book-title">
                                Add Your Informations:
                                <form className="needs-validation" novalidate>
                                    <div className="form-row">
                                        {/* first name */}
                                        <div className="col-md-6">
                                            <label for="">First name</label>
                                            <input type="text" className="form-control" id="" 
                                               onChange={this.onChangeFirstname} required />
                                        </div>
                                        {/* last name  */}
                                        <div className="col-md-6 mb-3">
                                            <label for="">Last name</label>
                                            <input type="text" className="form-control" id=""  
                                                onChange={this.onChangeLastname} required />
                                        </div>
                                        {/* phone  */}
                                        <div className="col-md-6 mb-3">
                                            <label for="">Phone</label>
                                            <input type="text" className="form-control" id="" 
                                               onChange={this.onChangePhone} required />
                                        </div>
                                        {/* email  */}
                                        <div className="col-md-6 mb-3">
                                            <label for="validationCustomUsername">Email</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustomUsername" 
                                            aria-describedby="inputGroupPrepend" onChange={this.onChangeEmail} required />
                                            <div className="invalid-feedback">
                                            Please choose a username.
                                            </div>
                                        </div>
                                        </div>
                                        {/* address  */}
                                        <div className="col-md-6 mb-3">
                                            <label for="">Address</label>
                                            <input type="text" className="form-control" id="" 
                                               onChange={this.onChangeAddres} required />
                                        </div>

                                        {/* city  */}
                                        <div className="col-md-6 mb-3">
                                            <label for="">City</label>
                                            <input type="text" className="form-control" id="" 
                                               onChange={this.onChangeCity} required />
                                        </div>

                                        {/* country  */}
                                        <div className="col-md-6 mb-3">
                                            <label for="">Country</label>
                                            <input type="text" className="form-control" id="" 
                                               onChange={this.onChangeCountry} required />
                                        </div>

                                        {/* postcode  */}
                                        <div className="col-md-6 mb-3">
                                            <label for="">Postcode</label>
                                            <input type="text" className="form-control" id="" 
                                               onChange={this.onChangePostcode} required />
                                        </div>
                                    </div>
                                <div className="form-row">
                                    {/* request */}
                                    <div className="col-md-12 mb-3">
                                        <label for="">Request</label>
                                        <textarea type="text" className="form-control" id="" 
                                        rows="6" required onChange={this.onChangeRequest}></textarea>
                                    </div>
                                </div>
                                <div className="form-row">
                                    {/* arrival  */}
                                    <div className="col-md-6 mb-3">
                                        <label for="">Arrival</label>
                                        <select 
                                            name="arrival" 
                                            id="arrival"  
                                            className="form-control" 
                                            onChange={this.onChangeArrival}
                                            > 
                                            {testArrival}                
                                        </select>
                                    </div>
                                    {/* coupon  */}
                                    <div className="col-md-6 mb-3">
                                        <label for="">Coupon</label>
                                        <input type="text" className="form-control" id=""
                                           onChange={this.onChangeCoupon} required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label" for="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="form-group">
                                        <Link to ="/payment">
                                            <input value="Submit form" className="btn btn-primary btn-sm"  onClick={() => testingBooking(this.onSubmit())}/>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <SiteFooter /> */}
        </>
        )
    }
}