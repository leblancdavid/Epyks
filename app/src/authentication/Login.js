import React, { Component } from 'react';
import { AuthenticationService } from './AuthenticationService';
import { 
  Redirect
} from 'react-router-dom'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    }
  }

  login = () => {
    AuthenticationService.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/home'} };
    const { redirectToReferrer } = this.state;
    if(redirectToReferrer === true) {
      return <Redirect to={from}/>;
    }
    return(
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
