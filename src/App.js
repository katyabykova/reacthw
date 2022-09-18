import React, {useEffect, useState} from "react";
import Users from "./components/users.hw2/Users";
import './App.css'
import Flights from "./components/flights/Flights";
import {axiosPosts} from "./services/Posts.api.service";
import Users3 from "./components/users.hw3/Users3";
import Post from "./components/posts/Post";


function App() {
    let [id, setId] = useState([]);
    let [posts, setPosts] = useState([]);
    const choosen = (id) => {
        setId(id)
    }
    useEffect(() => {
        axiosPosts(id).then(value => setPosts(value.data))
    }, [id])
    return (
        <div className="App">
            <Users/>
            <Flights/>
            <Users3 choosen={choosen}/>
            <div className={'box'}>
                <p>Пости юзера:</p>
                {posts.map((value, index) => <Post key={index} value={value}/>)}
            </div>
        </div>
    );
}

export default App;
