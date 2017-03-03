import React from 'react';
import {render} from 'react-dom';

class Container extends React.Component {
  render(){
    return <div className="container">
      {this.props.children}
    </div>;
  }
}

export {
  Container
}
