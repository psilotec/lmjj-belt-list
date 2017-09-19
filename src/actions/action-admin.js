import { SEARCH_USER } from './types';
import database from '../startup/db';

const Users = database.ref().child('users');

const searchUser = email => {
  return dispatch => {
    console.log(email);
    // Find user, fetch user data, and return to be parsed
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
  };
};

const changeUserBelt = (userId, newBelt) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Users.child(userId)
        .update({ beltPermissionId: newBelt })
        .then(() => resolve());
    });
  };
};

export { searchUser, changeUserBelt };
