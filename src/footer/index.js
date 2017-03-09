import React from 'react';
import {render} from 'react-dom';

import Config from 'config';

import {Anchor} from 'misc';

class Footer extends React.Component {
  render(){
    return <footer className="footer">
      <div className="container footer-container">
        <div className="info">
          <h2>Dev<span className="devx-footer-x">X</span></h2>
          <div className="icons">
            <Anchor ext href={Config.url.social.fb}><img src="/assets/facebook_icon.png"/></Anchor>
            <Anchor ext href={Config.url.social.gh}><img src="/assets/github_icon.png"/></Anchor>
            <Anchor ext href={Config.url.social.em}><img src="/assets/mail_icon.png"/></Anchor>
            <Anchor ext href={Config.url.social.yt}><img src="/assets/youtube_icon.png"/></Anchor>
          </div>
          <small>Copyright &copy; 2017 UCLA DevX</small>
        </div>
      </div>
      <img className="moon" src="/assets/moon.png"/>
    </footer>;
  }
}

export default Footer
