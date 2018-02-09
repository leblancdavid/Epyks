import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './home/Home';
import { Login } from './authentication/Login';
import { PrivateRoute } from './authentication/PrivateRoute';

import { Schedule } from './schedule/Schedule';

export class Routes extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/schedule' component={Schedule}/>
        </Switch>
      </main>
    );
  }
}
