import React from 'react';
import '../components/style.css'

const AlbumsComponent = ({value}) => {
    return (
        <div className={'content'}>
            ID: {value.id}, TITLE: {value.title}
        </div>
    );
};

export default AlbumsComponent;