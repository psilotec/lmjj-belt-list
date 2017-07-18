import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import firebase from 'firebase';

const login = ({ email, password }) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch({ type: LOGIN_SUCCESS, payload: { user } });
                resolve(user);
            })
            .catch((error) => {
                dispatch({ type: LOGIN_FAIL, payload: { error } });
                reject(error);
            });
        });
    };
};

export {
    login,
};