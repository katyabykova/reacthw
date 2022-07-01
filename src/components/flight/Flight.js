import React from 'react';
import './Flight.css'

const Flight = ({flight}) => {
    if(flight.launch_year !== "2020"){
    return (
        <div className={'flight'}><p>{flight.mission_name} {flight.launch_year}</p> <img src={flight.links.mission_patch_small}/></div>
    );}
};

export default Flight;