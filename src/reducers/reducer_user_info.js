import { USER_INFO } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case USER_INFO:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
};