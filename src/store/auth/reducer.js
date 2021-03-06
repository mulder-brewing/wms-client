import * as types from './types';

const initialState = {
    isCheckingAuth: true,
    isSignedIn: false,
    isSignedUp: false,
    isEmailValidated: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.AUTH_CHECK_END:
            return {
                ...state,
                isCheckingAuth: false
            };
        case types.EMAIL_VALID:
            return {
                ...state,
                isEmailValidated: true
            }
        case types.SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                isSignedUp: true,
                isEmailValidated: true
            };
        case types.SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                isSignedUp: false,
                isEmailValidated: false
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