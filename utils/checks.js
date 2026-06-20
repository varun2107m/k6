import { check } from 'k6';

export function checkStatus(response, expectedStatus = 200) {
  check(response, {
    [`status is ${expectedStatus}`]: (r) => r.status === expectedStatus,
  });
}
