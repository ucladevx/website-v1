import React from 'react';
import {render} from 'react-dom';

import Button from 'button';

class Section extends React.Component {
  render(){
    let k2 = {

    };
    return <section id={this.props.id} className="section" style={{
      color: this.props.invert ? '#FFFFFF' : 'inherit',
    }}>
      <div className="section-container" style={{
        backgroundColor: this.props.invert ? 'transparent' : '#FBFBFF',
      }}>
        <div className="container">
          {this.props.children}
        </div>
      </div>
      {this.props.background &&
        <img className="section-divider" src={this.props.background}/>
      }
    </section>;
  }
}

export default Section
