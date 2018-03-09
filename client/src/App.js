import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './images/logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500
  }
});

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Login />
        </MuiThemeProvider>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
