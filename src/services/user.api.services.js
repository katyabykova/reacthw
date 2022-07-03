

let url = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => fetch(url)
    .then(value => value.json());

const getUser = (id) => fetch(url + '/'+id)
    .then(value => value.json());

const usersPosts = (id) =>fetch(url+'/'+id+'/'+'posts')
    .then(value => value.json());

export {getUser,getUsers,usersPosts};