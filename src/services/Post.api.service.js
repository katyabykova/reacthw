import axios from "axios";

let baseURL = 'https://jsonplaceholder.typicode.com/posts';

const axiosService = axios.create({baseURL})
const postService = {
    getAll: () => axiosService.get('')
}
export {
    postService
}