import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://mate.academy/students-api',
});
