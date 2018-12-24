import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import '../App.css';
import Button from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

class Topnav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Navbar className="bgnav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Dashed Way</a>
            </Navbar.Brand>
          </Navbar.Header>
          
          <Nav pullRight>
            <NavItem>
              <Link to="/create">
                <Button size="small">
                  <AddIcon />
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Topnav;