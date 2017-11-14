import React from 'react';

const SortBy = (props) => {
    return (
        <div className="o-grid__cell">
            <div className="o-form-element">
                <label className="c-label">Sort By:
                    <select
                    className="c-field"
                    onChange={props.onSortPostBy}>
                        <option value="1">Newest</option>
                        <option value="2">Oldest</option>
                        <option value="3">Most voted</option>
                        <option value="4">Less voted</option>
                    </select>
                </label>
            </div>
        </div>
    )
}

export default SortBy;
