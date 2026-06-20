import http from 'k6/http';
import { sleep } from 'k6';
import { BASE_URL } from '../config/env.js';
import { checkStatus } from '../utils/checks.js';

export const options = {
  vus: 10,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<700'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const getPosts = http.get(`${BASE_URL}/posts`);
  checkStatus(getPosts, 200);

  const payload = JSON.stringify({
    title: 'Internship Application',
    body: 'Student created internship application',
    userId: 1,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const createPost = http.post(`${BASE_URL}/posts`, payload, params);
  checkStatus(createPost, 201);

  const getSinglePost = http.get(`${BASE_URL}/posts/1`);
  checkStatus(getSinglePost, 200);

  sleep(1);
}
