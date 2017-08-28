import { BELT_IMAGE_MODAL_TOGGLE } from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case BELT_IMAGE_MODAL_TOGGLE:
      return !state;
    default:
      return state;
  }
}
