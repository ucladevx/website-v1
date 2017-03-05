import React from 'react';
import {render} from 'react-dom';

class Navbar extends React.Component {
  render(){
    return <div>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="left">
              <img src="/assets/logo.png"/>
            </div>
            <div className="right">
              <div className="item"><a className="no-style" href="#">About</a></div>
              <div className="item"><a className="no-style" href="#">Initiatives</a></div>
              <div className="item"><a className="no-style" href="#">Join Team</a></div>
              <div className="item"><a className="no-style" href="#">Apply</a></div>
            </div>
          </div>
        </div>
      </nav>
      <div className="nav-spacer"></div>
    </div>;
  }
}

export default Navbar
