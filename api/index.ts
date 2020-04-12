import axios from 'axios';

export const internalAxios = axios.create({
  baseURL: process.env.HOST,
});
