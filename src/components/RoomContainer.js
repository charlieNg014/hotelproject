import React from 'react';
import RoomFilter from './RoomFilter';
import RoomDisplay from './RoomDisplay';
import {ProjectConsumer} from '../context';

export default function RoomContainer({context}){
        return(
            <>
            <ProjectConsumer>
                {value => {
                    const { sortedRooms, rooms} = value;
                    return (
                        <div>
                            <RoomFilter rooms = {rooms}/>
                            <RoomDisplay rooms = {sortedRooms}/>
                        </div>
                    )
                }}
            </ProjectConsumer>
            </>
        )
}