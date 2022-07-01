import React from "react";
import Users from "./components/users/Users";
import './App.css'
import Flights from "./components/flights/Flights";

function App() {
    return (
        <div className="App">
            <div className={'box'}>
                <div>
                    <h2>Users:</h2>
                    <Users/>
                </div>
                <div>
                    <h2>Flights:</h2>
                    <Flights/>
                </div>
            </div>
        </div>
    );
}

export default App;
