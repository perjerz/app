import React, { Component } from 'react';
import { Card, Button } from 'mdbreact'

import starImg from '../assets/star.svg';

class Passport extends Component {
  
  render() {
    const {img, name, title, start, end, handleClick, id, stars: numberStars } = this.props;
    const stars = (Array(numberStars)).fill(1).map((val, i) => i);
    return (
      <Card className="face front p-4">
        <div className="row align-items-center">
        <img
            src={img}
            alt="" style={{width: 80, height: 80, borderRadius: 50}}/>
          <div className="col ml-4 p-0">
            <h4 style={{textAlign: 'left'}} className="font-weight-bold mb-3">{name}</h4>
          </div>
        </div>
        <div className="row">
          <div style={{marginLeft: 105, textAlign: 'left'}}>{title}</div>
        </div>
        <div className="row">
          <div style={{marginLeft: 105, textAlign: 'left'}} className="col p-0 offset-4">{start} → {end}</div>
        </div>
        <div className="row">
          <div style={{marginLeft: 105, textAlign: 'left'}} className="col p-0 offset-4">
            {stars.map(star => <img style={{width: 30, height: 30}} src={starImg} alt="star"/>)}
          </div>
        </div>
        <div className="row justify-content-end">
          <Button color="warning" onClick={(e) => handleClick(id)}>READ</Button>
        </div>
      </Card>
    );
  }
}

export default Passport;