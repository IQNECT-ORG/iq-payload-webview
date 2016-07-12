import React from 'react';
import _ from 'lodash';

export default (props) => {
  let image;
  if(props.card.icon == null || props.card.icon.length === 0) {
    image = null;
  } else {
    image = <img className="card-img" src={props.card.icon} alt="Card image cap"/>;
  }

  const action = _.first(props.card.ctas);

  return (
    <a
      className="card clearfix"
      href={action.href}
      data-event-action="click"
      data-event-category={props.url}
      data-event-label={action.href}>
      <div className="pull-xs-left">
        {image}
      </div>
      <div className="card-block pull-xs-left">
        <p className="card-text">
          {props.card.description}
          <br/>
          {props.card.price}
        </p>
      </div>
      <img className="card-arrow" src="/assets/images/arrow.svg"/>
    </a>
  );
}