/*

CHALLENGE:
You will have a button. Fetch information about some user from the gitHub API 
when you click on it
When you have the response, the button must be "hidden",
and the user information must be "visible"
Do another component to display the name and the description of all of the repos
related to that user
We estimate each to a challenge to take up to three or four days,
working an hour a day after work, hence nothing too demanding.

*/

import React, { Component } from 'react';
import logo from './github_logo.svg';
import './App.css';
import { fetchUserWithRepos } from './api';
import { UserInformation } from './components';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      userLoaded: false,
    };

    this.getUserInformation = this.getUserInformation.bind(this)
  }

  getUserInformation() {
    const username = 'nersoh';

    fetchUserWithRepos(username)
      .then(response => this.setState({ user: response, userLoaded: true }));
  }

  render() {
    const { user, userLoaded } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-intro">
          { !userLoaded &&
            <div> 
              <p>Click on the button to fetch the user information</p>
              <button onClick={this.getUserInformation}>
                Click me
              </button>
            </div>
          }
        </div>
        { userLoaded && <UserInformation user={user} /> }
      </div>
    );
  }
}

export default App;
