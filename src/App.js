import React from "react";
import Users from "./components/users/Users";
import './services/App.css'
import Posts from "./components/posts/Posts";

function App() {
  return (
    <div className="App">
        <div className={'users'}>
<Users />
        </div>
        <div className={'posts'}>
            <Posts />
        </div>
    </div>
  );
}

export default App;
