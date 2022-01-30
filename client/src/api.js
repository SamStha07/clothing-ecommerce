import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '"*"',
  },
});
