import 'main.scss';

import React from 'react';
import {render} from 'react-dom';

import Navbar from 'navbar';
import Header from 'header';
import Footer from 'footer';
import Section from 'section';
import Button from 'button';

class App extends React.Component {
  render(){
    return <div>
      <Navbar />
      <Header>
        <div>
          <h1>Dev<span className="devx-header-x">X</span></h1>
          <h3>Moonshots for UCLA</h3>
          <Button>Mailing List</Button>
          <Button>Apply</Button>
        </div>
        <div><h2>&lt;Image&gt;</h2></div>
      </Header>
      <Section>
        <div className="blurb">
          <h1 className="title">About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet felis urna. Mauris id fringilla sapien. Nam eleifend malesuada tristique. Suspendisse maximus interdum posuere. In ipsum sapien, hendrerit non dapibus et, luctus eu sem. Suspendisse sed ipsum erat.</p>
          <p>Aenean maximus purus ultricies libero fermentum, efficitur facilisis dolor pharetra. Praesent et magna ac nibh ultrices efficitur. Proin congue euismod lobortis. Donec eget egestas purus. Sed dignissim nunc arcu, ullamcorper viverra libero interdum convallis. Pellentesque id interdum lacus. Praesent tempus, enim vel finibus porttitor, sem massa scelerisque justo, id suscipit lorem mauris vel sem.</p>
        </div>
        <div><img src="/assets/about_us.png"/></div>
      </Section>
      <Section>
        <div><img src="/assets/initiatives.png"/></div>
        <div className="blurb">
          <h1 className="title">Initiatives</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet felis urna. Mauris id fringilla sapien. Nam eleifend malesuada tristique. Suspendisse maximus interdum posuere. In ipsum sapien, hendrerit non dapibus et, luctus eu sem.</p>
          <p>Aenean maximus purus ultricies libero fermentum, efficitur facilisis dolor pharetra. Praesent et magna ac nibh ultrices efficitur. Proin congue euismod lobortis. Donec eget egestas purus. Sed dignissim nunc arcu, ullamcorper viverra libero interdum convallis. Praesent tempus, enim vel finibus porttitor, sem massa scelerisque justo, id suscipit lorem mauris vel sem.</p>
        </div>
      </Section>
      <Section>
        <div className="blurb">
          <h1 className="title">Join Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet felis urna. Mauris id fringilla sapien. Nam eleifend malesuada tristique. Suspendisse maximus interdum posuere. In ipsum sapien, hendrerit non dapibus et, luctus eu sem. Suspendisse sed ipsum erat.</p>
          <p>Aenean maximus purus ultricies libero fermentum, efficitur facilisis dolor pharetra. Praesent et magna ac nibh ultrices efficitur. Proin congue euismod lobortis. Donec eget egestas purus. Sed dignissim nunc arcu, ullamcorper viverra libero interdum convallis. Pellentesque id interdum lacus.</p>
          <p>Praesent tempus, enim vel finibus porttitor, sem massa scelerisque justo, id suscipit lorem mauris vel sem.</p>
        </div>
        <div><img src="/assets/join_team.png"/></div>
      </Section>
      <Footer>
        <div className="info">
          <h1>Dev<span className="devx-footer-x">X</span></h1>
          <h6>Copyright &copy; 2017 UCLA DevX</h6>
          <div className="icons">
            <a href="#"><img src="/assets/facebook_icon.png"/></a>
            <a href="#"><img src="/assets/github_icon.png"/></a>
            <a href="#"><img src="/assets/mail_icon.png"/></a>
            <a href="#"><img src="/assets/youtube_icon.png"/></a>
          </div>
        </div>
      </Footer>
    </div>;
  }
}

render(
  <App />,
  document.getElementById('mount')
);
