import * as types from './types';

const initialState = {
    token: null,
    expiration: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SIGNED_IN:
            return {
                ...state,
                token: action.token,
                expiration: action.expiration
            }
        default:
            return state;
    }
};

export default authReducer;