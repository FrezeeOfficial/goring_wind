import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { userContext } from './context/auth-context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './pages/HomePage';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  logout() {
    this.setState({user: {}});
  }


  render () {
    return (
      <userContext.Provider value={this.state.user}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </userContext.Provider>
    )
  }
}

export default App;
