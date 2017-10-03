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
    const j = ["no-style"];
    if(this.props.className){
      j.push(this.props.className);
    }

    return <a className={j.join(" ")} {...k} href={this.props.href}>
      {this.props.children}
    </a>;
  }
}

export {
  Anchor,
}
