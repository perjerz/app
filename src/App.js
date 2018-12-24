import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom'
import About from './About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router path="/about" component={ About } />
      </div>
    );
  }
}

export default App;
