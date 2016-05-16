import React from 'react';
import _ from 'lodash';

export default (props) => {
  return (
    <div className="card">
      <img className="card-img-top" alt="Card image cap"/>
      <div className="card-block">
        <h1 className="card-title">
          {props.card.title}
        </h1>
        <p className="card-text">
          {props.card.description}
        </p>
        {_.map(props.card.ctas, (cta, index) => {
          return (
            <a
              className="btn btn-primary btn-block"
              key={index}
              href={cta.href}>
              {cta.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}