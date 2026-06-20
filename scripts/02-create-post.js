import http from 'k6/http';
import { sleep } from 'k6';
import { BASE_URL } from '../config/env.js';
import { checkStatus } from '../utils/checks.js';

export const options = {
  vus: 5,
  duration: '30s',
};

export default function () {
  const payload = JSON.stringify({
    title: 'QA Testing',
    body: 'Learning k6 POST request',
    userId: 1,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = http.post(`${BASE_URL}/posts`, payload, params);

  checkStatus(response, 201);

  sleep(1);
}