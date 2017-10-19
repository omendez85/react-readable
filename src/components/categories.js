import React, { Component } from 'react';
import lang from '../utils/lang';

class Categories extends Component {
  render() {
    return (
      <div className="o-grid">
        <div className="o-grid__cell">
          <h2 className="c-heading"> {lang.categories} </h2>
          <div className="c-tags">
            <span className="c-tags__container">
              { this.props.categories.map( category => (
                <button type="button" className="c-button c-tag" key={category.name}>
                  {category.name}
                </button>
              ))}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
