import React from 'react';
import {Link} from 'react-router-dom';

import Config from 'config';

import Header from 'header';
import Footer from 'footer';
import Section from 'section';
import Button from 'button';
import Clock from 'clock';

import {Anchor} from 'misc';

const Class = ({id, name, stylized, blurb, invert, breakStyle }) => {
  return (
    <Section invert={invert} background={breakStyle} >
        <div className="grid">
          {!invert && (<div className="col md-12 image-aside">
              <img src="/assets/initiatives.png" />
            </div>) 
          }
          <div className="col md-12">
            <div className="blurb">
              <div className="inner">
                <div className="head">
                    <h1 className="title">{name}</h1>
                    <h3>{stylized}</h3>
                </div>
                <p>{blurb}</p>
                <Link to={`/projects/${id}`} className="no-style"><Button cta>Projects</Button></Link>
                <Link to={`/team/${id}`} className="no-style"><Button cta>Team</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
  )
}

class Alumni extends React.Component {
  render(){
    let classes = []

    for (let i = 0; i < Config.years.length-1; i++) {
      const id = Config.years[i];
      const year = Config.yearnames[id];

      const invert = (i+1) % 2 === 0 ? true : false;
      let breakStyle = invert ? "/assets/home_bg.png" : "/assets/about_us_bg.png";

      if (i === Config.years.length-2 && ((Config.years.length-1) % 2 === 0)) {
        breakStyle = '';
      } 

      classes.push((
        <Class id={id} name={year.name} stylized={year.stylized} blurb={year.blurb} invert={invert} breakStyle={breakStyle} />
      ));
    }

    return <div>
      <Header background="/assets/home_bg.png">
        <div className="grid">
          <div className="col sm-12">
            <div className="title">
              <div className="inner">
                <h1>Dev<span className="devx-x">X</span> Alumni</h1>
              </div>
            </div>
          </div>
          <div className="col md-12 image-aside">
              <img src="/assets/join_team.png" />
            </div>
        </div>
      </Header>
      {classes}
      <Footer/>
    </div>;
  }
}

export default Alumni
