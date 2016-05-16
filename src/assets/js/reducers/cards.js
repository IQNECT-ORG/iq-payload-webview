import { createReducer } from 'redux-create-reducer';
import { FETCH_CARDS_SUCCESS } from '../actions';

export default createReducer([], {
  [FETCH_CARDS_SUCCESS]: (state, action) => {
    return action.payload.cards;
  }
});