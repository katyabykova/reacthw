import React, {useState} from "react";
import Users from "./components/users/Users";
import '../src/App.css'
import {getAllPosts} from "./services/post.api.services";
import Post from "./components/post/Post";


function App() {

    let [posts, setPosts] = useState([]);
    let getUserId = (id) => {
        getAllPosts(id).then(({data}) => setPosts([...data]))
    }

    return (
        <div className="App">
            <div className={'users'}>
                <Users getUserId={getUserId}/>
            </div>
            <div className={'posts'}>
                {posts.map((value, index) => <Post
                    key={index}
                    post={value}
                />)}

            </div>
        </div>
    );
}
;
export default App;
