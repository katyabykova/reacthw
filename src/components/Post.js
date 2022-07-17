import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            TITLE:{post.title}, BODY:{post.body}
        </div>
    );
};

export default Post;