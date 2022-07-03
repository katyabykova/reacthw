import {getAllUsers} from "../../services/user.api.services";
import React, {useEffect, useState} from 'react';
import User from "../user/User";


const Users = ({getUserId}) => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers([...data]))
    }, [])
    return (
        <div>
            {
                users.map((value, index) => <User
                    user={value}
                    key={index}
                    getUserId={getUserId}
                />)
            }
        </div>
    );
};

export default Users;