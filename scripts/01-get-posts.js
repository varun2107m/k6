import http from 'k6/http';
import { sleep } from 'k6';
import { BASE_URL } from '../config/env.js';
import { checkStatus } from '../utils/checks.js';

export const options = {
  vus: 5,
  duration: '30s',
};

export default function () {
  const response = http.get(`${BASE_URL}/posts`);

  checkStatus(response, 200);

  sleep(1);
}
