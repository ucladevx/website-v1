import React from 'react';

import Config from 'config';

import Header from 'header';
import Footer from 'footer';
import Section from 'section';
import Title from 'title';

import {Anchor} from 'misc';


class Projects extends React.Component {
  render(){
    return <div>
      <Title invert><h1>Projects</h1></Title>
      <Section invert>
        <div className="grid">
          <div className="col md-12">
            <div className="blurb">
              <div className="inner">
                <div className="head">
                  <h1 className="title">Project 1</h1>
                </div>
                <p>Have you ever felt that all you were learning at UCLA was theory, with little opportunities to build out practical applications?</p>
                <p>DevX is a brand new program, launched by UCLA ACM, dedicated to solving that very problem! Build out real-world projects to help tackle pressing problems frustrating the UCLA community, grow your technical skills by pairing up with experienced students, and build a network that lasts beyond graduation.</p>
              </div>
            </div>
          </div>
          <div className="col md-12 image-aside">
            <img src="/assets/about_us.png"/>
          </div>
        </div>
      </Section>
      <Section invert>
        <div className="grid">
          <div className="col md-12 image-aside">
            <img src="/assets/initiatives.png"/>
          </div>
          <div className="col md-12">
            <div className="blurb">
              <div className="inner">
                <div className="head">
                  <h1 className="title">Project 2</h1>
                </div>
                <p>Want to build a revamped test bank, or maybe the next Bruinwalk? DevX will focus on creating things that improve the college experience for UCLA students, and is looking forward to building the unique projects that you propose.</p>
                <p>Every quarter we will pick the most popular ideas, and develop a solution that will then get released to the public. Submit your own requests for problems you’re facing, we welcome ideas from everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section invert>
        <div className="grid">
          <div className="col md-12">
            <div className="blurb">
              <div className="inner">
                <div className="head">
                  <h1 className="title">Project 3</h1>
                </div>
                <p>We are looking to hire talented developers, designers, and product managers every quarter! The interview process will be a mix of technical and behavioral questions, but will largely depend on your passion for the club.</p>
                <p>If you are interested in joining our DevX team, fill out the application form. <strong>Applications are due by Tuesday, April 4th at 11:59 PM.</strong></p>
              </div>
            </div>
          </div>
          <div className="col md-12 image-aside">
            <img src="/assets/join_team.png"/>
          </div>
        </div>
      </Section>
      <Footer/>
    </div>;
  }
}

export default Projects
