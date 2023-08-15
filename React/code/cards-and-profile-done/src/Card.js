import React from 'react';
import Header from './Header';
import Body from './Body';
import './styles.css';

function Card(props){
  return (
    <div className='card'>
      <Header profileImg={props.commentObject.profileImg} username={props.commentObject.username}/>
      <Body comment={props.commentObject.comment}/>
      <button className='minimalist-button'>XXX</button>
    </div>
  );
}

export default Card;

