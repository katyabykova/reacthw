import React from 'react';
import './Component.css'

const Component = ({name,text,pic,}) => {
    return (
        <div className={'simpsons'}>
           <h1>{name}</h1>
           <p>{text}</p>
            <img src={pic}/>
        </div>


    );
};

export default Component;

// id,name,status,species,gender,image