import axios from "axios";

let axiosPost = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})
const getPostCurrent = (postId) => axiosPost.get('/' + postId).then(value => value.data);
export {getPostCurrent};