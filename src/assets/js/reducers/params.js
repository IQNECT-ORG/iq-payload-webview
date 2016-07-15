import { createReducer } from 'redux-create-reducer';
import { PARAMS_UPDATE } from '../actions';

export default createReducer({
}, {
  [PARAMS_UPDATE]: (state, action) => {
    return _.assign({}, state, action.payload);
  }
});