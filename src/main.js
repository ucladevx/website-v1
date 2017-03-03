import 'main.scss';

import React from 'react';
import {render} from 'react-dom';

import Navbar from 'navbar';

class App extends React.Component {
  render(){
    return <div>
      <Navbar />
      Hello World!
    </div>;
  }
}

render(
  <App />,
  document.getElementById('mount')
);
