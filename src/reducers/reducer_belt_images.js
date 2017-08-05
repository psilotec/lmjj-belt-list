import { FETCH_BELT_IMAGES } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BELT_IMAGES:
      return action.payload;
    default:
      return state;
  }
}
