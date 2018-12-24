import React, { Component } from 'react';
import { Card, Button } from 'mdbreact'

class Passport extends Component {
  
  render() {
  
    return (
    <div className="d-flex flex-column">
      <Card className="face front">
        <div className="row align-items-center">
          <div className="col col-2">
            <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
            alt="" style={{width: 100, height: 100, borderRadius: 50}}/>
          </div>
          <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
        </div>
        <div className="row">
          <div  className="col p-0 offset-2">
            <h1 style={{margin: 0, textAlign: 'left'}}>Easy to Go Chidlom</h1>
          </div>
        </div>
        <div className="row">
          <div style={{textAlign: 'left'}} className="col p-0 offset-2">Asoke → Chidlom</div>
        </div>
      </Card>
      <Button className="align-self-end">READ</Button>
    </div>
    );
  }
}

export default Passport;