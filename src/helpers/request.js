import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 1000,
  withCredentials: true,
  headers: {'X-Custom-Header': 'foobar'}
});
