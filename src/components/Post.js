import React from 'react';

const Post = ({value}) => {
    return (
        <div className={'content'}>
            Id:{value.id}, TITLE: {value.title}, BODY: {value.body}
        </div>
    );
};

export default Post;