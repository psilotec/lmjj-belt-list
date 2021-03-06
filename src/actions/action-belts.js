import {
  FETCH_BELTS,
  BELT_SELECTED,
  FETCH_BELT_IMAGES,
  BELT_IMAGE_MODAL_TOGGLE,
} from './types';
import database from '../startup/db';

const Belts = database.ref().child('belts');
const BeltImages = database.ref().child('beltImages');

const fetchBelts = () => {
  return dispatch => {
    Belts.on('value', snapshot => {
      dispatch({
        type: FETCH_BELTS,
        payload: snapshot.val(),
      });
    });
  };
};

const selectBelt = belt => {
  return {
    type: BELT_SELECTED,
    payload: belt,
  };
};

const fetchBeltImages = () => {
  return dispatch => {
    BeltImages.on('value', snapshot => {
      dispatch({
        type: FETCH_BELT_IMAGES,
        payload: snapshot.val(),
      });
    });
  };
};

const beltImageModalToggle = () => {
  return {
    type: BELT_IMAGE_MODAL_TOGGLE,
  };
};

export { fetchBelts, selectBelt, fetchBeltImages, beltImageModalToggle };
