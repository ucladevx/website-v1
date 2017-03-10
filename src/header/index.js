import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
  render(){
    return <header className="header">
      <div className="container header-container">
        {this.props.children}
      </div>
      <img className="header-divider" src="/assets/home_bg.png"/>
    </header>;
  }
}

export default Header
