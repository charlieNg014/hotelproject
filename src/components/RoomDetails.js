import React from 'react';
import {ProjectConsumer} from '../context';
import StyledImage from './StyleImage';
import Banner from './Banner';
import {Link} from 'react-router-dom';

export default function RoomDetails({context}) {
    return(
        <ProjectConsumer>
            {value => {
                const {detailRooms} = value;
                console.log(detailRooms);
                console.log(detailRooms.name);
                
                
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

                        <div className="single-room-info">
                            {/* description */}
                            <article className="desc">
                                <h3>{detailRooms.description}</h3> 
                            </article>
                            {/* details */}
                            <article className="info">
                                <h3>Infomation</h3>
                                <h6>Price: AUD ${detailRooms.price}</h6>
                                <h6>Size: {detailRooms.size}m2</h6>
                                <h6>Guest: {detailRooms.capacity > 1 ? `${detailRooms.capacity} people`: `${detailRooms.capacity} person`}</h6>
                                <h6>{detailRooms.pets? "pets allowed": "no pets allowed"}</h6>
                                <h6>{detailRooms.breakfast && "free breakfast"}</h6> 
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