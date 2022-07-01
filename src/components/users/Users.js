import React, {useEffect, useState} from 'react';
import User from "../user/User";

const Users = () => {
    let [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value =>{
            setUsers(value)})
   },[])

const choose =(item)=> console.log(item)

    return (
        <div>
            <div></div>
            {users.map((user,index)=><User
                item={user}
                key={index}
                choose={choose}
            />)}
        </div>
    );
};

export default Users;