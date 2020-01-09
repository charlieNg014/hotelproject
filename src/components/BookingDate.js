import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {ProjectContext} from '../context';
import StyleImage from './StyleImage';


export default function BookingDate({booking}) {
    //declare items
    const context = useContext(ProjectContext);     
    console.log(booking);
    
    
   
    
        return(
            <article>
                <StyleImage>
                    <div className="form-group">
                        <div className="form-group reserve-title">Your reservation</div>
                        <div className="row checkdate">
                            <div className="col-md-6">
                                checkin
                            </div>
                            <div className="col-md-6">
                                checkout
                                <p></p>
                            </div>
                        </div>
                        <div className="row checkdate" style={{marginTop:150}}>
                            <div className="col-md-6">
                                Guest
                            </div>
                            <div className="col-md-6">
                                Nights
                            </div>
                        </div>
                    </div>
                </StyleImage>
            </article>
        )
}

BookingDate.propTypes = {
    booking: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}