import React from 'react';
import '../components/style.css'

const TodosComponent = ({value}) => {
    return (
        <div className={'content'}>
            TITLE: {value.title}, COMPLETED: {value.completed.toString()}
        </div>
    );
};

export default TodosComponent;