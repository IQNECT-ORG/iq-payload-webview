import { createAction } from 'redux-actions';

export const LOAD_HOME_SCENE = 'LOAD_HOME_SCENE';
export const loadHomeScene = createAction(LOAD_HOME_SCENE);

export const FETCH_CARDS_REQUEST = 'FETCH_CARDS_REQUEST';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';
export const fetchCardsRequest = createAction(FETCH_CARDS_REQUEST);
export const fetchCardsSuccess = createAction(FETCH_CARDS_SUCCESS);
export const fetchCardsFailure = createAction(FETCH_CARDS_FAILURE);

export const SWIPE_UPDATE = 'SWIPE_UPDATE';
export const swipeUpdate = createAction(SWIPE_UPDATE);
