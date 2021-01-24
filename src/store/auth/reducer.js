import * as types from './types';

const initialState = {
    isSignedIn: false,
    user: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SIGNED_IN:
            return {
                ...state,
                isSignedIn: true,
                user: action.user
            }
        default:
            return state;
    }
};

export default authReducer;