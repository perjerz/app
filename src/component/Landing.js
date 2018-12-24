import React, { Component } from 'react';
import landing from '../assets/new_02.png'
import { Link } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
        <div className="App">
            <Link to="/home">
                <img
                    src={landing}
                    alt=""/>
            </Link>
        </div>
    );
  }
}

export default Landing;