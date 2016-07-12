import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cards,
    url: state.params.url
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
}

let DecoratedComponent = CardList;
DecoratedComponent = connect(mapStateToProps, mapDispatchToProps)(DecoratedComponent);

export default DecoratedComponent;