import { createReducer } from 'redux-create-reducer';
import { FETCH_CARDS_SUCCESS, CARDS_UPDATE } from '../actions';

export default createReducer([], {
  [FETCH_CARDS_SUCCESS]: (state, action) => {
    return action.payload.cards;
  },
  [CARDS_UPDATE]: (state, action) => {
    return action.payload.cards;
  }
});