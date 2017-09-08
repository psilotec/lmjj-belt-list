// import {} from './types';
import database from '../startup/db';

const Users = database.ref().child('users');

const searchUser = email => {
  console.log(email);
  // Find user
  Users.orderByChild('name')
    .startAt(email)
    .endAt(email + '\uf8ff')
    .once('value');
  // Fetch user data

  // Return user data object to be parsed in reducer
  // return {
  //   type: USER_SELECTED,
  //   payload: belt,
  // };
};

export { searchUser };
