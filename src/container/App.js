import React, { Component } from 'react';
import Layout from '../container/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../component/Welcome/Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </div>
    )
  }
}


export default App;
