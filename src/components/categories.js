import React, { Component } from 'react';
import lang from '../utils/lang';
import { Link } from 'react-router-dom';

class Categories extends Component {
  render() {
    return (
        <div className="o-grid__cell list-categories">
          <h2 className="c-heading"> {lang.categories}:</h2>
          <div className="c-tags">
            <span className="c-tags__container">
              { this.props.categories.map( category => (
                <Link
                    to={`/category/${category.name}`}
                    className="c-button c-tag"
                    key={category.name} > {category.name} </Link>
              ))}
            </span>
          </div>
        </div>
    );
  }
}

export default Categories;
