import React from 'react';
import lang from '../utils/lang';
import { Link } from 'react-router-dom';

const Categories = (props) => {
    return (
        <div className="o-grid__cell list-categories">
          <h2 className="c-heading"> {lang.categories}:</h2>
          <div className="c-tags">
            <span className="c-tags__container">

                <Link
                    to='/'
                    onClick={ () => props.onSelectCategory('') }
                    className={`c-button c-tag ${ (props.currentCategory === '') ? 'c-button--success' : ''}`}> All </Link>

              { props.categories.map( category => (
                  <Link
                      key={category.name}
                      to={`/${category.name}`}
                      onClick={ () => props.onSelectCategory(category.name) }
                      className={`c-button c-tag ${ (props.currentCategory === category.name) ? 'c-button--success' : ''}`}> {category.name} </Link>
              ))}
            </span>
          </div>
        </div>
    );
}

export default Categories;
