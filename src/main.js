import 'main.scss';

import React from 'react';
import {render} from 'react-dom';

import Navbar from 'navbar';
import Header from 'header';

class App extends React.Component {
  render(){
    return <div>
      <Navbar />
      <Header />
      Hello World!
    </div>;
  }
}

render(
  <App />,
  document.getElementById('mount')
);
