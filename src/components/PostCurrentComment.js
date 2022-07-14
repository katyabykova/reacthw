import React, {useEffect, useState} from 'react';
import '../components/style.css'
import {useParams} from "react-router-dom";
import {getPostCurrent} from "../services/Posts.api.services";
import Post from "./Post";


const PostCurrentComments = () => {
    const {postId} = useParams();
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPostCurrent(postId)
            .then(value => setPosts([{...value}]))
    }, [postId])
    return (

        <div>
            <h3>COMMENT'S POST:</h3>
            {posts.map((value, index) => <Post value={value} key={index}/>)}
        </div>
    );
};

export default PostCurrentComments;