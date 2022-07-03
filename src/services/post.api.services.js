import axios from "axios";

let axiosPosts = axios.create({
    baseURL:`https://jsonplaceholder.typicode.com/users/`
});
const getPosts =(id)=> axiosPosts.get('{id}/posts').then(value => value);

export {getPosts};