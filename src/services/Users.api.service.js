import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {'Content-Type': 'application/json'}
});

const axiosUsers = () => {
    return axiosInstance()
}

export {axiosUsers};