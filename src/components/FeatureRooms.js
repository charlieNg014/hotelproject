import React, {Component} from 'react';
import Title from './Title';
import {ProjectContext} from "../context";
import ProjectDisplay from './ProjectDisplay';


export default class FeatureRooms extends Component {
    static contextType = ProjectContext;
   
    render(){
        //import data featuredRooms
        let {featuredRooms: rooms} = this.context;
        // console.log(rooms);
        
        
        rooms = rooms.map(room => {
            return(
                <ProjectDisplay key={room.id} room={room} />
            )
        })
        return(
            <section className="featured-rooms">
                <Title title="Feature Rooms"/>
                <div className="featured-rooms-center">
                  {rooms}
                </div>
            </section>
        )
    }
}

