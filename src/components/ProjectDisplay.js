import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {ProjectContext} from '../context';

export default function ProjectDisplay({room}) {
    //declare items
    
    const {name, images, price, slug} = room;
    const context = useContext(ProjectContext);
    const {getRoomId} = context;
        return(
            <article className="room">
                <div className="img-container">
                    <img src={images[0]} alt="displayimage"/>
                    <div className="price-top">
                        ${price} 
                        <p>per night</p>
                    </div>
                    <Link to={`/rooms/${slug}`} className="btn-primary room-link" onClick= {() => getRoomId(slug)}
                    >Feature
                    </Link>
                    <p className="room-info">{name}</p>
                </div>
            </article>
        )
}

ProjectDisplay.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}