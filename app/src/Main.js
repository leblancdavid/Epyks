import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './home/Home';
import { Schedule } from './schedule/Schedule';
import { Roster } from './roster/Roster';

export class Main extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/roster' component={Roster}/>
          <Route path='/schedule' component={Schedule}/>
        </Switch>
      </main>
    );
  }
}
