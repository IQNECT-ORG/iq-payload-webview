import _ from 'lodash';
import React from 'react';
import Card from './Card';

export default (props) => {
  return (
    <ul className="card-list">
      {_.map(props.cards, (card, index) => {
        return (
          <li className="card-list__item" key={index}>
            <Card card={card}/>
          </li>
        );
      })}
    </ul>
  );
}