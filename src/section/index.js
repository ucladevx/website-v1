import React from 'react';
import {render} from 'react-dom';

import Button from 'button';

class Section extends React.Component {
  render(){
    let k = ['section'];
    if(this.props.large){
      k.push('large');
    }
    return <section id={this.props.id} className={k.join(' ')} style={{
      color: this.props.invert ? '#FFFFFF' : 'inherit',
    }}>
      <div className="section-container" style={{
        backgroundColor: this.props.invert ? 'transparent' : '#FBFBFF',
      }}>
        <div className={this.props.column ? "container column" : "container"}>
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
