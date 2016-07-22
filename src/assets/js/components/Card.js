import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

export default (props) => {
  let image;
  let cardClassName;
  if(props.card.icon == null || props.card.icon.length === 0) {
    image = null;
    cardClassName = 'card card--text clearfix';
  } else {
    image = <img className="card-img" src={props.card.icon} alt="Card image cap"/>;
    cardClassName = 'card card--image clearfix';
  }

  const action = _.first(props.card.ctas);

  return (
    <a
      className={cardClassName}
      href={action.href}
      data-event-action="click"
      data-event-category={props.url}
      data-event-label={action.href}>
      <div className="card-img-container">
        {image}
      </div>
      <div className="card-block">
        <ReactMarkdown className="card-text" source={props.card.description}/>
      </div>
      <img className="card-arrow" src="/assets/images/arrow.svg"/>
    </a>
  );
}