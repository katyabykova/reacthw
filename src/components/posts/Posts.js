import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/post.api.services";
import Post from "../post/Post";
import post from "../post/Post";

const Posts = () => {

    let [posts,setPosts] = useState([]);
useEffect(()=>{
    getPosts().then(({data}) => setPosts([...data]))
},[])
    return (
        <div>
            {posts.map((data,index)=><Post
            key={index}
            post={data}
            />)}
        </div>
    );
};

export default Posts;