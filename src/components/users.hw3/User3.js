import React from 'react';

const User3 = ({value, choosen}) => {
    return (
        <div>
            <hr/>
            {JSON.stringify(value)}
            <br/><br/>
            <button onClick={() => {
                choosen(value.id)
            }}>Posts
            </button>
        </div>
    );
};

export default User3;