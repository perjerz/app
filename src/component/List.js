import React, { Component } from 'react';
import Passport from './Passport';

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