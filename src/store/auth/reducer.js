import * as types from './types';

const initialState = {
    isSignedIn: false,
    isSignedUp: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                isSignedUp: true
            };
        case types.SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                isSignedUp: false
            };
        case types.SIGN_UP:
            return {
                ...state,
                isSignedIn: false,
                isSignedUp: true
            };
        default:
            return state;
    }
};

export default authReducer;