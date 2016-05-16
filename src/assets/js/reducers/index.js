import { combineReducers } from 'redux';
import cards from './cards';
import swipe from './swipe';

export default combineReducers({
  cards,
  swipe
});