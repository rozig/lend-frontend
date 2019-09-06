import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://34.82.217.239/api',
  withCredentials: true,
  // headers: {'X-Custom-Header': 'foobar'}
});
