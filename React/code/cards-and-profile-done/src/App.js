import React from 'react';
import {comments} from './commentData';
import Card from './Card';

function App(){
  const cards = comments.map(comment => {
    return (
      <div className='cards-list'>
        <Card commentObject={comment}/>
      </div>      
    );
  });
  return cards;
}

export default App;