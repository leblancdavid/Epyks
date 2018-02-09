import React, { Component } from 'react';
import { PlayerAPI } from './PlayerAPI';
import { Link } from 'react-router-dom';

export class FullRoster extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            PlayerAPI.all().map(p => (
              <li key={p.number}>
                <Link to={`/roster/${p.number}`}>{p.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
