import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="login-session">
          <img src={logo} alt="Logo" />
          <p>Welcome back! Please login to your account.</p>
        </div>
      </div>
    );
  }
}

export default App;
