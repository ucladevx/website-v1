import React from 'react';
import {render} from 'react-dom';

class Button extends React.Component {
  render(){
    let k = ["button"];
    if(this.props.cta){
      k.push("call-to-action");
    }
    return <button className={k.join(" ")}>
      {this.props.children}
    </button>;
  }
}

export default Button
