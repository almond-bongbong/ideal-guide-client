import { internalAxios } from '../index';

export const getCandidates = (city: string, district: string) =>
  internalAxios.get('/api/election/candidates', { params: { city, district } });
export const getDistricts = () => internalAxios.get('/api/election/districts');
