import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Main } from './component'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/main" component={ Main } />
        </div>
      </Router>
    );
  }
}

export default App;
