import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import Config from 'config';

import Header from 'header';
import Footer from 'footer';
import Section from 'section';
import Title from 'title';
import Button from 'button';

import {Anchor} from 'misc';

class Proj extends React.Component {
  render(){
    if(this.props.flip){
      return <Section invert>
        <div className="grid">
          <div className="col md-12 image-aside">
            <img src={this.props.image}/>
          </div>
          <div className="col md-12">
            <div className="blurb">
              <div className="inner">
                <div className="head">
                  <h1 className="title">{this.props.name}</h1>
                </div>
                <p>{this.props.description}</p>
                {this.props.url && <Anchor ext href={this.props.url}><Button cta>{this.props.urlText}</Button></Anchor>}
              </div>
            </div>
          </div>
        </div>
      </Section>;
    }
    return <Section invert>
      <div className="grid">
        <div className="col md-12">
          <div className="blurb">
            <div className="inner">
              <div className="head">
                <h1 className="title">{this.props.name}</h1>
              </div>
              <p>{this.props.description}</p>
              {this.props.url && <Anchor ext href={this.props.url}><Button cta>{this.props.urlText}</Button></Anchor>}
            </div>
          </div>
        </div>
        <div className="col md-12 image-aside">
          <img src={this.props.image}/>
        </div>
      </div>
    </Section>;
  }
}


class Projects extends React.Component {
  render(){
    const year = this.props.match.params.year;
    const {stylized} = Config.yearnames[year];
    const proj = Config.projects[year];
    const k = [];
    for(let i = 0; i < proj.length; i++){
      if(i % 2 == 0) {
        k.push(<Proj {...proj[i]}/>);
      } else {
        k.push(<Proj flip {...proj[i]}/>);
      }
    }
    return <div>
      <Title invert><h1>Projects {stylized}</h1></Title>
      {k}
      <Footer/>
    </div>;
  }
}

Projects = withRouter(Projects);

export default Projects
