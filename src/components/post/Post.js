import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            POST{post.id}: {post.body}
        </div>
    );
};

export default Post;