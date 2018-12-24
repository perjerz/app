import React, { Component } from 'react';
import bus from '../assets/bus.svg';
import motorcycle from '../assets/motorcycle.svg';
import train from '../assets/train.svg';

const detail = {
  width: '50%'
};

const icon = {
  width: '50px',
  height: '50px'
}

const border = {
  border: '1px solid #000',
}

const column = {borderLeft: '1px solid #000', padding: 10};

class List extends Component {
  render() {
    return (
      <div>
        <div style={border} className="d-flex flex-row">
          <div className="d-flex align-items-center">
            <img style={icon} alt="bus" src={bus}/>
          </div>
          <div style={{...column, flex: '50%'}} className="d-flex">
            <p>1. Go to Victory Monoment</p>
          </div>
          <div style={{...column, flex: '50%'}} className="d-flex flex-column">
            <div style={{whiteSpace: 'pre'}}>20 Minutes</div>
          </div>
        </div>
        <div style={border} className="d-flex flex-row">
          <div className="d-flex align-items-center">
            <img style={icon} alt="train" src={train}/>
          </div>
          <div style={{...column, flex: '50%'}} className="d-flex">
            <p>2. Go to BTS Mochit</p>
          </div>
          <div style={{...column, flex: '50%'}} className="d-flex flex-column">
            <div style={{whiteSpace: 'pre'}}>20 Minutes</div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;