import React from 'react';
import {simpsons} from "../data";

const Simpsons = () => {
    return (<div>
            <h3>1. Описати всю сім'ю сімпсонів (5 персонажів):</h3>
            {
                simpsons.map(value =>
                    <div className={'simpsons'}>
                        <h1>{value.name}</h1>
                        <p>{value.text}</p>
                        <img src={value.pic}/>
                    </div>
                )
            }
        </div>
    );
};

export default Simpsons;
