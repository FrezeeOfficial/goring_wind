import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { userContext } from './context/auth-context';
import { ApiProvider } from './context/api-context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './pages/HomePage';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      api: null,
      user: null,
      error: null,
      isLoaded: false
    };
  }

  logout() {
    this.setState({user: {}});
  }

  componentDidMount() {
    fetch("http://192.168.0.100:5000")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            api: {token: result.newToken}
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  
    render () {
      const { error, isLoaded, api } = this.state;

      if (error) {
        return(
          <div>Goring wind is down becuase of bugs, please come back later</div>
        )
      } else if (!isLoaded){
        return (
        <div>Loading...</div>
        )
      }else {
    return (
      <ApiProvider value={api}>
        <userContext.Provider value={this.state.user}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={HomePage} />
            </Switch>
          </BrowserRouter>
        </userContext.Provider>
      </ApiProvider>
    )
  }
}
}

export default App;
