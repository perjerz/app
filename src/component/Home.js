import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Topnav from './Topnav';

class Main extends Component {
  state = {
    start: '',
    target: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  render() {
    return (
      <div className="App">
        <Topnav />
        <form noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Current Location"
          value={this.state.name}
          onChange={this.handleChange('start')}
          margin="auto"
          width="100%"
        />
        <TextField
          id="standard-name"
          label="Destination"
          value={this.state.name}
          onChange={this.handleChange('target')}
          margin="auto"
          width="100%"
        />
        <Link to="/list">
          <Button variant="contained" color="primary">
            Find ways!
          </Button>
        </Link>
        </form>
      </div>
    );
  }
}

export default Main;