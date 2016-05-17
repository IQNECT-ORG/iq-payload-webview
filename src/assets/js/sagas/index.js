import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, take, fork, select } from 'redux-saga/effects';
import qs from 'qs';
import {
  LOAD_HOME_SCENE,

  fetchCardsRequest,
  fetchCardsSuccess,
  fetchCardsFailure,

  paramsUpdate,
  cardsUpdate
} from '../actions';
import * as cardAPIs from '../services/api/cards';

//const testData = {"cards":[{"title":"Test Card","icon":"https://api.icons8.com/download/9cbe8952d467097e25a1c099f91b05309bd78fec/Color/PNG/256/Printing/user_typing_using_typewriter-256.png","description":"This is the description","ctas":[{"label":"Hmmm","href":"http://www.example.com"}]}, {"title":"Test Card","icon":"","description":"This is the description","ctas":[{"label":"Hmmm","href":"http://www.example.com"}]}]};

function* loadHomeScene(action) {
  // Shortcut and remove the first character (question mark)
  const queryString = action.payload.queryString.substr(1);
  const queryObject = qs.parse(queryString);

  yield put(paramsUpdate(queryObject));

  if(queryObject.json) {
    const json = JSON.parse(queryObject.json);
    yield put(cardsUpdate(json));
  } else {
    yield put(fetchCardsRequest(queryObject.url));
    try {
      const { json, response } = yield call(cardAPIs.get, queryObject.url);

      yield put(fetchCardsSuccess(json));
    } catch (err) {
      yield put(fetchCardsFailure({
        error: true
      }));
    }
  }

}

//-----------------------------------------------------------
//----------------------- Watchers --------------------------
//-----------------------------------------------------------

function* watchLoadHomeScene() {
  yield takeEvery(LOAD_HOME_SCENE, loadHomeScene);
}

export default function* () {
  yield fork(watchLoadHomeScene);
}