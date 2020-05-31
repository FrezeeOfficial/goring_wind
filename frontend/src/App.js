import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { userContext } from './context/auth-context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './pages/HomePage';

import Background from './components/background';
import { ThemeProvider } from 'styled-components';
import { DynamicStyles } from './components/DynamicStyles';
import { Default, Morning, Midday, Evening } from './components/themes'; 

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      theme: Default,
      user: null,
      error: null,
      isLoaded: false
    };
  }

  logout() {
    this.setState({user: {}});
  }

  setTimeOfDay(){
    var d = new Date();
    var n = d.getHours();

    if (n < 12) {
      this.setState({theme: Morning})
     } if (n > 12) {
      this.setState({theme: Midday})
     } if ( n >= 20) {
      this.setState({theme: Evening})
     } else {
      this.setState({theme: Default})
     }
     
     this.setState({theme: Evening})

  }

  componentDidMount() {
      this.setState({isLoaded: true});
      this.setTimeOfDay();
  }
  
  render () {
    
  const { error, isLoaded } = this.state;

  if (error) {
  return(
        <div>Goring wind is down because of bugs, please come back later</div>
      )
    } else if (!isLoaded){
      return (
      <span>errr</span>
      )
    }else {
   return (
      <ThemeProvider theme={this.state.theme}>
        <>
        <DynamicStyles />

        <Background>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={HomePage} />
            </Switch>
          </BrowserRouter>
        </Background>
        </>
      </ThemeProvider>
    )
  }
}
}

export default App;
