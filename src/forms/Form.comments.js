import React from 'react';
import {useForm} from "react-hook-form";

const FormComments = () => {
    let {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name',
            email: 'email',
            body: 'body'
        }
    })


    function submit(value) {


        fetch("https://jsonplaceholder.typicode.com/comments", {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8',},
            body: JSON.stringify(value)
        })
            .then(response => response.json())
            .then(result => console.log(result))
    }

    return (
        <div>
            <form onSubmit={
                handleSubmit(submit)
            }>
                <input type="text" {...register('name', {required: true})} /><br/>
                {errors.name && <span>Ошибка</span>}
                <input type="text" {...register('email', {required: true})} defaultValue={'street'}/><br/>
                {errors.email && <span>Ошибка</span>}
                <input type="text" {...register('body', {required: true})} defaultValue={'suite'}/><br/>
                {errors.body && <span>Ошибка</span>}
                <button>Сохранить</button>
            </form>
        </div>
    );
};

export default FormComments;