import React from 'react';
import {render} from 'react-dom';

import {FaIcon} from 'misc';

class Footer extends React.Component {
  render(){
    return <footer className="footer">
      <div className="container footer-container">
        <div className="info">
          <h1>Dev<span className="devx-footer-x">X</span></h1>
          <div className="icons">
            <a href="#"><FaIcon icon="facebook"/></a>
            <a href="#"><FaIcon icon="github"/></a>
            <a href="#"><FaIcon icon="envelope"/></a>
            <a href="#"><FaIcon icon="youtube"/></a>
          </div>
          <small>Copyright &copy; 2017 UCLA DevX</small>
        </div>
      </div>
      <img className="moon" src="/assets/moon.png"/>
    </footer>;
  }
}

export default Footer
