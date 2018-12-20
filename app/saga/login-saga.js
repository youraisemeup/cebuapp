/**
 * Created by Kash.C on 11/22/18.
 */
import {call, put, take} from "redux-saga/effects";
import * as actions from "../actions/action-types";
import * as Api from "../api";
import * as loginActions from "../actions/login-actions";
import * as rootActions from "../actions/root-actions";

function* authorize(username, password) {
  try {
    const token = yield call(Api.loginUser, username, password);
    if (typeof token !== 'undefined' && !token.message) {
      yield put(loginActions.setLoginSuccess(token, username, password));
      yield put(rootActions.setToken(token));
      return token;
    } else {
      yield put(loginActions.setError(token));
      return undefined;
    }
  } catch (error) {
    yield put(loginActions.setError(error));
  }
}

export function* loginFlow() {
  while (true) {
    const {username, password} = yield take(actions.LOGIN_ACTION);
    yield put(rootActions.controlProgress(true));
    yield call(authorize, username, password);
    yield put(rootActions.controlProgress(false));
  }
}


