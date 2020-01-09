import React, { Component } from 'react'
import axios from 'axios';
import StyleImage from "./StyleImage";
import Banner from "./Banner";
import { Link } from 'react-router-dom';
import {ProjectContext} from "../context";
import BookingDate from "./BookingDate";
import ProjectDisplay from './ProjectDisplay';

export default class BookingDetails extends Component {

    static contextType = ProjectContext;

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
            arrival: "",
            coupon: "",
            car: "off",
            seaview: "off",
            satellite: "off",
            laundry: "off"
        }
    }

    //
    componentDidMount() {
        //getting all users and then display
        axios.get("http://localhost:5000/findroom/2")
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    checkinDate: response.data[0].checkin,
                    checkoutDate: response.data[0].checkout,
                    roomname: response.data[0].roomName
                })
            }
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

    onSubmit(e) {
        e.preventDefault();

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
            list: this.state.list
            
        }
        
        console.log(booking);
        
        axios.post("http://localhost:5000/booking/add", booking)
            .then(response => console.log(response.data))

        // this.setState({
        //     duration: 0,
        //     description: " "
        // })
        // window.location = "/";
    }

    render() {

        let {test: bookingDate} = this.context;
        bookingDate = bookingDate.map(item => {
            return(
               console.log(item)
            )
        })
        

        return (
            <div>
            <div>
                <StyleImage>
                    <Banner title="Booking" subtitle="Finish your booking">
                        <Link to="/rooms" className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </StyleImage>
            </div>
            <div>
                <div className="container container-fluid" style={{marginTop:20, height: 1100}}>
                    <div className="row" style={{height: 1000}}>
                        <div className="col-md-4">
                            <BookingDate />
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
                                Add Your Informations :
                             
                                <div className="row" style={{textTransform:"none", marginTop: 20, fontSize:15}}>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlfor="exampleInputEmail1">First Name*</label>
                                            <input type="text" className="form-control" onChange={this.onChangeFirstname}/>
                                        </div>
                                        
                                        

                                        <div className="form-group">
                                            <label htmlfor="exampleInputEmail1">Email*</label>
                                            <input type="text" className="form-control" onChange={this.onChangeEmail}/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlfor="exampleInputEmail1">Address*</label>
                                            <input type="text" className="form-control" onChange={this.onChangeAddres}/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlfor="exampleInputEmail1">Country*</label>
                                            <input type="text" className="form-control" onChange={this.onChangeCountry}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlfor="exampleInputEmail1">Last Name*</label>
                                            <input type="text" className="form-control" onChange={this.onChangeLastname}/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlfor="exampleInputEmail1">Telephone*</label>
                                            <input type="text" className="form-control" onChange={this.onChangePhone}/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlfor="exampleInputEmail1">City*</label>
                                            <input type="text" className="form-control" onChange={this.onChangeCity}/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlfor="exampleInputEmail1">Postcode*</label>
                                            <input type="text" className="form-control" onChange={this.onChangePostcode}/>
                                        </div>
                                    </div>
                                </div>
                        

                                <div style={{textTransform:"none", fontSize:15}}>
                                    <div className="form-group">
                                        <label htmlfor="exampleInputEmail1">Request</label>
                                        <textarea class="form-control" rows="5" onChange={this.onChangeRequest}></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlfor="exampleInputEmail1">Arrival</label>
                                        <input type="text" className="form-control" placeholder="I do not know" onChange={this.onChangeArrival}/>    
                                    </div>

                                    <div className="form-group">
                                        <label htmlfor="exampleInputEmail1">Coupon</label>
                                        <input type="text" className="form-control" onChange={this.onChangeCoupon}/>
                                    </div>

                                    <div>
                                        <input type="checkbox" name="terms" id="terms" className="checkbox"
                                            // checked={breakfast}
                                            // onChange={handleChange}
                                        >
                                        </input>
                                        <label htmlhtmlfor="terms">Terms and conditions</label>
                                    </div>
                                </div>
                                <input type="submit" class="btn btn-primary" data-toggle="button" style={{textTransform:"uppercase"}} onClick={this.onSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
