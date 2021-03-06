import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Player } from './Player';
import { FullRoster } from './FullRoster';

export class Roster extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/roster' component={FullRoster}/>
        <Route path='/roster/:number' component={Player}/>
      </Switch>
    );
  }
}
