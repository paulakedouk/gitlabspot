import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import logo from '../images/logo.svg';
// import Dashboard from './Dashboard';

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White'];

const menuProps = {
  desktop: true,
  disableAutoFocus: true
};

const btn = {
  minWidth: 110,
  marginTop: 70
};

const paper = {
  width: 500,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

export default class Login extends Component {
  login() {
    console.log('got clicked================');
    fetch('/signup', {
      method: 'GET',
      headers: new Headers()
    }).then(data => console.log('got things =======', data));
  }
  render() {
    return (
      <div className="app-login">
        <Paper style={paper} zDepth={1} rounded={false} className="login-session">
          <img src={logo} alt="Logo" />
          <p>Welcome back! Please login to your account.</p>
          <div className="row">
            <div className="login-username col-md-12">
              <AutoComplete hintText="Username" dataSource={colors} menuProps={menuProps} />
            </div>
            <div className="login-password col-md-12">
              <AutoComplete hintText="Password" dataSource={colors} menuProps={menuProps} />
            </div>
          </div>
          <div className="row">
            <div className="login-btn col-md-6">
              <RaisedButton label="Login" primary={true} style={btn} onClick={this.login} />
            </div>
            <div className="sign-up-btn col-md-6">
              <RaisedButton label="Sign up" primary={true} style={btn} />
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}
