import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, USER_INFO, CLEAR_USER_INFO, LOGOUT_SUCCESS, LOGOUT_FAIL } from './types';
import firebase from 'firebase';
import database from '../startup/db';

const Users = database.ref().child('users');

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
                dispatch(createNewUser(email));
                dispatch({ type: USER_INFO, payload: { user } });
                // TODO: dispatch(setUserDbInfo(email));
                dispatch({ type: REGISTER_SUCCESS, payload: { user } });
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
                dispatch({ type: CLEAR_USER_INFO });
                dispatch({ type: LOGOUT_SUCCESS });
                resolve();
            })
            .catch((error) => {
                dispatch({ type: LOGOUT_FAIL, payload: { error } });
                reject(error);
            });
        });
    };
};

const createNewUser = (email) => {
    let propsToUpdate = {
        name: email,
        belt: "white",
        admin: false,
        joinDate: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
    };

    return dispatch => {
        return new Promise((resolve, reject) => {
            Users.push(propsToUpdate)
            .then(() => resolve());
        })
    } 
};

// TODO: const setUserDbInfo = (email) => {

export {
    login,
    register,
    logout,
    createNewUser,
};