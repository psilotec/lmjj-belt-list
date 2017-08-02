import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, USER_INFO, CLEAR_USER_INFO, LOGOUT_SUCCESS, LOGOUT_FAIL } from './types';
import firebase from 'firebase';

const login = ({ email, password }) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch({ type: LOGIN_SUCCESS, payload: { user } });
                dispatch({ type: USER_INFO, payload: { user } });
                resolve(user);
            })
            .catch((error) => {
                dispatch({ type: LOGIN_FAIL, payload: { error } });
                reject(error);
            });
        });
    };
};

const register = ({ email, password }) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch({ type: REGISTER_SUCCESS, payload: { user } });
                dispatch({ type: USER_INFO, payload: { user } });
                resolve(user);
            })
            .catch((error) => {
                dispatch({ type: REGISTER_FAIL, payload: { error } });
                reject(error);
            });
        });
    };
};

const logout = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            firebase.auth().signOut()
            .then(() => {
                dispatch({ type: LOGOUT_SUCCESS });
                dispatch({ type: CLEAR_USER_INFO });
                resolve();
            })
            .catch((error) => {
                dispatch({ type: LOGOUT_FAIL, payload: { error } });
                reject(error);
            });
        });
    };
};

export {
    login,
    register,
    logout,
};