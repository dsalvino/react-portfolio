import React from 'react';
import Aside from '../aside/aside';
import Repos from '../repos/repos';

const Body = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Aside />
                <Repos />
            </div>
        </div>
    )
}

export default Body;