import React from 'react';

class FaIcon extends React.Component {
  render(){
    return <span className="fa-stack">
      <i className="fa fa-circle-thin fa-stack-2x"></i>
      <i className={"fa fa-" + this.props.icon + " fa-stack-1x"}></i>
    </span>;
  }
}

class Anchor extends React.Component {
  render(){
    let k = {};
    if(this.props.ext){
      k = {
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }
    return <a {...k} href={this.props.href}>
      {this.props.children}
    </a>;
  }
}

export {
  FaIcon, Anchor,
}
