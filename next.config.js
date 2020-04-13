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
  console.log('GOV_KEY:', process.env.GOV_KEY);

  const env = {
    GOV_API_KEY: process.env.GOV_KEY,
  };

  return { env };
};
