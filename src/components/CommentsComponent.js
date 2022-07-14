import React from 'react';
import {Link} from "react-router-dom";
import '../components/style.css'

const CommentsComponent = ({value}) => {

    return (
        <div className={'content'}>
            <Link to={value.postId.toString()}>
                ID: {value.id}, NAME: {value.name}, BODY: {value.body}
            </Link>
        </div>
    );
};

export default CommentsComponent;