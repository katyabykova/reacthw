import React from 'react';
import {useForm} from "react-hook-form";

const FormUsers = () => {

    let {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            id: 'id',
            name: 'name',
            email: 'email',
            address: {
                street: 'street',
                suite: 'suite',
                city: 'city',
                zipcode: 'zipcode',
                geo: {
                    lat: 'lat',
                    lng: 'lng'
                }
            }
        }
    })

    function submit(value) {


        fetch("https://jsonplaceholder.typicode.com/users", {
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
                <input type="text" {...register('email', {required: true})} /><br/>
                {errors.email && <span>Ошибка</span>}
                <input type="text" {...register('street', {required: true})} defaultValue={'street'}/><br/>
                {errors.street && <span>Ошибка</span>}
                <input type="text" {...register('suite', {required: true})} defaultValue={'suite'}/><br/>
                {errors.suite && <span>Ошибка</span>}
                <input type="text" {...register('city', {required: true})} defaultValue={'city'}/><br/>
                {errors.city && <span>Ошибка</span>}
                <input type="text" {...register('zipcode', {required: true})} defaultValue={'zipcode'}/><br/>
                {errors.zipcode && <span>Ошибка</span>}
                <input type="text" {...register('lat', {required: true})} defaultValue={'lat'}/><br/>
                {errors.lat && <span>Ошибка</span>}
                <input type="text" {...register('lng', {required: true})} defaultValue={'lng'}/><br/>
                {errors.lng && <span>Ошибка</span>}
                <button>Сохранить</button>
            </form>
        </div>

    );
};

export default FormUsers;