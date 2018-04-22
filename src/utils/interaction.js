// src/utils/interaction.js

import axios from 'axios'

export const IP = '/api';
export const myAxios = axios.create({
    baseURL: IP,
// withCredentials: true
})