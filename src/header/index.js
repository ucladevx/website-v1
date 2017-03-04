import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
  render(){
    return <header className="header">
      <div className="container header-container">
        {this.props.children}
      </div>
    </header>;
  }
}

export default Header
