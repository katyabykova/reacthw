import React from 'react';
import './User.css'

const User = ({item,choose}) => {
    return (
        <div className={'usersbox'}>
            <div>ID: {item.id} NAME: {item.name} </div>
            <button onClick={()=>choose(item)}>MORE</button>

        </div>
    );
};

export default User;