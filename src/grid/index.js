import React from 'react';
import {render} from 'react-dom';

class Container extends React.Component {
  render(){
    let k = ['container'];
    if(this.props.constrained){
      k.push('constrained');
    }
    return <div className={k.join(' ')}>
      {this.props.children}
    </div>;
  }
}

export {
  Container
}
