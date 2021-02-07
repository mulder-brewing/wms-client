import i18next from 'i18next';

import * as api from './api';
import * as actions from './actions';
import * as alertActions from '../alert/actions';

const tokenKey = 'token';

export const authCheck = async dispatch => {
    const token = localStorage.getItem(tokenKey);
    if (token) {
        if (await api.authCheck(token)) {
            dispatch(actions.signIn());
        } else {
            dispatch(signOut);
        }
    }
    dispatch(actions.authCheckEnd());
}

export const signIn = (username, password) => async dispatch => {
    const response = await api.signIn(username, password);
    if (response) {
        localStorage.setItem(tokenKey, response.data.token);
        dispatch(actions.signIn());
    }
}

export const signOut = dispatch => {
    localStorage.removeItem(tokenKey);
    dispatch(actions.signOut());
}

export const signUp = postData => async dispatch => {
    if (await api.signUp(postData)) {
        dispatch(actions.signUp());
        dispatch(alertActions.success(i18next.t('alert:success.signed_up'), null));
    }
}