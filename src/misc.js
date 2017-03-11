import React from 'react';

class Anchor extends React.Component {
  render(){
    let k = {};
    if(this.props.ext){
      k = {
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }
    return <a className="no-style" {...k} href={this.props.href}>
      {this.props.children}
    </a>;
  }
}

export {
  Anchor,
}
