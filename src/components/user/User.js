import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <h2>{user.id} {user.name}</h2>
            <button onClick={()=>{

            }}>POSTS of {user.name}</button>
        </div>
    );
};

export default User;