import React, {useEffect, useState} from 'react';
import {getTodos} from "../services/Todos.api.services";
import TodosComponent from "./TodosComponent";

const TodosComponents = () => {
    let [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos.then(({data}) => setTodos([...data]))
    }, [])
    return (
        <div>
            {todos.map((value, index) => <TodosComponent value={value} key={index}/>)}
        </div>
    );
};

export default TodosComponents;