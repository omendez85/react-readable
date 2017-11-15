import React from 'react';

const NotPageFound = (props) => {
    return (
        <div className="o-grid__cell">
            <div className="o-grid-text">
                <h1 className="c-heading">
                    {props.textPage}
                </h1>
            </div>
        </div>
    )
}

export default NotPageFound;
