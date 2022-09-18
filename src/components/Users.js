import React, {useEffect, useState} from 'react';
import {axiosUsers} from "../services/users.api.service";
import User from "./User";
import user from "./User";

const Users = () => {

    let [users, setUsers] = useState([])
const chosen = (value) =>{

}

    useEffect(()=>{
        axiosUsers().then(value => setUsers(value.data))
    },[])
console.log(users)
    return (
        <div className={'box'}>
            <p>1. з jsonplaceholder отримати всіх юзерів в компоненту Users.js відобразити кожного інформацію (id,name) з кожного юзера (компонента User). Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)</p>
            {
                users.map((value,index)=><User value={value} key={index} chosen={chosen}/>)
            }
        </div>
    );
};

export default Users;