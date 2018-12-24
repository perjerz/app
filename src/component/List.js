import React, { Component } from 'react';
import bus from '../assets/bus.svg';
import motorcycle from '../assets/motorcycle.svg';
import train from '../assets/train.svg';
import Passport from './Passport';
import { Button} from 'mdbreact';

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
    const bloggers = [
      {id: 1, img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg', name: 'Michael', title: 'Easy to go to Chidlom', start: 'Asoke', end: 'Chidlom'}
    ];
    return (
      <div>
        {bloggers.map(b => (<Passport img={b.img} name={b.name} title={b.title} start={b.start} end={b.end} handleClick={e => this.selectPassport(b.id)}></Passport>))}
      </div>  
    );
  }
  selectPassport(id) {
    console.log(id);
    //TODO: Navigate
  }
}

export default List;