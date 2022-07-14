import axios from "axios";

let axiosAlbums = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/albums'
});
const getAlbums = axiosAlbums.get().then(value => value);
export {getAlbums}