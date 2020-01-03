import React, {Component} from 'react';
import Title from '../components/Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

export default class Services extends Component {
    //store the array in state first before thinking about dispaying it below by using map 
    state = {
        services: [
            {icon: <FaCocktail/>, title: "Free Cocktail", info: "Enjoy complimentary evening canapés and cocktails, served daily in the * bar located right in front of the beach. The cocktail menu is long as well, with a skillfully curated drink list executed masterfully by our resident mixologist."},
            {icon: <FaHiking/>, title: "Endless Hiking", info: "Located in one of the best coastal area around Melbourne, you can enjoy hiking to surrounding mountains or go to picnic with family or friends"},
            {icon: <FaShuttleVan/>, title: "Free Shuttle", info: "Our hotel offers a wide range of luxurious transportation service with professional chauffeur for you to explore the region. Enjoy daily complimentary roundtrip shuttle service to several attraction from our resort."},
            {icon: <FaBeer/>, title: "Stronger Beer", info: "Enjoy refreshing beer and a delicious assortment of light bites. A must try at The * Bar is our award-winning signature drink, the floating set of beer by the pool"}
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}