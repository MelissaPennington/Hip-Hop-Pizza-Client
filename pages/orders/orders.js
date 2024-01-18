// pages/orders.js
import React, { useEffect, useState } from 'react';
import { getOrders } from '../../utils/data/orderData';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await getOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1>View All Orders</h1>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order ID: {order.id}, Name: {order.name}, Type: {order.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
