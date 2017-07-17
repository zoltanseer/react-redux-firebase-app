import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import './App.css';

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Routes/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
