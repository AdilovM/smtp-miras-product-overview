// import http from 'k6/http';
// import { check } from 'k6';

// export const options = {
//   vus: 250,
//   duration: '1m',
//   thresholds: {
//     http_req_failed: ['rate<0.01'], // http errors should be less than 1%
//     http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
//   },
// };

// export default function () {
//   let res = http.get('http://localhost:3000/api/products/1/related');
//   check(res, { 'get product is status 200': (r) => r.status === 200 });
// }

// 'http://localhost:3000/products/?page=1&count=5'
// 'http://localhost:3000/products/1';
// 'http://localhost:3000/products/1/styles';
// 'http://localhost:3000/products/1/related';

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 1000 }, // 1000 rps
    { duration: '1m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function () {
  const BASE_URL = 'http://localhost:3000/api'; // make sure this is not production

  let randomProductId = Math.floor(Math.random()*1000000);

  const responses = http.batch([
    ['GET', `${BASE_URL}/products/${randomProductId}`, null],
    ['GET', `${BASE_URL}/products/${randomProductId}/styles`, null]
  ]);

  sleep(1);
}