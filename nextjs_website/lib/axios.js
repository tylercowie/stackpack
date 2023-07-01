const axios = require('axios');

const instance = axios.create({
  baseURL: process.env.DIRECTUS_API_URL,
  timeout: 1000,
});

module.exports = instance;