import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadHomeScene } from '../actions';
import SwipeCardList from '../containers/SwipeCardList';

class Home extends Component {

  componentDidMount() {
    this.props.actions.load({
      queryString: document.location.search
    });
  }

  render() {
    return (
      <div className="scene scene--home container">
        <div className="col-xs-12">
          <SwipeCardList/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: {
      load: (...args) => {
        dispatch(loadHomeScene.apply(null, args));
      }
    }
  };
}

let DecoratedComponent = Home;
DecoratedComponent = connect(mapStateToProps, mapDispatchToProps)(DecoratedComponent);

export default DecoratedComponent;