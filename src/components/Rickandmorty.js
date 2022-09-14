import React from 'react';
import {rickandmorty} from "../data";

const Rickandmorty = () => {
    return (
        <div>
            <h3>2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього
                апі.
                Створити 6 персонажів</h3>
            {rickandmorty.map(value =>
                <div className={'rick'}>
                    <p>ID: {value.id}</p>
                    <p>Name: {value.rickname}</p>
                    <p>Status: {value.status}</p>
                    <p>Spesies:{value.spesies}</p>
                    <p>Genger:{value.gender}</p>
                    <img src={value.rickpick}/>
                </div>
            )}
        </div>
    );
};

export default Rickandmorty;