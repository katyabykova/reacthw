import axios from "axios";

let baseURL = 'https://jsonplaceholder.typicode.com/comments';

const axiosService = axios.create({baseURL})
const commentService = {
    getAll: () => axiosService.get('')
}
export {
    commentService
}