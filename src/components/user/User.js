import React from 'react';


const User = ({user, getUserId}) => {
    return (
        <div>
            <h2>{user.id} {user.name}</h2>
            <button onClick={() => {
                getUserId(user.id)
            }}>POSTS of {user.name}</button>
        </div>
    );
};

export default User;