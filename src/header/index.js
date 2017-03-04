import React from 'react';
import {render} from 'react-dom';

import Button from 'button';

class Header extends React.Component {
  render(){
    return <header className="header">
      <div className="container header-container">
        <div>
          <h1>Dev<span className="devx-header-x">X</span></h1>
          <h3>Moonshots for UCLA</h3>
          <Button>Mailing List</Button>
          <Button>Apply</Button>
        </div>
        <div><h2>&lt;Image&gt;</h2></div>
      </div>
    </header>;
  }
}

export default Header
