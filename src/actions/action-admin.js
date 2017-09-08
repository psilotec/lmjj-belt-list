import { SEARCH_USER } from './types';
import database from '../startup/db';

const Users = database.ref().child('users');

const searchUser = email => {
  return dispatch => {
    console.log(email);
    // Find user
    Users.orderByChild('name')
      .startAt(email)
      .endAt(email + '\uf8ff')
      .once('value')
      .then(snapshot => {
        dispatch({
          type: SEARCH_USER,
          payload: snapshot.val(),
        });
      });
    // Fetch user data

    // Return user data object to be parsed in reducer
  };
};

export { searchUser };
