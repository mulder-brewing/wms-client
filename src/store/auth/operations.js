import i18next from 'i18next';

import * as api from './api';
import * as actions from './actions';
import * as alertActions from '../alert/actions';

export const signIn = (username, password) => async dispatch => {
    const response = await api.signIn(username, password);
    if (response) {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        dispatch(actions.signed_in(response.data.user));
        dispatch(alertActions.success(i18next.t('alert:success.signed_in'), null));
    }
}