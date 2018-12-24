import React, { Component } from 'react';
import { Card, CardBody, Col, Row} from 'mdbreact'

class Passport extends Component {
  render() {
    return (
    <div>
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
          <p className="font-weight-bold blue-text">Web developer</p>
        </div>
      </Card>
    </div>
    );
  }
}

export default Passport;