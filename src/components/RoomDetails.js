import React from 'react';
import {ProjectConsumer} from '../context';
import StyledImage from './StyleImage';
import Banner from './Banner';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {addDays} from "react-datepicker";

export default function RoomDetails({context}) {
    return(
        <ProjectConsumer>
            {value => {
                const {detailRooms, handleCheckinDateChange, handleCheckoutDateChange, checkinDate, checkoutDate, onSubmit} = value;
                
                return(
                    <>
                    <StyledImage img={detailRooms.images[0]}>
                        <Banner title={detailRooms.name}>
                            <Link to="/rooms" className="btn-primary">
                                    Back to rooms
                            </Link>
                        </Banner>
                    </StyledImage>

                    <section className="single-room">
                        <div className="single-room-images">
                            {detailRooms.images.map((item, index) => {
                            return (
                                <img key={index} src={item} alt={detailRooms.name} />
                                )
                            })}
                        </div>

                        <div className="single-room-images row " style={{marginLeft: 20, textAlign:"center"}}>
                            
                                {/* description */}
                                <article className="desc col-md-4">
                                    <h3 style={{width: 300}}>{detailRooms.description}</h3> 
                                </article>
                                {/* details */}
                                <article className="info col-md-4" style={{width: 300}}>
                                    <h3>Infomation</h3>
                                    <h6>Price: AUD ${detailRooms.price}</h6>
                                    <h6>Size: {detailRooms.size}m2</h6>
                                    <h6>Guest: {detailRooms.capacity > 1 ? `${detailRooms.capacity} people`: `${detailRooms.capacity} person`}</h6>
                                    <h6>{detailRooms.pets? "pets allowed": "no pets allowed"}</h6>
                                    <h6>{detailRooms.breakfast && "free breakfast"}</h6> 
                                </article>
                                {/* description */}
                                <article className="desc col-md-4">
                                    <div>
                                    <p style={{marginBottom: 15, fontWeight:"bold"}}>Check-in</p>
                                        <DatePicker
                                            selected={checkinDate}
                                            onChange={handleCheckinDateChange}
                                            minDate={checkinDate}
                                        />
                                    </div>
                                    <div>
                                    <p style={{marginBottom: 15, marginTop:15, fontWeight: "bold"}}>Check-out</p>
                                        <DatePicker
                                            selected={checkoutDate}
                                            onChange={handleCheckoutDateChange}
                                            minDate={checkoutDate}
                                        />
                                    </div>
                                    <div style={{marginTop: 20}}>
                                        <Link  to="/booking/add">
                                            <input 
                                                type="submit"
                                                value="Book" 
                                                class="btn btn-primary" 
                                                data-toggle="button" 
                                                style={{textTransform:"uppercase"}}
                                                onClick={onSubmit}
                                            />
                                        </Link>
                                    </div>
                                    
                                </article>
                        </div>
                    </section>

                    <section className="room-extras">
                        <h6>Extras</h6>
                        <ul className="extras">
                            
                            {detailRooms.extras.map((item, index) => {
                                        return (
                                            <li key = {index} >- {item} </li>
                                        )
                            })}
                        </ul>
                    </section> 
                    </>
                )
            }}
        </ProjectConsumer>
    )
}