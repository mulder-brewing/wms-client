import * as types from './types';

export const authCheckEnd = () => ({
    type: types.AUTH_CHECK_END
});

export const signIn = () => ({
    type: types.SIGN_IN
});

export const signOut = () => ({
    type: types.SIGN_OUT
});

export const signUp = () => ({
    type: types.SIGN_UP
});

export const emailValid = () => ({
    type: types.EMAIL_VALID
});

