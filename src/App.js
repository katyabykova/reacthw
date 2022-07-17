import React, {Component} from 'react';
import {Posts} from "./components/Posts";
import {Comments} from "./components/Comments";
import '../src/style.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className={'Posts'}>
                    <h2>Posts:</h2>
                    <Posts/>
                </div>
                <div className={'Comments'}>
                    <h2>Comments:</h2>
                    <Comments/>
                </div>
            </div>
        );
    }
}

export default App;
