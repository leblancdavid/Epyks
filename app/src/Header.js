import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
export class Header extends Component {
  render() {
    return (
    <header>
      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/schedule'>Schedule</Link></li>
        </ul>
      </nav>
    </header>
    );
  }
}