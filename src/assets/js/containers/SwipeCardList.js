import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import { swipeUpdate } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    swipe: state.swipe,
    cards: state.cards,
    url: state.params.url
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSwipe: (index, el) => {
      dispatch(swipeUpdate({
        slide: index
      }));
    }
  };
}

let DecoratedComponent = CardList;
DecoratedComponent = connect(mapStateToProps, mapDispatchToProps)(DecoratedComponent);

export default DecoratedComponent;