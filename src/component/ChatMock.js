import React, { Component } from 'react';
import chatmock from '../assets/05.png'
import { Link } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
        <div className="App">
            <Link to="/home">
                <img
                    src={chatmock}
                    alt=""/>
            </Link>
        </div>
    );
  }
}

export default Landing;