import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

export default function(state = false, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            console.log(action.payload);
            return true;
        case LOGIN_FAIL:
            console.log(action.payload);
            return false;
        case REGISTER_SUCCESS:
            console.log(action.payload);
            return true;
        case REGISTER_FAIL:
            console.log(action.payload);
            return false;
        default:
            return state;
    }
};