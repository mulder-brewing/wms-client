import axios from 'axios';

export const railsAxios = axios.create({
    baseURL:'http://0.0.0.0:3001'
})