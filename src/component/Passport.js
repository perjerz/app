import React, { Component } from 'react';
import { Card, Button } from 'mdbreact'

class Passport extends Component {
  
  render() {
    const {img, name, title, start, end, handleClick, id } = this.props;
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
        <div className="row justify-content-end">
          <Button color="warning" onClick={(e) => handleClick(id)}>READ</Button>
        </div>
      </Card>
    );
  }
}

export default Passport;