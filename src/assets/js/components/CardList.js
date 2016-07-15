import _ from 'lodash';
import React from 'react';
import Card from './Card';

export default (props) => {
  if(props.cards.length === 0) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <ol className="card-list">
      {_.map(props.cards, (card, index) => {
        return (
          <li className="card-list__item" key={index}>
            <Card card={card} url={props.url}/>
          </li>
        );
      })}
    </ol>
  );
}