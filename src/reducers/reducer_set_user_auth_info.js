import { SET_USER_AUTH_INFO, CLEAR_USER_INFO } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case SET_USER_AUTH_INFO:
      return action.payload;
    case CLEAR_USER_INFO:
      return null;
    default:
      return state;
  }
}
