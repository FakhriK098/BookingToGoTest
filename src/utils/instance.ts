import axios from 'axios';

const baseURL = 'https://parseapi.back4app.com';

const instance = axios.create({
  baseURL,
  timeout: 30000,
});

export const defaultHeaders = {
  'X-Parse-Application-Id': 'Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3',
  'X-Parse-REST-API-Key': '4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy',
};

instance.defaults.headers.common = defaultHeaders;

export default instance;
