import axios from "axios";

let axiosComments = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
    headers: {'Content-Type': 'application/json; charset=UTF-8'}
})
const setComments = (data) => axiosComments.post('', {data: data})


export {setComments}