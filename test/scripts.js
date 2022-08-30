import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  ext: {
    loadimpact: {
      projectID: 3598749,
      // Test runs with the same name groups test runs together
      name: "test 3"
    }
  },
  vus: 50,
  duration: '1m',
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<2000'], // 95% of requests should be below 200ms
  }

};

export default function () {
  let res = http.get('http://localhost:3000/api/products/1/related');
  check(res,
    { 'get product is status 200': (r) => r.status === 200,
    // 'text verification': (r) => r.body.includes("Onesie")
    // 'text verification': (r) => r.body.includes("Forest Green & Black")
    }
  );
}

// 'http://localhost:3000/products/?page=1&count=5'
// 'http://localhost:3000/products/1';
// 'http://localhost:3000/products/1/styles';
// 'http://localhost:3000/products/1/related';