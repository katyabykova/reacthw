import React from 'react';

const User = ({value, chosen}) => {
    return (
        <div>
            {value.id} - {value.name}
            <br/>
            <button onClick={() => {
                chosen(value)
            }}>Деталі
            </button>
            <hr/>
        </div>
    );
};

export default User;