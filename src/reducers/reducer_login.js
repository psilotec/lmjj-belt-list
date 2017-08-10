import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return true;
    case LOGIN_FAIL:
      return false;
    case REGISTER_SUCCESS:
      return true;
    case REGISTER_FAIL:
      return false;
    case LOGOUT_SUCCESS:
      return false;
    case LOGOUT_FAIL:
      return true;
    default:
      return state;
  }
}
