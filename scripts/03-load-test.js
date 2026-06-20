import http from 'k6/http';
import { sleep } from 'k6';
import { BASE_URL } from '../config/env.js';
import { checkStatus } from '../utils/checks.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m', target: 50 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const response = http.get(`${BASE_URL}/posts`);

  if (response.status !== 200) {
    console.log(
      `FAILED | Status=${response.status} | URL=${response.url}`
    );
  }

  checkStatus(response, 200);

  sleep(1);
}

export function handleSummary(data) {
  return {
    'summary.html': htmlReport(data),
  };
}
