import React, { Component } from 'react';
import lang from '../utils/lang';

class Categories extends Component {
  render() {
    return (
        <div className="o-grid__cell list-categories">
          <h2 className="c-heading"> {lang.categories}:</h2>
          <div className="c-tags">
            <span className="c-tags__container">
                <a
                    onClick={ () => this.props.onSelectCategory('all') }
                    className={`c-button c-tag ${ (this.props.currentCategory === 'all') ? 'c-button--success' : ''}`}> All </a>
              { this.props.categories.map( category => (
                <a
                    onClick={ () => this.props.onSelectCategory(category.name) }
                    className={`c-button c-tag ${ (this.props.currentCategory === category.name) ? 'c-button--success' : ''}`}
                    key={category.name} > {category.name} </a>
              ))}
            </span>
          </div>
        </div>
    );
  }
}

export default Categories;
