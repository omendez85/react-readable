import React, { Component } from 'react';

class SortBy extends Component {
  render() {
    return (
        <div className="o-grid__cell">
            <div className="o-form-element">
                <label className="c-label">Sort By:
                    <select className="c-field" onChange={this.props.onSortPostBy}>
                        <option value="1">Votes &uarr;</option>
                        <option value="2">Votes &darr;</option>
                        <option value="3">Date &uarr;</option>
                        <option value="4">Date &darr;</option>
                    </select>
                </label>
            </div>
        </div>
    );
  }
}

export default SortBy;
