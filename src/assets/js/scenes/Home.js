import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadHomeScene } from '../actions';
import CardList from '../containers/CardList';

class Home extends Component {

  componentDidMount() {
    this.props.actions.load({
      queryString: document.location.search
    });
  }

  render() {
    return (
      <div className="scene scene--home">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 m-y-1">
              <CardList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
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