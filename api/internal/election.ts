import { internalAxios } from '../index';

export const getCandidates = (city: string, district: string) =>
  internalAxios.get('/api/election/candidate', { params: { city, district } });
export const getDistricts = () => internalAxios.get('/api/election/district');
export const getPartyPolicy = (partyName: string) =>
  internalAxios.get('/api/election/party/policy', { params: { partyName } });
export const getParties = () => internalAxios.get('/api/election/party');
