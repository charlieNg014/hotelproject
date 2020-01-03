import React, {Component} from 'react';
import StyleImage from "../components/StyleImage";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';
import roomdisplay from '../images/room-2.jpeg';

export default class Rooms extends Component {
    render() {
        return (
            <>
            <StyleImage img={roomdisplay}>
                <Banner title="Our rooms" subtitle="Explore our rooms">
                    <Link to="/" className="btn-primary">Back to homepage</Link>
                </Banner>
            </StyleImage>
            <RoomContainer />
            </>
        )
    }
}