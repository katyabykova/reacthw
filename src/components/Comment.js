import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            NAME:{comment.name}, BODY:{comment.body}
        </div>
    );
};

export default Comment;