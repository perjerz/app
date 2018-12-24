import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, List, Detail, CreateRoute } from './component'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ Home } />
          <Route exact path="/list" component={ List } />
          <Route exact path="/detail" component={ Detail } />
          <Route exact path="/create" component={ CreateRoute } />
        </div>
      </Router>
    );
  }
}

export default App;
