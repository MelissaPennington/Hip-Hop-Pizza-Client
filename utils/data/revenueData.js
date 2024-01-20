import { clientCredentials } from '../client';

const getRevenues = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/revenues`, { // Update the URL to /revenues
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createRevenue = (rev) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/revenues`, { // Update the URL to /revenues
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rev),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.error('Create Order Error:', error);
      reject(error);
    });
});

export {
  getRevenues,
  createRevenue,
};
