import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
  render(){
    return <header className="header">
      <div className="container header-container">
        {this.props.children}
      </div>
      {this.props.background &&
        <img className="header-divider" src={this.props.background}/>
      }
    </header>;
  }
}

export default Header
