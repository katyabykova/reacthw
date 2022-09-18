import React from 'react';

const Flight = ({value}) => {
    if (value.launch_year !== "2020") {
        return (
            <div className={'flights'}>
                <hr/>
                {value.mission_name}, {value.launch_year}
                <img src={value.links.mission_patch_small} alt=""/>
            </div>
        );
    }
};

export default Flight;