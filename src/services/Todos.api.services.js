import axios from "axios";


let axiosTodos = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
});
const getTodos = axiosTodos.get().then(value => value)

export {getTodos}