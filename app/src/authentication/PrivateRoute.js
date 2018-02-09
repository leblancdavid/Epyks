import React, { Component } from 'react';
import { 
  Route,
  Redirect
} from 'react-router-dom'
import { AuthenticationService } from './AuthenticationService';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthenticationService.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
       }} />
  )} />
)