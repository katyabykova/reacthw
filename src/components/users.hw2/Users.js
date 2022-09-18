import React, {useEffect, useState} from 'react';
import {axiosUsers} from "../../services/Users.api.service";
import User from "./User";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});
    const chosen = (user) => {
        setUser(user)
    }

    useEffect(() => {
        axiosUsers().then(value => setUsers(value.data))
    }, [])
    return (
        <div className={'box'}>
            <p>1. з jsonplaceholder отримати всіх юзерів в компоненту Users.js відобразити кожного інформацію (id,name)
                з кожного юзера (компонента User). Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви
                покажете детальну інфомацію про користувача(довільно обрану інформацію)</p>
            <hr/>
            Деталі: <br/>
            {user.username} <br/> {user.email}
            <hr/>
            {
                users.map((value, index) => <User value={value} key={index} chosen={chosen}/>)
            }

        </div>
    );
};

export default Users;
