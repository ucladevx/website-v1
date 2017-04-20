import React from 'react';

import Config from 'config';

import Header from 'header';
import Footer from 'footer';
import Section from 'section';
import Title from 'title';
import PersonCard from 'person';

import {Anchor} from 'misc';


class Team extends React.Component {
  render(){
    return <div>
      <Title invert><h1>Team</h1></Title>
      <Section invert column>
        <div className="grid">
          <div className="col sm-4">
            <PersonCard>
              <img className="profile-picture" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/16195584_772632919555146_6054727061873070084_n.jpg?oh=6591677e5c3beca88d15d9a797126b8a&oe=59876FC8"/>
              <h4>Kevin Wang</h4>
              <h5>Product Manager</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </PersonCard>
          </div>
          <div className="col sm-4">
            Two
          </div>
          <div className="col sm-4">
            Three
          </div>
          <div className="col sm-4">
            Four
          </div>
        </div>
        <div className="grid">
          <div className="col sm-4">
            One
          </div>
          <div className="col sm-4">
            Two
          </div>
          <div className="col sm-4">
            Three
          </div>
          <div className="col sm-4">
            Four
          </div>
        </div>
      </Section>
      <Footer/>
    </div>;
  }
}

export default Team
