import React from 'react';
import _ from 'lodash';

export default (props) => {
  let image;
  if(props.card.icon == null || props.card.icon.length === 0) {
    image = null;
  } else {
    image = <img className="card-img-top img-fluid" src={props.card.icon} alt="Card image cap"/>;
  }

  return (
    <div className="card text-xs-center">
      {image}
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
              className="btn btn-primary btn-block btn-radius-lg"
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