import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';

export default (props) => {
  return (
    <ul className="pager">
      {_.times(props.pageCount, n => {
        const className = classNames('pager__page', {
          'pager__page--active': props.activePage === n
        });

        return (
          <li className={className} key={n}>
            O
          </li>
        );
      })}
    </ul>
  );
}