import React from 'react';

import Config from 'config';

import Header from 'header';
import Footer from 'footer';
import Section from 'section';
import {Container} from 'grid';
import Title from 'title';
import Person from 'person';

import {Anchor} from 'misc';


class Team extends React.Component {
  render(){
    const k = [];
    const team = Config.team.year2017;
    for(let i = 0; i < team.length; i++){
      k.push(<Person {...team[i]}/>);
    }

    return <div>
      <Title invert><h1>Team</h1></Title>
      <Section invert column>
        <Container constrained>
          <div className="grid align-start">
            {k}
          </div>
        </Container>
      </Section>
      <Footer/>
    </div>;
  }
}

export default Team
