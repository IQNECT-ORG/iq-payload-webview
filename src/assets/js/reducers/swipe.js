import { createReducer } from 'redux-create-reducer';
import { SWIPE_UPDATE } from '../actions';
import _ from 'lodash';

export default createReducer({
  slide: 0
}, {
  [SWIPE_UPDATE]: (state, action) => {
    return _.assign({}, state, action.payload);
  }
});