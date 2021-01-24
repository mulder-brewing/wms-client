import { railsAxios } from '../../axios/railsAxios';

export const signIn = (username, password) => railsAxios.post('signin', {username, password});