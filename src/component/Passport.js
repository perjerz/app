import React, { Component } from 'react';
import { Card, Button } from 'mdbreact'

class Passport extends Component {
  
  render() {
    const {img, name, title, start, end, handleClick, id } = this.props;
    return (
      <Card className="face front p-4">
        <div className="row align-items-center">
          <div className="col col-2">
            <img
            src={img}
            alt="" style={{width: 100, height: 100, borderRadius: 50}}/>
          </div>
          <div className="col">
            <h4 className="font-weight-bold mb-3">{name}</h4>
          </div>
        </div>
        <div className="row">
          <div  className="col p-0 offset-2">
            <h3 style={{margin: 0, textAlign: 'left'}}>{title}</h3>
          </div>
        </div>
        <div className="row">
          <div style={{textAlign: 'left'}} className="col p-0 offset-2">{start} → {end}</div>
        </div>
        <div className="row justify-content-end">
          <Button onClick={(e) => handleClick(id)}>READ</Button>
        </div>
      </Card>
    );
  }
}

export default Passport;