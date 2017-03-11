import React from 'react';
import {render} from 'react-dom';

import Config from 'config';

import FaIcon from 'faicon';
import {Anchor} from 'misc';

class Footer extends React.Component {
  render(){
    return <footer className="footer">
      <div className="container footer-container">
        <div className="info">
          <h2>Dev<span className="devx-x">X</span></h2>
          <div className="icons">
            <Anchor ext href={Config.url.social.fb}><FaIcon invert icon="facebook"/></Anchor>
            <Anchor ext href={Config.url.social.gh}><FaIcon invert icon="github"/></Anchor>
            <Anchor ext href={Config.url.social.em}><FaIcon invert icon="envelope"/></Anchor>
            <Anchor ext href={Config.url.social.yt}><FaIcon invert icon="youtube"/></Anchor>
          </div>
          <small>Copyright &copy; 2017 UCLA DevX</small>
        </div>
      </div>
      <img className="moon" src="/assets/moon.png"/>
    </footer>;
  }
}

export default Footer
