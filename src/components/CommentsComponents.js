import React, {useEffect, useState} from 'react';
import {getComments} from "../services/Comments.api.services";
import CommentsComponent from "./CommentsComponent";

const CommentsComponents = () => {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments.then(({data}) => setComments([...data]))
    }, [])
    return (
        <div className={'content'}>
            {comments.map((value, index) => <CommentsComponent value={value} key={index}/>)}
        </div>
    );
};

export default CommentsComponents;