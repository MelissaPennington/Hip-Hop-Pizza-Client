import { clientCredentials } from '../client';

// API calls:
const getOrders = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`, {
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

const getSingleOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createOrder = (order) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
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

const updateOrder = (payload, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(payload),
  })
    .then(resolve)
    .catch(reject);
});

const deleteOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      resolve();
    })
    .catch(reject);
});

// Functions to add to and remove items from an order:
const addOrderItem = (orderId, itemId) => fetch(`${clientCredentials.databaseURL}/orders/${orderId}/add_order_item/${itemId}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.json());

const removeOrderItem = (orderId, orderItemId) => fetch(`${clientCredentials.databaseURL}/orders/${orderId}/remove_order_item/${orderItemId}`, {
  method: 'DELETE',
}).then(() => {});

const createRevenueData = (node) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/revenue-nodes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(node),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.error('Error: Order not Created:', error);
      reject(error);
    });
});

const closeOrder = (id, status) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${id}/close`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(status),
  })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.error('Error: Item not added:', error);
      reject(error);
    });
});

export {
  getOrders,
  getSingleOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  addOrderItem,
  removeOrderItem,
  createRevenueData,
  closeOrder,
};
