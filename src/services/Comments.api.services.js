import axios from "axios";

let axiosComments = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
});
const getComments = axiosComments.get().then(value => value);
export {getComments}