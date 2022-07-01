import React, {useEffect, useState} from 'react';
import Flight from "../flight/Flight";
import './Flights.css'

function Flights() {

    let[flights,setFlights] = useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setFlights(value)
            })
    },[])

    return (
        <div className={'flights'}>
        {
            flights.map((flight,index)=><Flight
            key={index}
            flight={flight}
            />)
        }
        </div>
    );
};

export default Flights;