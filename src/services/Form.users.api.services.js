let baseUrl = 'https://jsonplaceholder.typicode.com/users';

let setUsers=({value})=> fetch(baseUrl,{
    method: 'POST',
    headers: {'Content-Type': 'application/json; charset=UTF-8',},
    body: JSON.stringify(value)
})
.then(response => response.json())

export {setUsers}