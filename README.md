# k6 Performance Testing Framework

A beginner-friendly yet scalable Performance Testing Framework built using k6.

This project demonstrates:

* API Load Testing
* API Functional Validation
* Performance Threshold Validation
* HTML Report Generation
* End-to-End API Flow Testing
* Reusable Test Utilities
* Configurable Environment Setup

---

# Project Structure

```text
k6-performance-testing/
│
├── config/
│   └── env.js
│
├── data/
│   └── posts.json
│
├── scripts/
│   ├── 01-get-posts.js
│   ├── 02-create-post.js
│   ├── 03-load-test.js
│   └── 04-end-to-end-flow.js
│
├── utils/
│   └── checks.js
│
├── reports/
│
├── README.md
└── .gitignore
```

---

# Prerequisites

Install k6.

### macOS

```bash
brew install k6
```

Verify installation:

```bash
k6 version
```

---

# Framework Components

## Environment Configuration

File:

```text
config/env.js
```

Stores application URLs and environment-specific configurations.

Example:

```javascript
export const BASE_URL = 'https://jsonplaceholder.typicode.com';
```

---

## Reusable Validations

File:

```text
utils/checks.js
```

Provides reusable validation methods for API responses.

Example:

```javascript
checkStatus(response, 200);
```

---

## Test Data

File:

```text
data/posts.json
```

Contains sample request payloads and reusable test data.

---

# Test Scripts

## 1. GET API Validation

File:

```text
scripts/01-get-posts.js
```

Validates:

* API accessibility
* HTTP status code
* Response handling

Run:

```bash
k6 run scripts/01-get-posts.js
```

---

## 2. POST API Validation

File:

```text
scripts/02-create-post.js
```

Validates:

* Request payload submission
* API creation response
* Status code verification

Run:

```bash
k6 run scripts/02-create-post.js
```

---

## 3. Load Testing

File:

```text
scripts/03-load-test.js
```

Simulates concurrent users hitting the API.

Current Load Profile:

```text
0 → 10 Users
10 → 50 Users
50 → 0 Users
```

Run:

```bash
k6 run scripts/03-load-test.js
```

---

## 4. End-to-End User Journey

File:

```text
scripts/04-end-to-end-flow.js
```

Simulates:

1. Fetch Data
2. Create Record
3. Retrieve Created Data

Run:

```bash
k6 run scripts/04-end-to-end-flow.js
```

---

# Performance Thresholds

Example:

```javascript
thresholds: {
  http_req_duration: ['p(95)<500'],
  http_req_failed: ['rate<0.01'],
}
```

Meaning:

| Metric        | Criteria                 |
| ------------- | ------------------------ |
| Response Time | 95% requests under 500ms |
| Failure Rate  | Less than 1%             |

---

# HTML Report Generation

Framework supports automatic HTML report generation.

Generated File:

```text
summary.html
```

Open report:

```bash
open summary.html
```

Report includes:

* Response Time Metrics
* Throughput
* Request Counts
* Error Rate
* Threshold Results
* Performance Summary

---

# Key Performance Metrics

## Response Time

Time taken for API response.

## P95

95% of requests completed within the specified duration.

## Throughput

Requests processed per second.

## Error Rate

Percentage of failed requests.

## Virtual Users (VUs)

Concurrent users simulated by k6.

---

# Sample Execution

```bash
k6 run scripts/03-load-test.js
```

Output:

```text
checks.....................100.00%
http_req_duration..........avg=180ms
http_req_failed............0.00%
iterations.................1500
vus........................50
```

---

# Author
Varun Malhotra

