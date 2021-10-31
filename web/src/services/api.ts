import axios from 'axios';

import CONFIGS from '../config';

const api = axios.create({
  baseURL: CONFIGS.baseURL
});

export default api;
