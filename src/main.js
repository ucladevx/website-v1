import 'main.scss';

import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Navbar from 'navbar';

import Home from 'container/home';
import Team from 'container/team';
import Projects from 'container/projects';
import DemoDay from 'container/demoday';
import Alumni from 'container/alumni';

class App extends React.Component {
  render(){
    return <div>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/team/:year" component={Team}/>
            <Route path="/projects/:year" component={Projects}/>
            <Route path="/alumni" component={Alumni}/>
            <Route path="/demoday" component={DemoDay}/>
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
