import React from 'react';
import Aside from '../aside/aside';
import Repos from '../repos/repos';

const Body = () => {
    return (
        <div className="container-fluid">
            <Aside />
            <Repos />
        </div>
    )
}

export default Body;