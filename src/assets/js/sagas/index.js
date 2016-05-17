import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, take, fork, select } from 'redux-saga/effects';
import qs from 'qs';
import {
  LOAD_HOME_SCENE,

  fetchCardsRequest,
  fetchCardsSuccess,
  fetchCardsFailure,

  paramsUpdate
} from '../actions';
import * as cardAPIs from '../services/api/cards';

function* loadHomeScene(action) {
  // Shortcut and remove the first character (question mark)
  const queryString = action.payload.queryString.substr(1);
  const queryObject = qs.parse(queryString);

  yield put(paramsUpdate(queryObject));

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

//-----------------------------------------------------------
//----------------------- Watchers --------------------------
//-----------------------------------------------------------

function* watchLoadHomeScene() {
  yield takeEvery(LOAD_HOME_SCENE, loadHomeScene);
}

export default function* () {
  yield fork(watchLoadHomeScene);
}