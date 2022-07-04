import React from 'react';
import {useForm} from "react-hook-form";
import {setComments} from "../services/Form.comments.api.serices";

const FormComments = () => {
    let {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name',
            email: 'email',
            body: 'body'
        }
    })


    const submit = (data) => {


        setComments(data).then(({data}) => console.log(data))

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