import React from 'react';
import {Link} from 'react-router-dom';

import Config from 'config';

import Header from 'header';
import Footer from 'footer';
import Section from 'section';
import Button from 'button';
import Clock from 'clock';

import {Anchor} from 'misc';

class DemoDay extends React.Component {
  render(){
    return <div>
      <Header>
        <div className="grid">
          <div className="col sm-12">
            <div className="title">
              <div className="inner">
                <h1>Demo<span className="devx-x">Day</span></h1>
                <h4>Tuesday, June 6th | 7 pm</h4>
                <Anchor ext href={Config.url.demoday.rsvp}><Button cta>RSVP</Button></Anchor>
                <Anchor ext href={Config.url.demoday.sponsor}><Button cta>Sponsor</Button></Anchor>
              </div>
            </div>
          </div>
          <div className="col sm-12">
            <Clock timeUntil={Config.demoday.time}/>
          </div>
        </div>
      </Header>
      <Section invert id="demoday-about">
        <div className="grid">
          <div className="col md-12">
            <div className="blurb">
              <div className="inner">
                <div className="head">
                  <h1 className="title">What?</h1>
                </div>
                <p>Demo Day is our quarterly event to showcase the cool projects we’re working on. It’s the chance for all of you to come and get involved in DevX!</p>
                <p>Watch us pitch 8 incredible projects this quarter, tackling problems from online dating to student government funding. Learn more by clicking below!</p>
                <Link to="/projects" className="no-style"><Button cta>Projects</Button></Link>
              </div>
            </div>
          </div>
          <div className="col md-12 image-aside">
            <img src="/assets/demoday1.png"/>
          </div>
        </div>
      </Section>
      <Section invert id="demoday-schedule">
        <div className="grid">
          <div className="col md-12 image-aside">
            <img src="/assets/demoday2.png"/>
          </div>
          <div className="col md-12">
            <div className="blurb">
              <div className="inner">
                <div className="head">
                  <h1 className="title">Schedule</h1>
                </div>
                <p>Explore our schedule and map out your demo day experience.</p>
                <p>We will have live demos of all the projects, as well a networking mixer at the end to give everybody a chance to interact with the project participants. Whether you want to observe, or  actively participate come join us for Demo Day!</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section invert id="demoday-sponsors">
        <div className="grid">
          <div className="col md-12">
            <div className="blurb">
              <div className="inner">
                <div className="head">
                  <h1 className="title">Sponsors</h1>
                </div>
                <p>Demo Day is powered by our incredible sponsors, without whom we could not pull of this event.</p>
                <p>If you’re an entity outside UCLA, and are interested in participating. Please read our sponsorship package, and  consider supporting our organization. Thank You!</p>
                <Anchor ext href={Config.url.demoday.sponsor}><Button cta>Sponsor Us</Button></Anchor>
              </div>
            </div>
          </div>
          <div className="col md-12 image-aside">
            <img src="/assets/demoday3.png"/>
          </div>
        </div>
      </Section>
      <Footer/>
    </div>;
  }
}

export default DemoDay
