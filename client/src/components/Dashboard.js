import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Tabs, Tab } from 'material-ui/Tabs';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return <FlatButton {...this.props} label="Login" />;
  }
}

const tabs = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const Logged = props => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Dashboard extends Component {
  state = {
    logged: true
  };

  handleChange = (event, logged) => {
    this.setState({ logged: logged });
  };

  render() {
    return (
      <div>
        <div>
          <Toggle
            label="Logged"
            defaultToggled={true}
            onToggle={this.handleChange}
            labelPosition="right"
            style={{ margin: 20 }}
          />
          <AppBar
            title="Title"
            iconElementLeft={
              <IconButton>
                <NavigationClose />
              </IconButton>
            }
            iconElementRight={this.state.logged ? <Logged /> : <Login />}
          />
        </div>
        <div>
          <Tabs>
            <Tab label="Item One">
              <div>
                <h2 style={tabs.headline}>Tab One</h2>
                <p>This is an example tab.</p>
                <p>You can put any sort of HTML or react component in here. It even keeps the component state!</p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Dashboard;
