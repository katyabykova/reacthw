import React, {useEffect, useState} from 'react';
import {getAlbums} from "../services/Albums.api.services";
import AlbumsComponent from "./AlbumsComponent";

const AlbumsComponents = () => {
    let [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAlbums.then(({data}) => setAlbums([...data]))
    }, [])
    return (
        <div>
            {
                albums.map((value, index) => <AlbumsComponent value={value} key={index}/>)
            }
        </div>
    );
};

export default AlbumsComponents;