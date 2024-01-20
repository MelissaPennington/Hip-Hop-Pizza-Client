import { clientCredentials } from '../client';

const getRevenues = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/revenues`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => {
      console.error('Error fetching revenue data:', error);
      reject(error);
    });
});

const createRevenue = (revenue) => new Promise((resolve, reject) => {
  console.warn('Sending Revenue Data:', revenue);
  fetch(`${clientCredentials.databaseURL}/revenues`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(revenue),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getRevenues, createRevenue };
// import { clientCredentials } from '../client';

// const getRevenue = () => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/revenue-nodes`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

// export default getRevenue;
// import { clientCredentials } from '../client';

// const getRevenues = (uid) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/revenues`, { // Update the URL to /revenues
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `${uid}`,
//     },
//   })
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

// const createRevenue = (rev) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/revenues`, { // Update the URL to /revenues
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(rev),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       resolve(data);
//     })
//     .catch((error) => {
//       console.error('Create Order Error:', error);
//       reject(error);
//     });
// });

// export {
//   getRevenues,
//   createRevenue,
// };
