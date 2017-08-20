import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_USER_AUTH_INFO,
  SET_USER_DB_INFO,
  CLEAR_USER_INFO,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from './types';
import firebase from 'firebase';
import database from '../startup/db';
import { fetchBelts, fetchBeltImages } from '../actions/index';

const Users = database.ref().child('users');

const login = ({ email, password }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          dispatch({ type: LOGIN_SUCCESS, payload: { user } });
          dispatch({ type: SET_USER_AUTH_INFO, payload: { user } });
          dispatch(setUserDbInfo(email));
          dispatch(fetchBelts());
          dispatch(fetchBeltImages());
          resolve(user);
        })
        .catch(error => {
          dispatch({ type: LOGIN_FAIL, payload: { error } });
          reject(error);
        });
    });
  };
};

const register = ({ email, password }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          dispatch(createNewUser(email));
          dispatch({ type: SET_USER_AUTH_INFO, payload: { user } });
          dispatch(setUserDbInfo(email));
          dispatch({ type: REGISTER_SUCCESS, payload: { user } });
          dispatch(fetchBelts());
          dispatch(fetchBeltImages());
          resolve(user);
        })
        .catch(error => {
          dispatch({ type: REGISTER_FAIL, payload: { error } });
          reject(error);
        });
    });
  };
};

const logout = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: CLEAR_USER_INFO });
          dispatch({ type: LOGOUT_SUCCESS });
          resolve();
        })
        .catch(error => {
          dispatch({ type: LOGOUT_FAIL, payload: { error } });
          reject(error);
        });
    });
  };
};

const createNewUser = email => {
  let propsToUpdate = {
    name: email.toLowerCase(),
    beltPermissionId: 0,
    admin: false,
    joinDate: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
  };

  return dispatch => {
    return new Promise((resolve, reject) => {
      Users.push(propsToUpdate).then(() => resolve());
    });
  };
};

const setUserDbInfo = email => {
  return dispatch => {
    Users.orderByChild('name').equalTo(email).on('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        dispatch({
          type: SET_USER_DB_INFO,
          payload: {
            admin: childSnapshot.val().admin,
            beltPermissionId: childSnapshot.val().beltPermissionId,
            joinDate: childSnapshot.val().joinDate,
          },
        });
      });
    });
  };
};

const loginPersist = user => {
  return dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: { user } });
    dispatch({ type: SET_USER_AUTH_INFO, payload: { user } });
    dispatch(setUserDbInfo(user.email));
    dispatch(fetchBelts());
    dispatch(fetchBeltImages());
  };
};

export { login, register, logout, createNewUser, setUserDbInfo, loginPersist };
