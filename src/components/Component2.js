import React from 'react';
import './Component.css'

const Component2 = ({id,rickname,status,spesies,gender,rickpick}) => {
    return (
        <div>
            <div className={'rick'}>
                <p>ID: {id}</p>
                <p>Name: {rickname}</p>
                <p>Status: {status}</p>
                <p>Spesies:{spesies}</p>
                <p>Genger:{gender}</p>
                <img src={rickpick}/>
            </div>
        </div>
    );
};

export default Component2;