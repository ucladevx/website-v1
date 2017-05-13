import React from 'react';

class PersonCard extends React.Component {
  render() {
    return <div className="person-card">
      {this.props.children}
    </div>;
  }
}

class Person extends React.Component {
  render() {
    return <div className="col sm-8 md-6">
      <PersonCard>
        <img className="profile-picture" src={this.props.image}/>
        <h4>{this.props.name}</h4>
        <h5>{this.props.title}</h5>
        <p>{this.props.bio}</p>
      </PersonCard>
    </div>;
  }
}

export default Person
