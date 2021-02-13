import { railsAxios } from '../../axios/railsAxios';

export const authCheck = (token) => railsAxios.get('auth/auth_check', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

export const signIn = (username, password) => railsAxios.post('auth/sign_in', {username, password});

export const signUp = postData => railsAxios.post('auth/sign_up', postData);

export const validateEmail = postData => railsAxios.post('auth/confirm_email', postData);