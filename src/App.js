import React, { Component } from 'react';
import './App.scss';
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
