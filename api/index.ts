import axios from 'axios';

export const internalAxios = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}`,
});
