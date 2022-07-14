import React from 'react';
import TodosComponents from "../components/TodosComponents";


const TodosPage = () => {

    return (
        <div className={'Content'}>
            <h3>TODOS:</h3>
            <TodosComponents/>
        </div>
    );
};

export default TodosPage;