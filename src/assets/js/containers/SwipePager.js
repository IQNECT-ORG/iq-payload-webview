import React from 'react';
import { connect } from 'react-redux';
import Pager from '../components/Pager';
import { swipeUpdate } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    pageCount: state.cards.length,
    activePage: state.swipe.slide
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
}

let DecoratedComponent = Pager;
DecoratedComponent = connect(mapStateToProps, mapDispatchToProps)(DecoratedComponent);

export default DecoratedComponent;