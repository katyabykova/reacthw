import axios from 'axios';

let axiosUsers = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users'
});

const getAllUsers =()=> axiosUsers.get().then(value => value);

export {getAllUsers};