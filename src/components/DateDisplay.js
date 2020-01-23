import React from 'react';
import {ProjectConsumer} from '../context';
import StyledImage from './StyleImage';
import Banner from './Banner';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import addDays from 'date-fns/addDays';
import {useContext} from 'react';
import {ProjectContext} from '../context';

export default function DateDisplay({result}) {

    console.log(result);
    
    // const {firstname} = result;
    // console.log(firstname);

const test = [];
    return(
        <ProjectConsumer>
            {value => {
                const {
                    detailRooms, 
                    handleCheckinDateChange, 
                    handleCheckoutDateChange, 
                    checkinDate, 
                    checkoutDate, 
                    onSubmit,
                    getBookedDate,
                    bookedDateArray
                } = value;

                console.log(bookedDateArray);
                
                
                return(
                    <>
                    <div>
                    <p style={{marginBottom: 15, fontWeight:"bold"}}>Check-in</p>
                    <DatePicker
                        selected={checkinDate}
                        onChange={handleCheckinDateChange}
                        minDate={new Date()}
                        maxDate = {addDays(checkinDate, 40)}
                    />
                    </div>
                    <div>
                    <p style={{marginBottom: 15, marginTop:15, fontWeight: "bold"}}>Check-out</p>
                        <DatePicker
                            selected={addDays(checkinDate, 1)}
                            onChange={handleCheckoutDateChange}
                            minDate={addDays(checkinDate, 1)}
                            endDate={checkoutDate}
                            startDate={checkinDate}
                            // excludeDates={}
                            maxDate = {addDays(new Date(), 40)}
                        />
                    </div>
                    </>
                )
            }}
        </ProjectConsumer>
    )
}