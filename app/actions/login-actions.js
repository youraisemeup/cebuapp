/**
 * Created by Travis on 10/21/18.
 */
import * as actions from "../actions/action-types";

export function login(email, password) {
  return {
    type: actions.LOGIN_ACTION,
    username: email,
    password: password
  }
}

export function setError(error) {
  return {
    type: actions.LOGIN_ERROR,
    error: error
  }
}

export function setLoginSuccess(token, username, password) {
  return {
    type: actions.LOGIN_SUCCESS,
    token,
    username,
    password
  }
}
