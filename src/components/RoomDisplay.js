import React from 'react';
import ProjectDisplay from './ProjectDisplay';
import SiteFooter from "../Pages/SiteFooter";

export default function RoomDisplay({rooms}) {
        if (rooms.length === 0) {
            return(
                <div className="empty-search">
                    <h3>Unfortunately, there is no room matching your search</h3>
                </div>
            )
        } 
        return(
            <section className="roomslist">
                <div className="roomslist-center">
                    {rooms.map(item => {
                        return(
                            <>
                            <ProjectDisplay key={item.id} room={item} />
                            </>
                        )
                    })}
                </div>
            </section>
        )
}