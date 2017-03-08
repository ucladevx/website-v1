import React from 'react';
import {render} from 'react-dom';

const scrollTo = (id)=>{
  
};

class Navbar extends React.Component {
  render(){
    return <div>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="left">
              <div className="logo">
                <a className="no-style" href="#">
                  <img src="/assets/logo.png"/>
                </a>
              </div>
            </div>
            <div className="right">
              <div className="item"><a className="no-style" href="#">About</a></div>
              <div className="item"><a className="no-style" href="#">Initiatives</a></div>
              <div className="item"><a className="no-style" href="#">Join Us</a></div>
              <div className="item"><a className="no-style apply-text" href="#">Apply ></a></div>
            </div>
          </div>
        </div>
      </nav>
      <div className="nav-spacer"></div>
    </div>;
  }
}

export default Navbar
