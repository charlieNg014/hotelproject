import React from 'react'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from './Services';

//reusable item 
import StyleImage from "../components/StyleImage";
import FeatureRooms from '../components/FeatureRooms';
import Contact from './Contact';
import Footer from "./Footer";

export default function Home() {
    return(
        <>
        <StyleImage>
            <Banner title="Hotel Projects" subtitle="Welcome to our hotel">
                <Link to="/rooms" className="btn-primary">
                    Explore now
                </Link>
            </Banner>
        </StyleImage>
        <Services />
        <FeatureRooms />
        <Contact />
        <Footer />
        </>
    )
}