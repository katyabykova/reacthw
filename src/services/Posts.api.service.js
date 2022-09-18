import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {'Content-Type': 'application/json'}
});

let axiosPosts = (id) => {
    return axiosInstance('/' + id + '/posts')
};


export {axiosPosts};