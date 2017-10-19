import React, { Component } from 'react';
import lang from '../utils/lang';

class Header extends Component {
  render() {
    return (
      <div className="o-grid">
        <div className="o-grid__cell">
          <h1 className="c-heading"> {lang.titleSite} </h1>
        </div>
      </div>
    );
  }
}

export default Header;
