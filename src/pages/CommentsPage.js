import React from 'react';
import CommentsComponents from "../components/CommentsComponents";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <div className={'Content'}>
                <Outlet/>
                <h3>COMMENTS:</h3>
                <CommentsComponents/>
            </div>

        </div>
    );
};

export default CommentsPage;