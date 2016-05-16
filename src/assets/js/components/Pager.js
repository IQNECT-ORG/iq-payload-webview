import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';

export default (props) => {
  return (
    <ul className="caro-pager">
      {_.times(props.pageCount, n => {
        const className = classNames('caro-pager__page', {
          'caro-pager__page--active': props.activePage === n
        });

        return (
          <li className={className} key={n}>
            <div></div>
          </li>
        );
      })}
    </ul>
  );
}