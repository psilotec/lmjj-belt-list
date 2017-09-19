import { SEARCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SEARCH_USER:
      return action.payload;
    default:
      return state;
  }
}
