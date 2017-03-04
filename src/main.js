import 'main.scss';

import React from 'react';
import {render} from 'react-dom';

import Navbar from 'navbar';
import Header from 'header';
import Section from 'section';

class App extends React.Component {
  render(){
    return <div>
      <Navbar />
      <Header />
      <Section>
        Section 1
      </Section>
      <Section>
        Section 2
      </Section>
      <Section>
        Section 3
      </Section>
      Hello World!
    </div>;
  }
}

render(
  <App />,
  document.getElementById('mount')
);
