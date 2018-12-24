import React, { Component } from 'react';
import Passport from './Passport';
import { TextField } from '@material-ui/core';
import location from '../assets/location.svg'
import Topnav from './Topnav';

class List extends Component {
  state = {
    location: '',
    destination: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  render() {
    const bloggers = [
      {id: 1, img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg', name: 'Michael', title: 'Easy to go to Chidlom', start: 'Asoke', end: 'Chidlom', stars: 5},
      {id: 2, img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg', name: 'Michael', title: 'Fastest to Chidlom', start: 'Asoke', end: 'Chidlom', stars: 5}
    ];
    return (
      <div>
        <Topnav/>
        <form noValidate autoComplete="off" style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20, marginBottom: 20, backgroundColor: '#2DB1FC' }}>
          <div className="d-flex align-items-center" style={{marginBottom: 20}}>
            <img className="align-self-end" style={{marginBlockEnd: 5}} src={location} />
            <TextField
              style={{marginLeft: 20}}
              id="standard-name"
              label="Your Location"
              value={this.state.location}
              onChange={this.handleChange('location')}
              margin="auto"
              width="100%"
            />
          </div>
          <div className="d-flex align-items-center" style={{marginBottom: 20}}>
            <TextField
              style={{marginLeft: 40}}
              id="standard-name"
              label="Destination"
              value={this.state.destination}
              onChange={this.handleChange('destination')}
              margin="auto"
              width="100%"
            />
          </div>
        </form>
        <div style={{paddingLeft: 20, paddingRight: 20}}>
          {bloggers.map(b => (<Passport img={b.img} name={b.name} title={b.title} start={b.start} end={b.end} handleClick={e => this.selectPassport(b.id)} stars={b.stars}></Passport>))} 
        </div>
        </div>
    );
  }
  selectPassport(id) {
    this.props.history.push('readdetail?id='+id);
  }
}

export default List;