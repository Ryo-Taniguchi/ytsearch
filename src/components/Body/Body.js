import React from 'react';

// functionComponent
const Body = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {props.children}
            </div>
        </div>
    );
}

export default Body;