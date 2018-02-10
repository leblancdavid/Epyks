import React, { Component } from 'react';
import { AuthenticationService } from './AuthenticationService';
import { 
  Redirect
} from 'react-router-dom'
import { Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      username: "",
      password: ""
    }
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
  }

  login = () => {
    AuthenticationService.authenticate(this.state.username, this.state.password, () => {
      this.setState({ redirectToReferrer: true });
    })
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  onPasswordChanged(event) {
    this.setState({password: event.target.value});
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/home'} };
    const { redirectToReferrer } = this.state;
    if(redirectToReferrer === true) {
      return <Redirect to={from}/>;
    }
    return(
      <div>
        <Card>
        <CardBody>
          <CardTitle>Login</CardTitle>
          <CardText>
            <InputGroup>
              <Input placeholder="username" value={this.state.username} 
                onChange={this.onUsernameChange}/>
              <Input placeholder="password" value={this.state.password}
                onChange={this.onPasswordChange}/>
            </InputGroup>
          </CardText>
          <Button color="primary" onClick={this.login}>Login</Button>
        </CardBody>
        </Card>
      </div>
    );
  }
}
