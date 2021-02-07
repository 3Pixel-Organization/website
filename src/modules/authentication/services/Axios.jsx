import Axios from 'axios';

import { BACKEND_URL } from 'config';

export const axios = Axios.create({
  baseURL: BACKEND_URL,
  headers: {
    common: {
      Authorization: 'Bearer X',
    },
  },
});

export const external = Axios.create({});

export const setAccessToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
