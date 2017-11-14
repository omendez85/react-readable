import React from 'react';
import lang from '../utils/lang';

const Categories = (props) => {
    return (
        <div className="o-grid__cell list-categories">
          <h2 className="c-heading"> {lang.categories}:</h2>
          <div className="c-tags">
            <span className="c-tags__container">
                <a
                    onClick={ () => props.onSelectCategory('all') }
                    className={`c-button c-tag ${ (props.currentCategory === 'all') ? 'c-button--success' : ''}`}> All </a>
              { props.categories.map( category => (
                <a
                    onClick={ () => props.onSelectCategory(category.name) }
                    className={`c-button c-tag ${ (props.currentCategory === category.name) ? 'c-button--success' : ''}`}
                    key={category.name} > {category.name} </a>
              ))}
            </span>
          </div>
        </div>
    );
}

export default Categories;
