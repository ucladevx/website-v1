import React from 'react';

class Title extends React.Component {
  render(){
    return <div className="title-section" style={{
      color: this.props.invert ? '#FFFFFF' : 'inherit',
    }}>
      {this.props.children}
    </div>;
  }
}

export default Title
