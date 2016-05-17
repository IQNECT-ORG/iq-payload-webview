import _ from 'lodash';
import React from 'react';
import Card from './Card';
import ReactSwipe from 'react-swipe';

export default (props) => {
  if(props.cards.length === 0) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <ReactSwipe className="card-list"
      swipeOptions={{
        continuous: false,
        callback: props.onSwipe
      }}
      key={props.cards.length}>
      {_.map(props.cards, (card, index) => {
        return (
          <div className="card-list__item" key={index}>
            <Card card={card} url={props.url}/>
          </div>
        );
      })}
    </ReactSwipe>
  );
}