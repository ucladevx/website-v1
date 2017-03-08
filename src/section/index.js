import React from 'react';
import {render} from 'react-dom';

import Button from 'button';

class Section extends React.Component {
  render(){
    return <section className="section" style={{
      backgroundImage: 'url('+ this.props.background + ')',
      color: this.props.invert ? '#FFFFFF' : 'inherit',
    }}>
      <div className="container section-container">
        {this.props.children}
      </div>
    </section>;
  }
}

export default Section
