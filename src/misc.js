import React from 'react';

class FaIcon extends React.Component {
  render(){
    return <span className="fa-stack">
      <i className="fa fa-circle-thin fa-stack-2x"></i>
      <i className={"fa fa-" + this.props.icon +" fa-stack-1x"}></i>
    </span>;
  }
}

export {
  FaIcon
}
