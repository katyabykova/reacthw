import React, {useState} from "react";
import '../src/App.css'
import {useForm} from "react-hook-form";
import FormUsers from "./forms/Form.users";
import FormComments from "./forms/Form.comments";

function App() {

    return (
        <div className="App">

            <div className={'formUsers'}>
                <FormUsers/>

            </div>
            <div className={'formComents'}>
                <FormComments/>
            </div>

        </div>
    );
}

export default App;
