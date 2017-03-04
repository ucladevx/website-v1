import React from 'react';
import {render} from 'react-dom';

class Button extends React.Component {
  render(){
    return <button className="button">
      {this.props.children}
    </button>;
  }
}

export default Button
