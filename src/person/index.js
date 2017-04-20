import React from 'react';

class PersonCard extends React.Component {
  render() {
    return <div className="person-card">
      {this.props.children}
    </div>;
  }
}

export default PersonCard
