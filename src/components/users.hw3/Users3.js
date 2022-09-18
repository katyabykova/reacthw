import React, {useEffect, useState} from 'react';
import {axiosUsers} from "../../services/Users.api.service";
import User3 from "./User3";

const Users3 = ({choosen}) => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        axiosUsers().then(value => setUsers(value.data))
    }, [])
    return (
        <div className={'box1'}>
            <p>3. Отримати всіх користувачів з jsonplaceholder, вивести їх. Біля кожного користувача зробити кнопку, при
                натисканні на яку в Апп компоненті з'являються всі пости поточного користувача Запити робити через
                axios, організація коду через сервіси</p>
            {users.map((value, index) => <User3 key={index} value={value} choosen={choosen}/>)}
        </div>
    );
};

export default Users3;