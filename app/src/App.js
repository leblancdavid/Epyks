import React, { Component } from 'react';
import './App.css';
import { Header } from './Header';
import { Routes } from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
