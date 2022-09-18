import React, {useEffect, useState} from 'react';
import {axiosFlights} from "../../services/Flights.api.service";
import Flight from "./Flight";

const Flights = () => {

    let [flights, setFlights] = useState([]);

    useEffect(() => {
        axiosFlights().then(value => {
            setFlights(value.data)
        })
    }, [])

    return (
        <div className={'box'}>
            <p>2. є API от SpaceX
                потрібно вивести всі запуски кораблів окрім 2020 року
                репрезентувати тільки окремі поля</p>
            {flights.map((value, index) => <Flight key={index} value={value}/>)}
        </div>
    );
};

export default Flights;