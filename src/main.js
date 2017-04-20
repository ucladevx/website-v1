import 'main.scss';

import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Navbar from 'navbar';

import Home from 'container/home';
import Team from 'container/team';
import Projects from 'container/projects';

class App extends React.Component {
  render(){
    return <div>
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/team" component={Team}/>
            <Route path="/projects" component={Projects}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    </div>;
  }
}

render(
  <App />,
  document.getElementById('mount')
);
