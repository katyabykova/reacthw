import {getUsers} from "../../services/user.api.services";

import React, {useEffect, useState} from 'react';
import User from "../user/User";

const Users = () => {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])
    return (
        <div>
            {
                users.map((value,index) => <User
                user={value}
                key={index}
                />)
            }
        </div>
    );
};

export default Users;