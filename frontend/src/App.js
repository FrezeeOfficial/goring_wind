import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { userContext } from './context/auth-context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './pages/HomePage';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null,
      isLoaded: false
    };
  }

  logout() {
    this.setState({user: {}});
  }

  componentDidMount() {
      this.setState({isLoaded: true});
    }
  
    render () {
      const { error, isLoaded } = this.state;

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
}

export default App;
