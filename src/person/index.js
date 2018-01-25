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
    const github = this.props.github && 'https://github.com/' + this.props.github || '';

    return <div className="col sm-8 md-6">
      <PersonCard>
        <img className="profile-picture" src={this.props.image || '/assets/profiles/LogoFrame.png'}/>
        <h4>{this.props.name}</h4>
        <h5>{this.props.title}</h5>
        {
          this.props.bio && (<p>{this.props.bio}</p>)
        }
        {
          this.props.github && (<a href={github}>{this.props.github}</a>)
        }
      </PersonCard>
    </div>;
  }
}

export default Person
