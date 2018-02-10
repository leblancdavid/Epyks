import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './home/Home';
import { Login } from './authentication/Login';
import { PrivateRoute } from './authentication/PrivateRoute';


export class Routes extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/home' component={Home}/>
        </Switch>
      </main>
    );
  }
}
