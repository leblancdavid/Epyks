import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './home/Home';
import { App } from './App';
import { Login } from './authentication/Login';
import EnsureLoggedInContainer from './authentication/EnsureLoggedInContainer';

export class Routes extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={App}>
            <Route path='login' component={Login}/>
            <Route component={EnsureLoggedInContainer}>
              <Route path='home' component={Home}/>
            </Route>
          </Route>
        </Switch>
      </main>
    );
  }
}
