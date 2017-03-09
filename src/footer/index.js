import React from 'react';
import {render} from 'react-dom';

class Footer extends React.Component {
  render(){
    return <footer className="footer">
      <div className="container footer-container">
        <div className="info">
          <h2>Dev<span className="devx-footer-x">X</span></h2>
          <div className="icons">
            <a href="#"><img src="/assets/facebook_icon.png"/></a>
            <a href="#"><img src="/assets/github_icon.png"/></a>
            <a href="#"><img src="/assets/mail_icon.png"/></a>
            <a href="#"><img src="/assets/youtube_icon.png"/></a>
          </div>
          <small>Copyright &copy; 2017 UCLA DevX</small>
        </div>
      </div>
      <img className="moon" src="/assets/moon.png"/>
    </footer>;
  }
}

export default Footer
