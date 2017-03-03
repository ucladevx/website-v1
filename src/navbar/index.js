import React from 'react';
import {render} from 'react-dom';

class Navbar extends React.Component {
  render(){
    return <div>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="left">
            DevX
            </div>
            <div className="right">
            <div className="item">About</div>
            <div className="item">Initiatives</div>
            <div className="item">Join Team</div>
            <div className="item">Apply</div>
            </div>
          </div>
        </div>
      </nav>
      <div className="nav-spacer"></div>
    </div>;
  }
}

export default Navbar
