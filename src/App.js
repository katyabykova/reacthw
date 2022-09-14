import React from "react";
import Simpsons from "./components/Simpsons";
import './App.css'
import Rickandmorty from "./components/Rickandmorty";

function App() {
    return (
        <div>
            <div className={'box'}>
                <div className={'task'}>
                    <Simpsons/>
                </div>
                <div className={'task'}>
                    <Rickandmorty/>
                </div>
            </div>
        </div>
    )
}

export default App;
