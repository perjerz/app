import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class List extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Brand</a>
            </Navbar.Brand>
          </Navbar.Header>
          
          <Nav pullRight>
            <NavItem>
              David
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default List;