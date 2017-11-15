import React from 'react';
import lang from '../utils/lang';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
      <div className="o-grid">
        <div className="o-grid__cell">
          <h1 className="c-heading"> {lang.titleSite} </h1>
          <Link
              to='/'
              onClick={props.onReturnHome}
              className="c-button c-tag"> Home </Link>
        </div>
      </div>
    )
}

export default Header;
