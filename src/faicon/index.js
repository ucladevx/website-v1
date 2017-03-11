import React from 'react';

class FaIcon extends React.Component {
  render(){
    return <span className="faicon" style={{
      color: this.props.invert ? '#FFFFFF' : '#000000',
      borderColor: this.props.invert ? '#FFFFFF' : '#000000',
    }}>
      <i className={"fa fa-" + this.props.icon}></i>
    </span>;
  }
}

export default FaIcon
