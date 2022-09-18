import React from 'react';

const Post = ({value}) => {
    return (
        <div>Post id {value.id}:
            {value.title}
            <hr/>
        </div>
    );
};

export default Post;