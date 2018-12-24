import React, { Component } from 'react';
import turnRight from '../assets/turn-right.svg';
import { MDBBtn } from "mdbreact";
import escalator from '../assets/vtm_3.jpg';
import bts from '../assets/vtm_5.jpg';
import exit from '../assets/vtm_6.jpg';
import train from '../assets/train.svg';
import Topnav from './Topnav';
import { Card } from 'mdbreact';

const mlAuto = {
  marginLeft: 'auto'
};

class List extends Component {

  render() {
    const bloggers = [
      {id: 1, img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg', name: 'Michael', title: 'Easy to go to Chidlom', start: 'Asoke', end: 'Chidlom', stars: 5},
      {id: 2, img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg', name: 'Michael', title: 'Fastest to Chidlom', start: 'Asoke', end: 'Chidlom', stars: 5}
    ];
    return (
      <div>
        <Topnav/>
        <div className="d-flex align-items-center pt-4" style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20, marginBottom: 20, backgroundColor: '#2DB1FC' }}>
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" style={{width: 65, height: 65, borderRadius: 50}} />
          <div className="d-flex flex-column ml-4 text-left">
            <span style={{fontSize: 12}}>Michael Oleo</span>
            <span style={{fontSize: 12}}>Follower 349 | Following 78</span>
          </div>
          <MDBBtn style={{marginLeft: 'auto', border: '1px solid #fff !important'}} outline color="primary">
          <span style={{fontSize: 10, whiteSpace: 'nowrap'}}>Follow +</span></MDBBtn>
        </div>
        <div style={{paddingLeft: 20, paddingRight: 20}}>
          <div className="row">
            <div className="col">
              <h3 style={{textAlign: 'start'}}>Easy to go to Chidlom</h3>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col text-start">Asoke → Chidlom</div>
            <div className="col text-end" style={{color: '#2DB1FC'}}>15 Min</div>
          </div>
        </div>
        <Card style={{margin: 10}}>
          <div className="row align-items-center" style={{paddingRight: 10}} >
            <div class="col">
              <img src={turnRight} />
            </div>
            <div class="col">
              <div className="ml-4" style={{color: '#2DB1FC'}}>Go to BTS Platform</div>
            </div>
            <div class="col">
              <img src={escalator} style={{height: 100, marginTop: 10, marginBottom: 10}} />
            </div>
          </div>
        </Card>
        <Card style={{margin: 10}}>
        <div className="row align-items-center" style={{paddingRight: 10}}>
          <div class="col">
            <img src={train} />
          </div>
          <div class="col">
            <div className="ml-4" style={{color: '#2DB1FC'}}>Get in BTS</div>
          </div>
          <div class="col">
            <img src={bts} style={{height: 100, marginTop: 10, marginBottom: 10}} />
          </div>
        </div>
        </Card>
        <Card style={{margin: 10}}>
          <div className="row align-items-center" style={{paddingRight: 10}}>
            <div class="col">
              <img src={turnRight} />
            </div>
            <div class="col">
              <div className="ml-4" style={{color: '#2DB1FC'}}>Exit BTS Platform</div>
            </div>
            <div class="col">
              <img src={exit} style={{height: 100, marginTop: 10, marginBottom: 10}} />
            </div>
          </div>
        </Card>
      </div>
    );
  }
  selectPassport(id) {
    this.props.history.push('detail?id='+id);
  }
}

export default List;