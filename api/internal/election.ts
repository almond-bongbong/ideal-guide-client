import { internalAxios } from '../index';

export const getCandidates = () => internalAxios.get('/api/election/candidates');
export const getDistricts = () => internalAxios.get('/api/election/districts');