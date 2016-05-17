import { combineReducers } from 'redux';
import cards from './cards';
import swipe from './swipe';
import params from './params';

export default combineReducers({
  cards,
  swipe,
  params
});