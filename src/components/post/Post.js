import React from 'react';
import '../post/Post.css'

const Post = ({post}) => {
    return (
        <div className={'post'}>
            POST: {post.body}
        </div>
    );
};

export default Post;