const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    GOV_API_KEY: isDev
      ? 'Z7OXb5IIZUKhC9plouAV+yLyi9kQWT3wCFTNDDc3gQFy6RYQSmXFGuRHEKwtAuKf5NiXNkl3zRUeopi+74yh9Q=='
      : 'Z7OXb5IIZUKhC9plouAV+yLyi9kQWT3wCFTNDDc3gQFy6RYQSmXFGuRHEKwtAuKf5NiXNkl3zRUeopi+74yh9Q==',
    HOST: isDev
      ? 'http://localhost:3000'
      : 'http://localhost:3000',
  };

  return { env };
};
